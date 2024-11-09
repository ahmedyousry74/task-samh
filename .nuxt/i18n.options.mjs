
// @ts-nocheck


export const localeCodes =  [
  "en",
  "ar"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale_D_58_D_58_task_32samh_locales_en_json" */), cache: true }],
  "ar": [{ key: "../locales/ar.json", load: () => import("../locales/ar.json" /* webpackChunkName: "locale_D_58_D_58_task_32samh_locales_ar_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "iso": "en",
      "name": "English(US)",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "ar",
      "iso": "ar",
      "name": "Arabic",
      "files": [
        "locales/ar.json"
      ]
    }
  ],
  "defaultLocale": "ar",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix",
  "lazy": true,
  "langDir": "locales",
  "detectBrowserLanguage": false,
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "iso": "en",
    "name": "English(US)",
    "files": [
      {
        "path": "locales/en.json"
      }
    ]
  },
  {
    "code": "ar",
    "iso": "ar",
    "name": "Arabic",
    "files": [
      {
        "path": "locales/ar.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
