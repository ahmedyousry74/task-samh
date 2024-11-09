<template>
  <section class="header__headine flex justify-center items-center flex-row w-full px-[15px]">
    <h1 class="md:text-[50px] text-[22px] font-semibold text-center md:w-[790px]">
      {{ $t('discover') }}
    </h1>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.header__headine h1 {
  background:  linear-gradient(90deg, #183867 33.33%, #EAA121 62%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
