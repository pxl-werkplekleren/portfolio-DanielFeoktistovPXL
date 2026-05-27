<script setup>
import { computed, reactive } from 'vue'

import PageHero from '../components/PageHero.vue'
import { contactContent } from '../data/portfolio'

const form = reactive({
  name: '',
  subject: 'Contact via portfolio',
  message: '',
})

const mailtoHref = computed(() => {
  const lines = ['Hallo Daniel,', '', form.message || 'Ik neem contact met je op via je portfolio.', '']

  if (form.name) {
    lines.push(`Groeten,`, form.name)
  }

  const subject = form.subject || 'Contact via portfolio'
  return `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
})
</script>

<template>
  <div class="page-shell contact-page">
    <PageHero eyebrow="Contact" title="Stuur mij een bericht" :lead="contactContent.note" />

    <section class="panel">
      <p class="eyebrow">Mail launcher</p>
      <form class="mail-form" @submit.prevent>
        <label>
          Jouw naam
          <input v-model="form.name" type="text" placeholder="Naam" />
        </label>
        <label>
          Onderwerp
          <input v-model="form.subject" type="text" placeholder="Onderwerp" />
        </label>
        <label>
          Bericht
          <textarea
            v-model="form.message"
            rows="6"
            placeholder="Schrijf hier jouw bericht..."
          />
        </label>
        <a class="arcade-button" :href="mailtoHref">Open mailapp en verstuur</a>
      </form>
    </section>
  </div>
</template>
