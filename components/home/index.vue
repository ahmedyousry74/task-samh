<template>
  <section class="!bg-[#f3f7fc]">
    <div class="header__section md:pt-[120px] md:pb-[75px] pt-[32px] pb-[32px]">
      <homeHeader />
      <homeFilter />
    </div>
    <homeDestinations />
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header__section {
  position: relative;
  background-image: url("../../public/images/world.png");
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}
</style>
