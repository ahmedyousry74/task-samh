<template>
  <header class="relative  w-full bg-transparent z-50">
    <nav
      class="flex justify-between items-center flex-row lg:pt-[30px] lg:pb-[17px] py-[15px] lg:px-[40px] px-[16px] !bg-[#f3f7fc]"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link to="/">
          <img
            class="md:w-[200px] md:h-[41px] w-[140px] h-[30px]  object-contain"
            src="/images/logo.svg"
            alt="logo"
            loading="lazy"
          />
        </nuxt-link>
        
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="bg-[#DBECFD] w-[34px] h-[28px] rounded-[4px] p-[10px]"
          @click="mobileMenuOpen = true"
        >
          <img src="/images/menu.svg" alt="menu" loading="lazy" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 links">
        <nuxt-link to="/" class="text-[16px] font-[700] text-primary-color"
          >{{$t('home')}}</nuxt-link
        >
        <nuxt-link
          to="/"
          class="text-[16px] font-normal text-third-color"
        >
        {{$t('promo')}}
        </nuxt-link>
        <nuxt-link
          to="/"
          class="text-[16px] font-normal text-third-color"
        >
        {{$t('my_booking')}}
        </nuxt-link>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
        <nuxt-link
          to="/login"
          class="bg-primary-color py-[12px] px-[24px] rounded-[8px] text-white font-medium text-[16px]"
        >
          {{$t('login')}}
        </nuxt-link>
        <div class="lang__">
          <v-menu min-width="250px" rounded>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text">
                <span class="flex justify-start items-center flex-row gap-1">
                  <img
                    src="/images/globe.svg"
                    alt="global"
                    class="w-[24px] h-[24px]"
                  />
                  <span
                    class="text-third-color font-normal text-[15px]"
                    v-if="locale === 'ar'"
                  >
                    Ar
                  </span>
                  <span
                    class="text-third-color font-normal text-[15px]"
                    v-if="locale === 'en'"
                  >
                    EN
                  </span>
                </span>
              </v-btn>
            </template>
            <v-card class="!p-0">
              <v-card-text>
                <div class="flex justify-start items-start flex-col gap-3">
                  <button
                    @click="setLanguage('en')"
                    class="toggle-lang-btn flex justify-start items-center flex-row gap-1 pb-2 border-b border-solid border-[#ccc]"
                    style="mt-5"
                  >
                    <img
                      src="/images/en.svg"
                      alt="usa"
                      width="25"
                      height="25"
                    />
                    <span> EN </span>
                  </button>
                  <button
                    @click="setLanguage('ar')"
                    class="toggle-lang-btn flex justify-start items-center flex-row gap-1"
                    style="mt-5"
                  >
                    <img
                      src="/images/ksa.webp"
                      alt="usa"
                      width="25"
                      height="25"
                    />
                    <span> AR </span>
                  </button>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </div>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="z-50 fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#fcfcfc] px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link to="/">
            <img
              @click="mobileMenuOpen = false"
              class="w-[140px] h-[30px] object-contain"
              src="/images/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <v-icon> mdi-close </v-icon>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="">
            <div class="flex justify-start items-start flex-col gap-4">
              <nuxt-link
                @click="mobileMenuOpen = false"
                to="/"
                class="text-[16px] font-[700] text-primary-color"
                >{{$t('home')}}</nuxt-link
              >
              <nuxt-link
                @click="mobileMenuOpen = false"
                to="/"
                class="text-[16px] font-normal text-third-color"
              >
              {{$t('promo')}}
              </nuxt-link>
              <nuxt-link
                @click="mobileMenuOpen = false"
                to="/"
                class="text-[16px] font-normal text-third-color"
              >
              {{$t('my_booking')}}
              </nuxt-link>
            </div>
            <div class="py-4 flex justify-start items-start flex-col gap-3">
              <nuxt-link
                to="/login"
                class="bg-primary-color py-[12px] px-[24px] rounded-[8px] text-white font-medium text-[16px]"
              >
              {{$t('login')}}
              </nuxt-link>
              <div class="lang__">
                <v-menu min-width="250px" rounded>
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="text">
                      <span
                        class="flex justify-start items-center flex-row gap-1"
                      >
                        <img
                          src="/images/globe.svg"
                          alt="global"
                          class="w-[24px] h-[24px]"
                        />
                        <span
                          class="text-third-color font-normal text-[15px]"
                          v-if="locale === 'ar'"
                        >
                          Ar
                        </span>
                        <span
                          class="text-third-color font-normal text-[15px]"
                          v-if="locale === 'en'"
                        >
                          EN
                        </span>
                      </span>
                    </v-btn>
                  </template>
                  <v-card class="!p-0">
                    <v-card-text>
                      <div
                        class="flex justify-start items-start flex-col gap-3"
                      >
                        <button
                          @click="setLanguage('en')"
                          @click.prevent="mobileMenuOpen = false"
                          class="toggle-lang-btn flex justify-start items-center flex-row gap-1 pb-2 border-b border-solid border-[#ccc]"
                          style="mt-5"
                        >
                          <img
                            src="/images/en.svg"
                            alt="usa"
                            width="25"
                            height="25"
                          />
                          <span> EN </span>
                        </button>
                        <button
                          @click="setLanguage('ar')"
                          @click.prevent="mobileMenuOpen = false"
                          class="toggle-lang-btn flex justify-start items-center flex-row gap-1"
                          style="mt-5"
                        >
                          <img
                            src="/images/ksa.webp"
                            alt="usa"
                            width="25"
                            height="25"
                          />
                          <span> AR </span>
                        </button>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);

const { locales, locale, setLocale } = useI18n();
const { t } = useI18n();
const localPath = useLocalePath();
const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  setLocale(lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
};

watch(locale, (newLocale) => {
  document.documentElement.setAttribute(
    "dir",
    newLocale === "ar" ? "rtl" : "ltr"
  );
});
onMounted(() => {
  document.documentElement.setAttribute(
    "dir",
    locale.value === "ar" ? "rtl" : "ltr"
  );
});

import { ref } from "vue";
</script>

<style scoped lang="scss"></style>
