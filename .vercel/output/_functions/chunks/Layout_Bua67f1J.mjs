import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, s as spreadAttributes, d as addAttribute, r as renderComponent, u as unescapeHTML, F as Fragment, p as renderScript, q as renderHead, o as renderSlot } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_BRH9IObG.mjs';
import { $ as $$Image } from './_astro_assets_BRry4TA6.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */

const $$Spain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="750" height="500" viewBox="0 0 750 500"> <rect width="750" height="500" fill="#c60b1e"></rect> <rect width="750" height="250" fill="#ffc400" y="125"></rect> </svg>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/i18n/Spain.astro", void 0);

const $$UnitedStates = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/i18n/UnitedStates.astro", void 0);

const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    flag: $$UnitedStates
  },
  es: {
    code: "es",
    name: "Español",
    flag: $$Spain
  }
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.products": "Products",
    "nav.contact": "Contact"
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.products": "Productos",
    "nav.contact": "Contacto"
  }
};
const routes = {
  es: {
    vota: "vota",
    info: "info",
    archivo: "archivo",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies"
  },
  en: {
    vota: "vote",
    info: "information",
    archivo: "archive",
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation = defaultLang !== l && routes[l][pathName] !== void 0;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== void 0 ? route[path] : void 0;
  }
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  const reversedKey = getKeyByValue(routes[currentLang], path);
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "es"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const icons = {"local":{"prefix":"local","lastModified":1744153920,"icons":{"arrow-down":{"body":"<path fill=\"currentColor\" d=\"M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496\"/>","width":1024,"height":1024},"arrow-left":{"body":"<path fill=\"currentColor\" d=\"M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5\"/><path fill=\"currentColor\" d=\"M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71-.1.1-.23.15-.35.15Z\"/>","width":16,"height":9},"calendar":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2\"/>"},"check-bold":{"body":"<path fill=\"currentColor\" d=\"m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83z\"/>"},"circle":{"body":"<path fill=\"currentColor\" d=\"M12.003 21q-1.866 0-3.51-.708-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857.709 3.509-.708 3.51-1.924 2.859-2.856 1.925-3.509.709\"/>"},"close":{"body":"<path fill=\"currentColor\" d=\"m12 13.4-4.9 4.9q-.275.275-.7.275t-.7-.275-.275-.7.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7t.275-.7.7-.275.7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275t.7.275.275.7-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7-.7.275-.7-.275z\"/>"},"download":{"body":"<path fill=\"currentColor\" d=\"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z\"/>"},"global":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9.206 3.182A9.25 9.25 0 0 0 2.78 11.25h4.48c.033-1.096.135-2.176.305-3.2.207-1.254.515-2.41.91-3.4a9.3 9.3 0 0 1 .731-1.468M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5m0 1.5c-.261 0-.599.126-.991.532-.396.41-.791 1.051-1.141 1.925-.347.869-.63 1.917-.824 3.089-.155.94-.25 1.937-.282 2.954h6.476a22.5 22.5 0 0 0-.282-2.954c-.194-1.172-.477-2.22-.824-3.089-.35-.874-.745-1.515-1.14-1.925-.393-.406-.73-.532-.992-.532m4.74 8.5a24 24 0 0 0-.305-3.2c-.207-1.254-.515-2.41-.91-3.4a9.3 9.3 0 0 0-.732-1.468 9.24 9.24 0 0 1 3.748 2.277 9.25 9.25 0 0 1 2.678 5.791zm-1.502 1.5H8.762c.031 1.017.127 2.014.282 2.954.194 1.172.477 2.22.824 3.089.35.874.745 1.515 1.14 1.925.393.406.73.532.992.532.261 0 .599-.126.991-.532.396-.41.791-1.051 1.141-1.925.347-.869.63-1.917.824-3.089.155-.94.25-1.937.282-2.954m-.444 8.068c.27-.434.515-.929.73-1.468.396-.99.704-2.146.911-3.4a24 24 0 0 0 .304-3.2h4.48a9.25 9.25 0 0 1-6.426 8.068m-5.588 0a9.3 9.3 0 0 1-.73-1.468c-.396-.99-.704-2.146-.911-3.4a24 24 0 0 1-.304-3.2H2.78a9.25 9.25 0 0 0 6.425 8.068\" clip-rule=\"evenodd\"/>"},"hands":{"body":"<path fill=\"currentColor\" d=\"M12.24 2.965a.75.75 0 0 0-.58.276l-.058.043a6.3 6.3 0 0 0-6.266 1.553 6.2 6.2 0 0 0-1.736 5.51l-.015.015-.958.951a2.11 2.11 0 0 0 0 2.995 2.14 2.14 0 0 0 1.793.601 2.13 2.13 0 0 0 1.883 1.559A2.13 2.13 0 0 0 8.32 18.41c.026.506.233 1.004.622 1.39.76.756 1.952.821 2.787.197l.387.384a2.15 2.15 0 0 0 3.028 0c.37-.369.577-.838.62-1.318a2.13 2.13 0 0 0 1.94-1.932 2.13 2.13 0 0 0 1.87-1.604 2.14 2.14 0 0 0 1.76-.606 2.11 2.11 0 0 0 0-2.994l-.833-.829.172-.666a5.95 5.95 0 0 0-.525-4.303 6.02 6.02 0 0 0-5.303-3.16h-1.607a4 4 0 0 0-.206-.004zm2.925 4.945 3.464 3.441.003.005.014.013 1.625 1.615a.62.62 0 0 1 0 .88.63.63 0 0 1-.886 0l-1.625-1.615a.756.756 0 0 0-1.064 0l-.016.017a.744.744 0 0 0 0 1.057l1.266 1.258a.62.62 0 0 1 0 .882.63.63 0 0 1-.819.058.756.756 0 0 0-.987.071.744.744 0 0 0-.062.982.62.62 0 0 1-.055.819.63.63 0 0 1-.83.05.756.756 0 0 0-.995.057.744.744 0 0 0-.064.989.63.63 0 0 1-.054.834.64.64 0 0 1-.9 0l-.372-.369.105-.105a2.11 2.11 0 0 0 0-2.994 2.13 2.13 0 0 0-1.4-.618 2.13 2.13 0 0 0-1.954-2.004 2.1 2.1 0 0 0-.617-1.324 2.14 2.14 0 0 0-1.793-.601 2.13 2.13 0 0 0-2.118-1.565A4.7 4.7 0 0 1 6.4 5.893a4.77 4.77 0 0 1 3.581-1.38L8.484 5.646a2.314 2.314 0 0 0-.44 3.253 2.333 2.333 0 0 0 3.258.441l1.889-1.431zM9.389 6.843l3.139-2.378h.504a3 3 0 0 1 .187.005h1.626a4.52 4.52 0 0 1 3.982 2.37c.495.92.65 1.978.444 2.995L16.06 6.639a.75.75 0 0 0-.539-.229H12.94a.75.75 0 0 0-.453.152l-2.09 1.583a.833.833 0 0 1-1.162-.157.814.814 0 0 1 .155-1.145m-3.354 7.954a.62.62 0 0 1 0-.88l.957-.95a.63.63 0 0 1 .886 0 .62.62 0 0 1 .008.871l-.008.009-.957.95-.009.009a.63.63 0 0 1-.877-.008m-.491-3.368a.62.62 0 0 1-.01.87l-.957.952a.63.63 0 0 1-.886 0 .62.62 0 0 1 0-.88l.958-.951a.63.63 0 0 1 .886 0zm5.348 7.314a.63.63 0 0 1-.886 0 .62.62 0 0 1 0-.88l.957-.951a.63.63 0 0 1 .886 0 .62.62 0 0 1 0 .88zm-2.021-2.008a.63.63 0 0 1-.886 0 .62.62 0 0 1-.009-.872l.009-.008.957-.951.008-.009a.63.63 0 0 1 .878.009.62.62 0 0 1 0 .88z\"/>"},"instagram":{"body":"<path fill=\"currentColor\" d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3\"/>"},"leaf":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M5 21c.5-4.5 2.5-8 7-10\"/><path d=\"M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9 0 1 0 3 2 5h3z\"/></g>"},"location":{"body":"<path fill=\"currentColor\" d=\"M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214-.567-.39-.003-.002-.006-.005-.02-.014-.075-.053-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44 17 17 0 0 1-.345.251l-.021.014-.006.005-.002.001zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0\"/>"},"mail":{"body":"<path fill=\"currentColor\" d=\"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2 8-5H4zM4 8V6v12z\"/>"},"medal":{"body":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M9.42 2a2 2 0 0 1 1.736 1.008L12 4.484l.844-1.476A2 2 0 0 1 14.58 2h4.558a1.5 1.5 0 0 1 1.303 2.244l-3.382 5.918a7 7 0 1 1-10.118 0L3.559 4.244A1.5 1.5 0 0 1 4.862 2zM12 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6.277-9H14.58l-1.428 2.5 1.06 1.857q.661.22 1.255.56zM9.42 4H5.723l2.81 4.917a6.96 6.96 0 0 1 3.176-.911z\"/></g>"},"phone":{"body":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M8.172 15.829c3.845 3.845 7.408 4.266 8.454 4.305 1.264.046 2.554-.986 3.112-2.043-.89-1.044-2.049-1.854-3.318-2.732-.749.748-1.672 2.138-2.901 1.64-.699-.281-2.425-1.076-3.933-2.585S7.283 11.18 7 10.482c-.498-1.231.896-2.156 1.645-2.905-.878-1.29-1.674-2.479-2.716-3.324-1.072.56-2.11 1.84-2.063 3.121.039 1.046.46 4.609 4.306 8.455m8.38 6.304c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.354-4.89-9.795-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.608 1.173 2.717 2.95 3.67 4.342A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.357C9.309 10.752 9.95 11.95 11 13s2.248 1.691 2.944 2.006l1.355-1.356a1.5 1.5 0 0 1 1.918-.171c1.42.984 3.088 2.077 4.304 3.634a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535\"/></g>"},"plant":{"body":"<path fill=\"currentColor\" d=\"M247.63 47.89a8 8 0 0 0-7.52-7.52c-51.76-3-93.32 12.74-111.18 42.22-11.8 19.49-11.78 43.16-.16 65.74a71.3 71.3 0 0 0-14.17 27L98.33 159c7.82-16.33 7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8 8 0 0 0-7.52 7.52c-2.23 37.83 9.46 68.3 31.25 81.5A45.8 45.8 0 0 0 63.44 176 54.6 54.6 0 0 0 87 170.33l25 25V224a8 8 0 0 0 16 0v-29.49a55.6 55.6 0 0 1 12.27-35 73.9 73.9 0 0 0 33.31 8.4 60.9 60.9 0 0 0 31.83-8.86c29.48-17.84 45.26-59.4 42.22-111.16M47.81 155.6C32.47 146.31 23.79 124.32 24 96c28.32-.24 50.31 8.47 59.6 23.81 4.85 8 5.64 17.33 2.46 26.94l-24.41-24.41a8 8 0 0 0-11.31 11.31l24.41 24.41c-9.61 3.18-18.93 2.39-26.94-2.46m149.31-10.22c-13.4 8.11-29.15 8.73-45.15 2l53.69-53.7a8 8 0 0 0-11.31-11.31L140.65 136c-6.76-16-6.15-31.76 2-45.15 13.94-23 47-35.82 89.33-34.83.96 42.32-11.84 75.42-34.86 89.36\"/>","width":256,"height":256},"plus-outline":{"body":"<path fill=\"#fff\" d=\"M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z\"/>"},"shield":{"body":"<path fill=\"currentColor\" d=\"M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21\"/>"},"star":{"body":"<path fill=\"currentColor\" d=\"m8.85 16.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425zm3.15.45-4.15 2.5q-.275.175-.575.15t-.525-.2-.35-.437-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562.3-.45.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.537.15.388.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.563-.313.512l-3.675 3.175 1.1 4.725q.075.325-.05.588t-.35.437-.525.2-.575-.15zm0-5.025\"/>"},"truck":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"currentColor\"><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M11 17h4M13.5 7h.943c1.31 0 1.966 0 2.521.315.556.314.926.895 1.667 2.056.52.814 1.064 1.406 1.831 1.931.772.53 1.14.789 1.343 1.204.195.398.195.869.195 1.811 0 1.243 0 1.864-.349 2.259l-.046.049c-.367.375-.946.375-2.102.375H19\"/><path d=\"m13 7 .994 2.486c.487 1.217.73 1.826 1.239 2.17.508.344 1.163.344 2.475.344H21M4.87 17c-1.353 0-2.03 0-2.45-.44C2 16.122 2 15.415 2 14V7c0-1.414 0-2.121.42-2.56S3.517 4 4.87 4h5.26c1.353 0 2.03 0 2.45.44C13 4.878 13 5.585 13 7v10H8.696\"/></g>"},"users":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"9\" cy=\"9\" r=\"4\"/><path d=\"M16 19c0-3.314-3.134-6-7-6s-7 2.686-7 6m13-6a4 4 0 1 0-3-6.646\"/><path d=\"M22 19c0-3.314-3.134-6-7-6-.807 0-2.103-.293-3-1.235\"/></g>"},"whatsapp":{"body":"<defs><linearGradient id=\"a\" x1=\"50%\" x2=\"50%\" y1=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#1faf38\"/><stop offset=\"100%\" stop-color=\"#60d669\"/></linearGradient><linearGradient id=\"b\" x1=\"50%\" x2=\"50%\" y1=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#f9f9f9\"/><stop offset=\"100%\" stop-color=\"#fff\"/></linearGradient></defs><path fill=\"url(#a)\" d=\"M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01.013-32.867-12.775-63.773-36.009-87.025-23.23-23.25-54.125-36.061-87.043-36.076-67.823 0-123.022 55.18-123.05 123.004\"/><path fill=\"url(#b)\" d=\"M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0 58.276 0 1.099 57.16 1.071 127.416m40.24 60.376-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06 20.003 20.018 31.01 46.628 31.003 74.93-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295-40.098 10.513z\"/><path fill=\"#fff\" d=\"M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503-1.858-.08-3.982-.074-6.104-.074-2.124 0-5.575.799-8.492 3.984-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073 26.904 10.609 32.379 8.499 38.218 7.967 5.84-.53 18.844-7.702 21.497-15.139 2.655-7.436 2.655-13.81 1.859-15.142-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597-2.124 3.184-8.223 10.356-10.082 12.48-1.857 2.129-3.716 2.394-6.9.801-3.187-1.598-13.444-4.957-25.613-15.806-9.468-8.442-15.86-18.867-17.718-22.056-1.858-3.184-.199-4.91 1.398-6.497 1.431-1.427 3.186-3.719 4.78-5.578 1.588-1.86 2.118-3.187 3.18-5.311 1.063-2.126.531-3.986-.264-5.579-.798-1.593-6.987-17.343-9.819-23.64\"/>","width":256,"height":258}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$4 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const route = getRouteFromUrl(Astro2.url);
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const currentLocaleData = LANGUAGES[lang];
  const otherLocales = Object.values(LANGUAGES).filter(
    (locale) => locale.code !== lang
  );
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left"> <div class="group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all"> <button type="button" class="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2" aria-expanded="true" aria-haspopup="true"> ${renderComponent($$result, "currentLocaleData.flag", currentLocaleData.flag, {})} ${currentLocaleData.name} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-down", "size": 20, "class": "text-white" })} </button> <ul class="group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 lg:hidden pt-0.5 absolute w-full"> ${otherLocales.map((locale) => renderTemplate`<li class="py-[2px]"> <a class="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"${addAttribute(translatePath(`/${route ? route : ""}`, locale.code), "href")}> ${renderComponent($$result, "locale.flag", locale.flag, {})} ${locale.name} </a> </li>`)} </ul> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/LanguageSelector.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const homeURL = getRelativeLocaleUrl(lang, "/");
  const aboutURL = getRelativeLocaleUrl(lang, "about");
  const productsURL = getRelativeLocaleUrl(lang, "products");
  const contactURL = getRelativeLocaleUrl(lang, "contact");
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center fixed top-0 left-0 z-50 w-full px-10 bg-white/70 backdrop-blur-sm"> <nav class="flex items-center justify-between lg:justify-center w-full px-4 gap-12 py-1 text-title"> <ul id="nav-menu-right" class="hidden lg:flex gap-2 text-2xl text-center items-center"> <li class="hover:text-acent transition-colors px-4 rounded font-bold"> <a${addAttribute(homeURL, "href")}>${t("nav.home")}</a> </li> <li class="hover:text-acent transition-colors px-4 rounded text-nowrap font-bold"> <a${addAttribute(`${aboutURL}`, "href")}>${t("nav.about")}</a> </li> </ul> <!-- Logo centrado --> <div class="flex-shrink-0 mx-0 md:mx-0 sm:mx-auto py-2"> <a${addAttribute(homeURL, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-40 h-auto min-w-[8rem]", "src": "/logo.png", "alt": "Logo de la empresa Tranding Global Produce Rofim", "width": "300", "height": "163" })} </a> </div> <!-- Menú de navegación derecho (oculto en móviles) --> <ul id="nav-menu-right" class="hidden lg:flex items-center font-bold text-2xl whitespace-nowrap"> <li class="hover:text-acent transition-colors px-4 rounded"> <a${addAttribute(`${productsURL}`, "href")}>${t("nav.products")}</a> </li> <li class="hover:text-acent hover:border-acent transition-colors px-4 rounded border-2"> <a${addAttribute(`${contactURL}`, "href")}>${t("nav.contact")}</a> </li> </ul> <div class="hidden lg:flex"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} </div> <!-- Botón de menú para móviles --> <button id="menu-toggle" class="block lg:hidden text-title text-5xl" aria-label="Toggle Menu">
☰
</button> </nav> </header> ${renderScript($$result, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenu;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const homeURL = getRelativeLocaleUrl(lang, "/");
  const aboutURL = getRelativeLocaleUrl(lang, "about");
  const productsURL = getRelativeLocaleUrl(lang, "products");
  const contactURL = getRelativeLocaleUrl(lang, "contact");
  const homeCleanURL = homeURL === "/" ? homeURL : homeURL.slice(0, -1);
  return renderTemplate`${maybeRenderHead()}<div class="bg-black/70 backdrop-blur-xs w-screen h-full z-50 fixed top-0 right-0 hidden cursor-pointer" id="side_menu_bg"></div> <aside class="flex flex-col items-start bg-white/60 backdrop-blur-sm text-white p-6 fixed top-0 -right-[500px] h-screen w-[270px] z-60 border-l-2 border-white transition-all" id="side_menu"> <nav class="flex flex-col gap-4 pl-4 w-full"> <button class="p-2 rounded-md hover:bg-primary self-end" id="side_menu_close"> ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "size": 32 })} </button> <ul class="flex flex-col gap-4"> <li> <a class="text-2xl text-title font-medium hover:bg-primary px-2 py-2 rounded"${addAttribute(homeCleanURL, "href")}>${t("nav.home")}</a> </li> <li> <a class="text-2xl text-title font-medium hover:bg-primary px-2 py-2 rounded"${addAttribute(`${aboutURL}`, "href")}>${t("nav.about")}</a> </li> <li> <a class="text-2xl text-title font-medium hover:bg-primary px-2 py-2 rounded"${addAttribute(`${productsURL}`, "href")}>${t("nav.products")}</a> </li> <li> <a class="text-2xl text-title font-medium hover:bg-primary px-2 py-2 rounded"${addAttribute(`${contactURL}`, "href")}>${t("nav.contact")}</a> </li> </ul> </nav> <div class="pl-4 py-4"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} </div> </aside> ${renderScript($$result, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/SideMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/SideMenu.astro", void 0);

const HOME$1 = {"BRANDS_TITLE":"Brands that truts us","EXPORT_TITLE":"Export Destinations"};
const HERO_HOME$1 = {"HERO_TITLE":"TRANDING GLOBAL PRODUCE ROFIM","HERO_TAGLINE":"Tropical Produce, Global Reach","P1":"Premium Quality","P2":"Streamlined Logistics","P3":"Genuine Dominican Goods","P4":"10 Years of Sector Expertise"};
const TABS$1 = {"SECTION_TITLE":"Our Products","TAB1_NAME":"ORIENTAL","TAB2_NAME":"TROPICAL","TAB3_NAME":"ROOTS","TAB_ORIENTAL":{"TAB_P":"Exotic Vegetables: Asian Flavors, Premium Quality","TAB_LINK":"See more >"},"TAB_TROPICAL":{"TAB_P":"Caribbean Freshness, Global Quality","TAB_LINK":"See more >"},"TAB_ROOTS":{"TAB_P":"Freshness and Flavor from the Earth","TAB_LINK":"See more >"}};
const ABOUT$1 = {"BANNER_SPAN":"Established in 2024","BANNER_TITLE":"About Tranding Global Produce Rofim","BANNER_P":"Connecting Dominican quality produce with global markets through excellence and sustainability.","MAIN":{"MAIN_SPAN":"Founded february 2, 2024","MAIN_TITLE":"Lets Talk about our Company","MAIN_P1":"Born from over 10 years of expertise in the handling, packaging, and distribution of fruits and vegetables, both domestically across the Dominican Republic and internationally to the United States, Europe, and the Caribbean.","MAIN_P2":"We continue to modernize our facilities through skilled personnel, efficient producers, and strategic partners, ensuring you receive the finest products from the Dominican Republic.","FOOTER":{"FOOTER_CARD1":{"CARD_P1":"10+","CARD_P2":"Years of Experience"},"FOOTER_CARD2":{"CARD_P1":"20+","CARD_P2":"Product Varieties"}}},"SECTION_PRINCIPLES":{"SECTION_TITLE":"Our Purpose and Path","SECTION_TAGLINE":"Guided by strong values and a clear vision, we're committed to excellence in every aspect of our business","MISSION":{"TITLE":"Our Mission","TAGLINE":"Delivering Excellence Globally","P1":"To provide the international market with fresh, high-quality fruits and vegetables, grown using sustainable practices. Ensuring food safety and the development of our local producers.","P2":"We commit to excellence at every stage of the process from planting to export to meet our clients' needs and contribute to the growth of the agricultural sector in the Dominican Republic.","CARD_1":"Sustainable","CARD_2":"Global Reach","CARD_3":"Quality Assured"},"VISION":{"TITLE":"Our Vision","TAGLINE":"Looking to the Future","P1":"To be the leading fruit and vegetable export company in the Caribbean, recognized for our innovation. We aspire to expand our global market presence, promote responsible agricultural development, and establish the Dominican Republic as a global reference in fresh produce exports.","CARD_1":"Global Expansion","CARD_2":"Sustainability","CARD_3":"Excellence"},"VALUES":{"TITLE":"Our Values","TAGLINE":"What We Stand For","CARD_1":{"TITLE":"QUALITY","P":"We guarantee fresh, healthy products that meet the highest international standards."},"CARD_2":{"TITLE":"COMMITMENT","P":"We work with passion and responsibility to fulfill our clients’ and partners’ expectations."},"CARD_3":{"TITLE":"ETHICS & TRANSPARENCY","P":"We operate with integrity in all business relationships, ensuring trust and credibility."}}},"LEADERSHIP":{"SECTION_TITLE":"Meet Our Leadership","LEADER_POSITION":"President of Trading Global Produce Rofim","LEADER_P":"With over 10 years of experience in agricultural exports, Joe Mota leads our mission to bridge global markets with premium Dominican produce. His focus on innovation and strategic partnerships ensures efficient, reliable solutions for international clients."}};
const PRODUCTS$1 = {"BANNER":{"P1":"Premium Quality","P2":"Authentic Products","P3":"Professional Excellence"},"TITLE":"Our Products","TAGLINE":"We offer a wide range of products from different categories","CATALOG":"Download our products catalog"};
const CONTACT$1 = {"BANNER":{"P1":"Premium Quality","P2":"Authentic Products","P3":"Professional Excellence"},"TITLE":"Your Fresh Produce Starts Here","TAGLINE":"Visit our facilities in Las Cabuyas, La Vega, where quality and freshness meet excellence.","INFO":{"TITLE":"Get In Touch With Us Now","CARDS":{"PHONE":{"TITLE":"Phone Number","P":"+1-809-383-2022"},"EMAIL":{"TITLE":"Email"},"LOCATION":{"TITLE":"Location","P":"Main street, Las Cabuyas, La Vega, Dominican Republic"},"DOWNLOAD":{"TITLE":"Download","P":"Download our products catalog"}}}};
const FOOTER$1 = {"FOOTER_TITLE":"Connect with Us","CONTACT_INFO":{"ADDRESS":"Main street, Las Cabuyas, La Vega, Dominican Republic","PHONE":"+1-809-383-2022","EMAIL":"&#106;&#111;&#101;&#95;&#114;&#111;&#102;&#105;&#109;&#64;&#104;&#111;&#116;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;","SOCIAL_MEDIA_TITLE":"We're on Instagram","SOCIAL_MEDIA":{"INSTAGRAM":"https://www.instagram.com/globalproducerofim/"}},"COPYRIGHT":"All Right Reserved. Tranding Global Produce Rofim 2025 ©"};
const english = {
  HOME: HOME$1,
  HERO_HOME: HERO_HOME$1,
  TABS: TABS$1,
  ABOUT: ABOUT$1,
  PRODUCTS: PRODUCTS$1,
  CONTACT: CONTACT$1,
  FOOTER: FOOTER$1,
};

const HOME = {"BRANDS_TITLE":"Marcas que confían en nosotros","EXPORT_TITLE":"Destinos de Exportación"};
const HERO_HOME = {"HERO_TITLE":"TRANDING GLOBAL PRODUCE ROFIM","HERO_TAGLINE":"Frescura Dominicana, Lista para Exportar","P1":"Calidad Superior","P2":"Logística Optimizada","P3":"Productos Dominicanos Auténticos","P4":"10 Años de Experiencia en el Sector"};
const TABS = {"SECTION_TITLE":"Nuestros Productos","TAB1_NAME":"ORIENTAL","TAB2_NAME":"TROPICAL","TAB3_NAME":"HORTALIZAS","TAB_ORIENTAL":{"TAB_P":"Vegetales Exóticos: Sabores Asiáticos, Calidad Premium","TAB_LINK":"Ver más >"},"TAB_TROPICAL":{"TAB_P":"Frescura Caribeña, Calidad Global","TAB_LINK":"Ver más >"},"TAB_ROOTS":{"TAB_P":"Frescura y Sabor Directo de la Tierra","TAB_LINK":"Ver más >"}};
const ABOUT = {"BANNER_SPAN":"Establecida en 2024","BANNER_TITLE":"Acerca de Tranding Global Produce Rofim","BANNER_P":"Conectando la frescura dominicana con mercados globales, con sostenibilidad y excelencia.","MAIN":{"MAIN_SPAN":"Fundada el 2 de febrero de 2024","MAIN_TITLE":"¿Por Qué Elegirnos?","MAIN_P1":"Con más de una década de experiencia en la gestión, procesamiento y logística de Exportación de frutas y vegetales, operamos desde República Dominicana hacia mercados clave como EE.UU., Europa y el Caribe.","MAIN_P2":"Innovamos sin pausa en nuestras instalaciones, respaldados por talento especializado, agricultores eficientes y socios estratégicos, para que recibas productos dominicanos de primera calidad.","FOOTER":{"FOOTER_CARD1":{"CARD_P1":"10+","CARD_P2":"Años de Experiencia"},"FOOTER_CARD2":{"CARD_P1":"20+","CARD_P2":"variedades de Productos"}}},"SECTION_PRINCIPLES":{"SECTION_TITLE":"Nuestro Camino y Propósito","SECTION_TAGLINE":"Con valores arraigados y una visión clara, cultivamos la excelencia en cada proceso, desde el campo hasta su destino","MISSION":{"TITLE":"Misión","TAGLINE":"Calidad Sin Fronteras","P1":"Abastecer mercados internacionales con frutas y vegetales frescos y de alta calidad, cultivados bajo prácticas sostenibles. Garantizamos seguridad alimentaria y el fortalecimiento de productores locales.","P2":"Nos comprometemos con la excelencia en cada etapa de la cadena: desde la siembra hasta la exportación, para satisfacer demandas globales e impulsar el crecimiento del sector agropecuario dominicano.","CARD_1":"Sostenible","CARD_2":"Alcance Global","CARD_3":"Calidad Asegurada"},"VISION":{"TITLE":"Visión","TAGLINE":"Mirando al Futuro","P1":"Ser la empresa líder en exportación de frutas y vegetales en el Caribe, reconocida por nuestra innovación. Aspiramos a expandir nuestra presencia en mercados globales, promover el desarrollo agrícola responsable y posicionar a la República Dominicana como referente mundial en exportación de productos frescos.","CARD_1":"Expansión Global","CARD_2":"Sostenibilidad","CARD_3":"Excelencia"},"VALUES":{"TITLE":"Valores","TAGLINE":"Lo que representamos","CARD_1":{"TITLE":"CALIDAD","P":"Garantizamos productos frescos y saludables que cumplen con los más altos estándares internacionales."},"CARD_2":{"TITLE":"COMPROMISO","P":"Trabajamos con pasión y responsabilidad para superar las expectativas de nuestros clientes y socios."},"CARD_3":{"TITLE":"ÉTICA Y TRANSPARENCIA","P":"Operamos con integridad en todas las relaciones comerciales, asegurando confianza y credibilidad."}}},"LEADERSHIP":{"SECTION_TITLE":"Conoce a Nuestro Directivo","LEADER_POSITION":"Presidente de Tranding Global Produce Rofim","LEADER_P":"Con más de 10 años de experiencia en agroexportación, Joe Mota lidera nuestra misión de conectar mercados globales con productos dominicanos premium. Su enfoque en innovación y alianzas estratégicas garantiza soluciones eficientes y confiables para clientes internacionales."}};
const PRODUCTS = {"BANNER":{"P1":"Calidad Premium","P2":"Productos Auténticos","P3":"Compromiso Profesional"},"TITLE":"Nuestros Productos","TAGLINE":"Ofrecemos una amplia gama de productos de diferentes categorías","CATALOG":"Catálogo de productos"};
const CONTACT = {"BANNER":{"P1":"Calidad Premium","P2":"Productos Auténticos","P3":"Compromiso Profesional"},"TITLE":"Tus Productos Frescos Comienzan Aquí","TAGLINE":"Ven a Nuestras Instalaciones en Las Cabuyas, La Vega: Donde la Frescura Dominicana se Fusiona con la Excelencia Global.","INFO":{"TITLE":"Habla con Nuestro Equipo Ahora","CARDS":{"PHONE":{"TITLE":"Teléfono","P":"+1-809-383-2022"},"EMAIL":{"TITLE":"Correo Electrónico"},"LOCATION":{"TITLE":"Ubicación","P":"Calle Principal, Las Cabuyas, La Vega, República Dominicana"},"DOWNLOAD":{"TITLE":"Descargar","P":"Catálogo de productos"}}}};
const FOOTER = {"FOOTER_TITLE":"Conéctate con Nosotros","CONTACT_INFO":{"ADDRESS":"Calle Principal, Las Cabuyas, La Vega, República Dominicana","PHONE":"+1-809-383-2022","EMAIL":"","SOCIAL_MEDIA_TITLE":"¡Síguenos en Instagram!","SOCIAL_MEDIA":{"INSTAGRAM":"https://www.instagram.com/globalproducerofim/"}},"COPYRIGHT":"© 2025 Tranding Global Produce Rofim – Todos los derechos reservados"};
const spanish = {
  HOME,
  HERO_HOME,
  TABS,
  ABOUT,
  PRODUCTS,
  CONTACT,
  FOOTER,
};

const LANG = {
  ENGLISH: "en"};
const getI18N = ({
  currentLocale = "en"
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<footer> <div class="h-auto bg-gray-100 sm:flex items-center justify-between text-center"> <div class="flex flex-col w-full h-full text-start justify-center py-10 px-5 text-secondary"> <h1 class="text-4xl font-bold pb-8"> ${i18n.FOOTER.FOOTER_TITLE} </h1> <div class="flex items-center justify-start pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "location", "size": 40, "class": "text-secondary bg-green-100 rounded-full p-2" })} <p class="text-md px-2 text-title font-medium"> ${i18n.FOOTER.CONTACT_INFO.ADDRESS} </p> </div> <div class="flex items-center justify-start text-center pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "size": 40, "class": "text-secondary bg-green-100 rounded-full p-2" })} <a class="text-xl px-2 text-title font-medium" href="tel:+18093832022">${i18n.FOOTER.CONTACT_INFO.PHONE}</a> </div> <div class="flex items-center justify-start text-center pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "size": 40, "class": "text-secondary bg-green-100 rounded-full p-2" })} <a href="mailto:joe_rofim@hotmail.com" class="text-xl px-2 text-title font-medium">&#106;&#111;&#101;&#95;&#114;&#111;&#102;&#105;&#109;&#64;&#104;&#111;&#116;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a> </div> <h2 class="text-2xl font-bold pt-4"> ${i18n.FOOTER.CONTACT_INFO.SOCIAL_MEDIA_TITLE} </h2> <div class="flex items-center justify-start text-center pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "size": 40, "class": "text-secondary bg-green-100 rounded-full p-2" })} <a href="https://www.instagram.com/globalproducerofim/" target="_blank" class="text-xl px-2 font-medium text-title">@globalproducerofim</a> </div> </div> <div class="flex w-full h-full justify-start items-center md:justify-end px-8 py-5"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo.png", "alt": "logo", "width": "300", "height": "163" })} </div> </div> <div class="bg-black text-white flex justify-center items-center h-20 px-3 text-center"> <p>${i18n.FOOTER.COPYRIGHT}</p> </div> </footer>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Pagina web de Global Produce Rofim"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/ico" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="font-inter" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "SideMenu", $$SideMenu, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/layouts/Layout.astro", void 0);

export { $$Icon as $, getLangFromUrl as a, getRelativeLocaleUrl as b, $$Layout as c, getI18N as g };
