<template>
  <div
    class="md:px-[80px] px-[24px] flex justify-start items-start flex-col md:gap-[43px] gap-[28px] pb-[80px]"
  >
    <div class="flex justify-start items-start flex-col gap-2">
      <h2 class="text-second-color md:text-[36px] text-[24px] font-semibold">
        {{ $t("popular_destinations") }}
      </h2>
      <p class="text-second-color md:text-[16px] text-[14px] font-normal">
        {{ $t("popular_text") }}
      </p>
    </div>
    <v-row>
      <v-col
        cols="12"
        lg="3"
        md="6"
        v-for="blog in destinations"
        :key="blog.id"
      >
        <div
          class="destinations__item border border-solid !border-white rounded-[16px] bg-[#F0F0F073] md:p-[16px] p-[8px]"
        >
          <img
            :src="blog.image"
            alt="blog img"
            loading="lazy"
            class="object-cover w-full rounded-tl-[8px] rounded-br-[8px] mb-[16px] h-[180px]"
          />
          <div class="flex justify-start items-center flex-row gap-1 mb-[8px]">
            <img
              src="/images/location.svg"
              alt="location"
              loading="lazy"
              class="w-[20px] h-[20px]"
            />
            <h1 class="text-fifth-color font-normal text-[14px]">
              {{ blog.location }}
            </h1>
          </div>
          <h3 class="text-second-color font-[700] text-[16px] mb-[4px]">
            {{ blog.title }}
          </h3>
          <span class="text-sixth-color font-normal text-[14px]">
            {{ blog.days }} {{ $t("days") }}
          </span>
          <p class="text-primary-color text-[14px] font-[700] mt-[16px]">
            {{ blog.price }}$
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const destinations = ref([
  {
    id: 1,
    title: "Flores Road Trip 3D2N",
    image: "/images/blog1.jpg",
    location: "Manggarai Barat",
    price: "375",
    days: "3",
  },
  {
    id: 2,
    title: "Forrester Glamping Co Bogor",
    image: "/images/blog2.jpg",
    location: "Bogor",
    price: "375",
    days: "1",
  },
  {
    id: 3,
    title: "Paket Tiket Pesawat Jakarta Bali",
    image: "/images/blog3.jpg",
    location: "Jakarta",
    price: "375",
    days: "5",
  },
  {
    id: 4,
    title: "Desa Wisata Kandri",
    image: "/images/blog4.jpg",
    location: "Kota Semarang",
    price: "375",
    days: "3",
  },
]);
</script>

<style lang="scss" scoped>
.destinations__item {
  border-color: #fff !important;
  transition: 0.5s ease-in-out;
  &:hover {
    border-color: #eaa121 !important;
    background: #eaa12112;
  }
}
</style>
