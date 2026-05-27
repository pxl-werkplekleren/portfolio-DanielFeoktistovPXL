<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { wplSections } from '../data/portfolio'

const route = useRoute()

const section = computed(() => wplSections.find((item) => item.path === route.path))
const hasHtmlContent = computed(() => Boolean(section.value?.html?.trim()))
const hasSectionHeader = computed(
  () => Boolean(section.value) && section.value.showSectionHeader !== false,
)
</script>

<template>
  <div v-if="section" class="page-shell">
    <section
      v-if="hasSectionHeader && !hasHtmlContent"
      class="panel rich-content"
    >
      <div
        class="section-content-header"
        :class="{ 'section-content-header--with-cta': section.cta }"
      >
        <div class="section-content-copy">
          <h1 class="section-content-title">{{ section.title }}</h1>
          <p v-if="section.lead" class="section-content-lead">
            {{ section.lead }}
          </p>
        </div>

        <a
          v-if="section.cta"
          class="arcade-button"
          :href="section.cta.href"
          :target="section.cta.external ? '_blank' : null"
          :rel="section.cta.external ? 'noreferrer noopener' : null"
        >
          {{ section.cta.label }}
        </a>
      </div>
    </section>

    <section v-if="section.cta && hasHtmlContent" class="panel section-cta">
      <a
        class="arcade-button"
        :href="section.cta.href"
        :target="section.cta.external ? '_blank' : null"
        :rel="section.cta.external ? 'noreferrer noopener' : null"
      >
        {{ section.cta.label }}
      </a>
    </section>

    <section v-if="hasHtmlContent" class="panel rich-content">
      <div v-if="hasSectionHeader" class="section-content-header">
        <h1 class="section-content-title">{{ section.title }}</h1>
        <p v-if="section.lead" class="section-content-lead">
          {{ section.lead }}
        </p>
      </div>

      <div v-html="section.html" />
    </section>
  </div>
</template>
