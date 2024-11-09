<template>
    <footer class="bg-white md:py-[60px] md:px-[80px] py-[20px] px-[25px]">
        <v-row>
            <v-col cols="12" md="3" sm="6">
                <nuxt-link to="/">
                    <img src="/images/logo.svg" alt="logo" loading="lazy" class="object-contain w-[200px] h-[40px]">
                </nuxt-link>
            </v-col>
            <v-col cols="12" md="3" sm="6">
                <h3 class="mb-3 text-[#6E7491] font-semibold text-[17px]"> {{ $t('about') }} </h3>
                <ul class="list__footer flex justify-start items-start flex-col gap-2">
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('gooseFlight') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('h_works') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('blog') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('forum') }}</nuxt-link>
                    </li>
                </ul>
            </v-col>
            <v-col cols="12" md="3" sm="6">
                <h3 class="mb-3 text-[#6E7491] font-semibold text-[17px]"> {{ $t('support') }} </h3>
                <ul class="list__footer flex justify-start items-start flex-col gap-2">
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('help_center') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('contact_us') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('privacy') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('terms') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('trust') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('accessibility') }}</nuxt-link>
                    </li>
                </ul>
            </v-col>
            <v-col cols="12" md="3" sm="6">
                <h3 class="mb-3 text-[#6E7491] font-semibold text-[17px]"> {{ $t('getApp') }} </h3>
                <ul class="list__footer flex justify-start items-start flex-col gap-2">
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('tripmaAND') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('tripmaIOS') }}</nuxt-link>
                    </li>
                    <li class="text-fourth-color font-normal text-[16px]">
                        <nuxt-link to="/">{{ $t('mobile_site') }}</nuxt-link>
                    </li>
                </ul>
                <div class="flex justify-start items-start flex-col gap-3 mt-[28px]">
                    <a href="" target="_blank" >
                        <img src="/images/app-store.png" alt="">
                    </a>
                    <a href="" target="_blank" >
                        <img src="/images/google-play.png" alt="">
                    </a>
                </div>
            </v-col>
        </v-row>
    </footer>
</template>

<script setup>
    // JavaScript logic (if any)
</script>

<style lang="scss" scoped>
    /* SCSS styles */
    div {
        color: #333;
        font-size: 14px;
        .nested-style {
            padding: 10px;
        }
    }
</style>
