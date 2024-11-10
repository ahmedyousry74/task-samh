<template>
  <div
    class="filter__section sm:mt-[64px] mt-[24px] sm:px-[40px] px-[15px] w-full"
  >
    <div
      class="bg-white md:rounded-[0] md:rounded-tl-[16px] md:rounded-br-[16px] rounded-[16px] pt-[20px] pb-[24px] px-[16px] border border-solid border-[#06162D40]"
    >
      <div
        class="flight__type flex justify-center items-center flex-row w-full md:pb-[24px] pb-[12px]"
      >
        <v-radio-group
          v-model="bookFlight.flightType"
          inline
          class="flex justify-center items-center flex-row w-full"
          hide-details
          color="#EAA121"
        >
          <v-radio :label="$t('one_way')" :value="1"></v-radio>
          <v-radio :label="$t('round_trip')" :value="2"></v-radio>
        </v-radio-group>
      </div>
      <hr class="h-[1px] opacity-[20%] bg-primary-color" />
      <div
        class="mt-[25px] flex justify-start items-center flex-row lg:gap-[64px] gap-[12px] w-full filter__items"
      >
        <div class="flex justify-start items-start flex-col w-full flight_from">
          <div class="flex justify-start items-center flex-row gap-2">
            <img src="/images/plane-up.svg" alt="plane" loading="lazy" />
            <span class="text-third-color font-bold text-[16px]">
              {{ $t("from") }}
            </span>
          </div>
          <v-autocomplete
           v-model="bookFlight.from"
            class="w-full"
            :label="$t('flight_from')"
            hide-details
            :items="flightCountries"
            :item-title="(type) => type.name"
            :item-value="(type) => type.value"
            :direction="direction"
          >
          </v-autocomplete>
        </div>
        <div class="flex justify-start items-start flex-col w-full flight_to">
          <div class="flex justify-start items-center flex-row gap-2">
            <img src="/images/plane-down.svg" alt="plane" loading="lazy" />
            <span class="text-third-color font-bold text-[16px]">
              {{ $t("to") }}
            </span>
          </div>
          <v-autocomplete
           v-model="bookFlight.to"
            class="w-full"
            :label="$t('where_to')"
            hide-details
            :items="flightCountries"
            :item-title="(type) => type.name"
            :item-value="(type) => type.value"
          ></v-autocomplete>
        </div>
        <div class="flex justify-start items-start flex-col w-full calender">
          <div class="flex justify-start items-center flex-row gap-2">
            <img src="/images/calender.svg" alt="plane" loading="lazy" />
            <span class="text-third-color font-bold text-[16px]">
              {{ $t("depart") }}
            </span>
          </div>
          <v-date-input
           v-model="bookFlight.depart"
            label="DD/MM/YYYY"
            prepend-icon=""
            class="w-full"
            hide-details=""
          ></v-date-input>
        </div>
        <div class="flex justify-start items-start flex-col w-full calender">
          <div class="flex justify-start items-center flex-row gap-2">
            <img src="/images/calender.svg" alt="plane" loading="lazy" />
            <span class="text-third-color font-bold text-[16px]">
              {{ $t("return") }}
            </span>
          </div>
          <v-date-input
           v-model="bookFlight.return"
            label="DD/MM/YYYY"
            prepend-icon=""
            class="w-full"
            hide-details=""
          ></v-date-input>
        </div>
        <div class="flex justify-start items-start flex-col w-full flight_to">
          <div class="flex justify-start items-center flex-row gap-2">
            <img src="/images/airline.svg" alt="plane" loading="lazy" />
            <span class="text-third-color font-bold text-[16px]">
              {{ $t("class") }}
            </span>
          </div>
          <v-autocomplete
             v-model="bookFlight.classTravellers"
            class="w-full"
            :label="$t('class')"
            hide-details
            :items="ClassTraveleers"
            item-value="id"
            item-text="name"
            chips
          >
            <template v-slot:chip="{ props, item }">
              <v-chip variant="text" v-bind="props" :text="item.raw.name" class="!m-0 !p-0 !text-[15px]">
              </v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :title="item.raw.name"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </div>
        <v-btn
          :loading="loading"
          @click="book"
          variant="outlined"
          class="!bg-primary-color flex justify-center items-center flex-row rounded-[4px] border-0 !w-[64px] !h-[48px] !p-0 tablet:!bg-second-color tablet:!w-full tablet:mt-[16px] mobile:!bg-second-color mobile:!w-full mobile:mt-[16px]"
        >
          <img
            src="/images/search.svg"
            alt="search"
            loading="lazy"
            width="24"
            height="24"
          />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

import { VDateInput } from "vuetify/labs/VDateInput";

const loading = ref(false);

const flightTypeARR = ref([
  {
    id: 1,
    title: "One way",
  },
  {
    id: 2,
    title: "Round Trip",
  },
]);

const flightCountries = ref([
  {
    id: 1,
    name: "Egypt",
    value: "1",
  },
  {
    id: 2,
    name: "KSA",
    value: "2",
  },
  {
    id: 3,
    name: "USA",
    value: "3",
  },
  {
    id: 4,
    name: "UAE",
    value: "4",
  },
]);

const ClassTraveleers = ref([
  {
    id: 1,
    name: "1 adult, Economy",
    avatar: "/images/family.svg",
  },
  {
    id: 2,
    name: "1 adult, Class",
    avatar: "/images/family.svg",
  },
  {
    id: 3,
    name: "2 adult, Economy",
    avatar: "/images/family.svg",
  },
  {
    id: 4,
    name: "2 adult, Class",
    avatar: "/images/family.svg",
  },
]);

const bookFlight = ref({
  flightType: 2,
  from: null,
  to: null,
  depart: null,
  return: null,
  classTravellers: null
})

const book = async => {
  loading.value = true;
  setTimeout(() => {
    bookFlight.value.from = null;
    bookFlight.value.to = null;
    bookFlight.value.depart = null;
    bookFlight.value.return = null;
    bookFlight.value.classTravellers = null;
    loading.value = false;
  }, 4000);
}
</script>

<style lang="scss" scoped>
.custom-dropdown-container {
  background-color: red !important;
}
</style>
