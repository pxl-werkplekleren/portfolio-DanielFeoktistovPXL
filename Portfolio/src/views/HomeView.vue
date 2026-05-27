<script setup>
import { RouterLink } from 'vue-router'

import { homeContent } from '../data/portfolio'
</script>

<template>
  <div class="page-shell home-page">
    <section class="landing-shell panel">
      <article class="landing-copy">
        <div class="hero-copy">
          <p class="eyebrow">PORTFOLIO</p>
          <h1>{{ homeContent.title }}</h1>
          <p class="lead">{{ homeContent.subtitle }}</p>
          <div class="content-stack">
            <p v-for="paragraph in homeContent.intro" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="landing-actions">
          <component
            :is="button.external ? 'a' : RouterLink"
            v-for="button in homeContent.heroButtons"
            :key="button.label"
            :href="button.href"
            :to="button.to"
            class="arcade-button"
            :target="button.external ? '_blank' : null"
            :rel="button.external ? 'noreferrer noopener' : null"
          >
            {{ button.label }}
          </component>
        </div>
      </article>

      <article class="landing-portrait">
        <div class="portrait-frame landing-photo-frame">
          <img
            src="/assets/images/daniel-feoktistov.jpg"
            alt="Portret van Daniel Feoktistov"
          />
        </div>
      </article>
    </section>
  </div>
</template>
