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
  link: [ { rel: 'icon', type: 'image/x-icon', href: '/images/logo.svg' } ],
  meta: [
    {
      name: "description",
      content:
        "Explore popular destinations with detailed information and images.",
    },
    {
      name: "keywords",
      content: "travel, destinations, blog, tourism, popular places, indonesia",
    },
    { property: "og:title", content: "Goose Flight" },
    {
      property: "og:description",
      content:
        "Explore popular destinations with detailed information and images.",
    },
    {
      property: "og:image",
      content: "/images/logo.svg",
    },
  ],
});
</script>
