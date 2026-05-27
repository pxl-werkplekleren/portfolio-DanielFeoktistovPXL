<script setup>
import { RouterLink } from 'vue-router'

import { cvContent } from '../data/portfolio'

function getSkillWidth(level) {
  return `${Math.max(0, Math.min(level, 5)) * 20}%`
}

function getSkillStyle(level, index) {
  return {
    '--skill-width': getSkillWidth(level),
    animationDelay: `${index * 90}ms`,
  }
}
</script>

<template>
  <div class="page-shell">
    <section class="cv-sheet panel">
      <header class="cv-header">
        <div class="cv-header-copy">
          <p class="eyebrow">Curriculum Vitae</p>
          <p class="cv-name">{{ cvContent.name }}</p>
          <p class="cv-role">{{ cvContent.role }}</p>
        </div>

        <div class="button-row cv-header-actions">
        <a
          class="arcade-button"
          :href="cvContent.cvPdfHref"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open originele CV PDF
        </a>
        <RouterLink class="arcade-button ghost" to="/contact">Ga naar contact</RouterLink>
      </div>
      </header>

      <div class="cv-top-grid">
        <div class="cv-column">
          <section class="cv-sidebar-section">
            <h2 class="cv-section-title">Contact</h2>
            <ul class="cv-contact-list">
              <li>{{ cvContent.phone }}</li>
              <li>{{ cvContent.email }}</li>
              <li>{{ cvContent.address }}</li>
              <li>Rijbewijs B</li>
            </ul>
          </section>

          <section class="cv-sidebar-section">
            <h2 class="cv-section-title">Opleidingen</h2>
            <div class="cv-side-stack">
              <article v-for="item in cvContent.education" :key="item.title" class="cv-side-item">
                <p class="timeline-meta">{{ item.period }}</p>
                <h3>{{ item.title }}</h3>
                <p>{{ item.school }}</p>
              </article>
            </div>
          </section>

          <section class="cv-sidebar-section">
            <h2 class="cv-section-title">Talenkennis</h2>
            <div class="cv-skill-list">
            <article
              v-for="(language, index) in cvContent.languages"
              :key="language.name"
              class="cv-skill-row"
            >
              <div class="cv-skill-head">
                <span>{{ language.name }}</span>
                <span class="cv-skill-label">{{ language.label }}</span>
              </div>
              <div class="cv-skill-meter" :aria-label="`${language.name}: ${language.label}`">
                <span class="cv-skill-fill" :style="getSkillStyle(language.level, index)" />
              </div>
            </article>
          </div>
        </section>
        </div>

        <div class="cv-column">
          <section class="cv-main-section">
            <h2 class="cv-section-title">Studentenjobs</h2>
            <div class="cv-job-list">
              <article v-for="job in cvContent.jobs" :key="job.title" class="cv-job-card">
                <div class="cv-job-heading">
                  <div>
                    <h3>{{ job.title }}</h3>
                    <p>{{ job.company }} | {{ job.location }}</p>
                  </div>
                  <p class="timeline-meta">{{ job.period }}</p>
                </div>
                <ul class="rich-list">
                  <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="cv-main-section">
            <h2 class="cv-section-title">Soft Skills</h2>
            <div class="cv-soft-grid">
              <article
                v-for="(skill, index) in cvContent.softSkills"
                :key="skill.name"
                class="cv-soft-card"
              >
                <div class="cv-skill-head">
                  <span>{{ skill.name }}</span>
                  <span class="cv-skill-label">{{ skill.label }}</span>
                </div>
                <div class="cv-skill-meter" :aria-label="`${skill.name}: ${skill.label}`">
                  <span class="cv-skill-fill" :style="getSkillStyle(skill.level, index)" />
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <section class="cv-main-section cv-studentjobs">
        <h2 class="cv-section-title">Hard Skills</h2>
        <div class="cv-hard-grid">
          <article
            v-for="(skill, index) in cvContent.hardSkills"
            :key="skill.name"
            class="cv-soft-card"
          >
            <div class="cv-skill-head">
              <span>{{ skill.name }}</span>
              <span class="cv-skill-label">{{ skill.label }}</span>
            </div>
            <div class="cv-skill-meter" :aria-label="`${skill.name}: ${skill.label}`">
              <span class="cv-skill-fill" :style="getSkillStyle(skill.level, index)" />
            </div>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>
