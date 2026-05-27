<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import { primaryNav, sectionGroups } from './data/portfolio'

const route = useRoute()

const currentGroup = computed(() => sectionGroups[route.meta.sectionGroup] ?? null)
const showTopbar = computed(() => route.name !== 'home')
const visiblePrimaryNav = computed(() => {
  if (route.name === 'cv' || route.name === 'contact') {
    return primaryNav.filter((item) => item.label !== 'WPL1' && item.label !== 'WPL2')
  }

  if (route.meta.sectionGroup === 'wpl1' || route.meta.sectionGroup === 'wpl2') {
    return primaryNav.filter((item) => item.label !== 'CV' && item.label !== 'Contact')
  }

  return primaryNav
})
</script>

<template>
  <div class="app-shell">
    <header v-if="showTopbar" class="topbar">
      <section class="topbar-main panel">
        <RouterLink class="brand" to="/">
          <span class="brand-mark">DF</span>
          <span class="brand-copy">
            <strong>Daniel Feoktistov</strong>
          </span>
        </RouterLink>

        <nav class="main-nav" aria-label="Hoofdnavigatie">
          <RouterLink
            v-for="item in visiblePrimaryNav"
            :key="item.label"
            class="nav-link"
            :to="item.to"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </section>
    </header>

    <section v-if="currentGroup" class="subnav-panel panel">
      <p class="eyebrow subnav-label">{{ currentGroup.label }}</p>
      <nav class="sub-nav" aria-label="Subnavigatie werkplekleren">
        <RouterLink
          v-for="item in currentGroup.links"
          :key="item.path"
          class="nav-link"
          :to="item.path"
        >
          {{ item.navLabel }}
        </RouterLink>
      </nav>
    </section>

    <RouterView :key="route.fullPath" />
  </div>
</template>
