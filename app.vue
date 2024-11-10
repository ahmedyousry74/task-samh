<template>
  <NuxtLayout>
    <!-- <v-app> -->
    <!-- <NuxtLoadingIndicator /> -->
    <section class="">
      <NuxtPage />
    </section>
    <!-- </v-app> -->
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Home - GooseFlight",
  link: [ { rel: 'icon', type: 'image/x-icon', href: '/images/logo.svg' } ]
});
</script>
