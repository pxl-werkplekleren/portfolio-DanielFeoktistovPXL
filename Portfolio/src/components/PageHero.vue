<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="page-hero panel">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p v-if="lead" class="lead">
      {{ lead }}
    </p>
    <slot />
  </section>
</template>
