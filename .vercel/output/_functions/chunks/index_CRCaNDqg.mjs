import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, s as spreadAttributes, o as renderSlot, p as renderScript } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Icon, a as getLangFromUrl, b as getRelativeLocaleUrl } from './Layout_Bua67f1J.mjs';
import { $ as $$Image } from './_astro_assets_BRry4TA6.mjs';
import { tv } from 'tailwind-variants';
import 'clsx';
import { g as getCollection } from './_astro_content_BksGV7Qo.mjs';

const $$Astro$9 = createAstro();
const $$HeroSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeroSearch;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full h-screen overflow-hidden text-left z-0 relative min-h-96 justify-items-start items-center md:items-end"> <div class="z-30 relative pb-6 px-10 text-white"> <header class="flex flex-col flex-nowrap mb-4"> <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl lg:pr-20 font-bold font-inter"> ${i18n.HERO_HOME.HERO_TITLE} </h1> <h2 class="text-xl md:text-2xl font-semibold -mt-2 font-inter"> ${i18n.HERO_HOME.HERO_TAGLINE} </h2> </header> <div class="flex flex-col text-white"> <ul class="text-xl sm:2xl md:4xl lg:text-4xl font-light justify-center items-start flex flex-col gap-5"> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P1}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P2}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P3}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "plus-outline" })}<span>${i18n.HERO_HOME.P4}</span> </li> </ul> </div> </div> <div class="absolute top-0 bottom-0 w-full h-full z-10"> ${renderComponent($$result, "Image", $$Image, { "class": "object-center h-full w-full object-cover", "src": "/heroBg.jpg", "alt": "", "width": 1440, "height": 953 })} </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HeroSearch.astro", void 0);

const $$Astro$8 = createAstro();
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tabs;
  const tabs = tv({ base: "starwind-tabs" });
  const { defaultValue, syncKey, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabs({ class: className }), "class")}${addAttribute(defaultValue, "data-default-value")}${addAttribute(syncKey, "data-sync-key")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro", void 0);

const $$Astro$7 = createAstro();
const $$TabsContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TabsContent;
  const tabsContent = tv({ base: "mt-2 focus-visible:outline-2 focus-visible:outline-offset-2" });
  const { value, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabsContent({ class: className }), "class")} data-tabs-content${addAttribute(value, "data-value")} data-state="inactive" role="tabpanel" tabindex="0" hidden${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/TabsContent.astro", void 0);

const $$Astro$6 = createAstro();
const $$TabsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TabsList;
  const tabsList = tv({
    base: "bg-muted text-muted-foreground inline-flex w-full items-center justify-center rounded-md p-1"
  });
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabsList({ class: className }), "class")} data-tabs-list role="tablist"${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/TabsList.astro", void 0);

const $$Astro$5 = createAstro();
const $$TabsTrigger = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TabsTrigger;
  const tabsTrigger = tv({
    base: [
      "starwind-transition-colors inline-flex grow items-center justify-center rounded-sm px-3 py-1.5 font-medium whitespace-nowrap",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "focus-visible:outline-outline focus-visible:outline-2 focus-visible:outline-offset-2",
      "disabled:pointer-events-none disabled:opacity-50"
    ]
  });
  const { value, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(tabsTrigger({ class: className }), "class")} data-tabs-trigger${addAttribute(value, "data-value")} data-state="inactive" role="tab" aria-selected="false"${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/TabsTrigger.astro", void 0);

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const $$Astro$4 = createAstro();
const $$HomeTabTropical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HomeTabTropical;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  const productAvocado = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/avocado.md": () => import('./avocado_CIHvQJtc.mjs'),"../content/es/avocado.md": () => import('./avocado_BlDWirD2.mjs'),"../content/products/avocado.md": () => import('./avocado_DcXrerNg.mjs')})), `../content/${lang}/avocado.md`, 4);
  const productMango = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/mango.md": () => import('./mango_Cv-gO2N6.mjs'),"../content/es/mango.md": () => import('./mango_cnLq5Izq.mjs'),"../content/products/mango.md": () => import('./mango_Dqe9mLSb.mjs')})), `../content/${lang}/mango.md`, 4);
  const productPlantain = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/plantain.md": () => import('./plantain_C6qPDeyR.mjs'),"../content/es/plantain.md": () => import('./plantain_B6GZnJa0.mjs'),"../content/products/plantain.md": () => import('./plantain_DmDYMVwi.mjs')})), `../content/${lang}/plantain.md`, 4);
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productMango.frontmatter.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productMango.frontmatter.img}`, "alt": productMango.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${productMango.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productAvocado.frontmatter.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productAvocado.frontmatter.img}`, "alt": productAvocado.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${productAvocado.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productPlantain.frontmatter.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productPlantain.frontmatter.img}`, "alt": productPlantain.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${productPlantain.frontmatter.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-secondary"> <p class="pb-3 px-1">${i18n.TABS.TAB_TROPICAL.TAB_P}</p> <a${addAttribute(getRelativeLocaleUrl(lang, "products"), "href")} class="px-2 py-1 rounded-2xl bg-green-100 text-secondary font-bold">${i18n.TABS.TAB_TROPICAL.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabTropical.astro", void 0);

const $$Astro$3 = createAstro();
const $$HomeTabOriental = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeTabOriental;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  const productChili = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/thaiChilli.md": () => import('./thaiChilli_D009qtLn.mjs'),"../content/es/thaiChilli.md": () => import('./thaiChilli_B_P-YJ0F.mjs'),"../content/products/thaiChilli.md": () => import('./thaiChilli_BkIbfhEm.mjs')})), `../content/${lang}/thaiChilli.md`, 4);
  const productTindora = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/tindora.md": () => import('./tindora_a9T16fbj.mjs'),"../content/es/tindora.md": () => import('./tindora_DUwD0SHq.mjs'),"../content/products/tindora.md": () => import('./tindora_D5zl_bgt.mjs')})), `../content/${lang}/tindora.md`, 4);
  const productJack = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/jackfruit.md": () => import('./jackfruit_CFAAgGXg.mjs'),"../content/es/jackfruit.md": () => import('./jackfruit__1vp2d1e.mjs'),"../content/products/jackfruit.md": () => import('./jackfruit_1hFidcha.mjs')})), `../content/${lang}/jackfruit.md`, 4);
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productJack.frontmatter.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productJack.frontmatter.img}`, "alt": productJack.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${productJack.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productTindora.frontmatter.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productTindora.frontmatter.img}`, "alt": productTindora.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${productTindora.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productChili.frontmatter.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productChili.frontmatter.img}`, "alt": productChili.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${productChili.frontmatter.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-orange-900"> <p class="pb-3 px-2 text-xs md:text-xl"> ${i18n.TABS.TAB_ORIENTAL.TAB_P} </p> <a${addAttribute(getRelativeLocaleUrl(lang, "products"), "href")} class="px-2 py-1 font-bold rounded-2xl text-orange-900 bg-orange-100">${i18n.TABS.TAB_ORIENTAL.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabOriental.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeTabRoots = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeTabRoots;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  const productPumpkin = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/pumpkin.md": () => import('./pumpkin_Bup7pPlf.mjs'),"../content/es/pumpkin.md": () => import('./pumpkin_DGmaUq-q.mjs'),"../content/products/pumpkin.md": () => import('./pumpkin_DYcLRn82.mjs')})), `../content/${lang}/pumpkin.md`, 4);
  const productSweetPotatoe = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/sweetPotatoe.md": () => import('./sweetPotatoe_BAGTGgcN.mjs'),"../content/es/sweetPotatoe.md": () => import('./sweetPotatoe_DUaUU5jQ.mjs'),"../content/products/sweetPotatoe.md": () => import('./sweetPotatoe_By7WRXfY.mjs')})), `../content/${lang}/sweetPotatoe.md`, 4);
  const productGarlic = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/en/garlic.md": () => import('./garlic_DR_3bS4x.mjs'),"../content/es/garlic.md": () => import('./garlic_CpuC89dg.mjs'),"../content/products/garlic.md": () => import('./garlic_DvnWRbK8.mjs')})), `../content/${lang}/garlic.md`, 4);
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productPumpkin.frontmatter.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productPumpkin.frontmatter.img}`, "alt": productPumpkin.frontmatter.title, "class": "w-full block h-full", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${productPumpkin.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productSweetPotatoe.frontmatter.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productSweetPotatoe.frontmatter.img}`, "alt": productSweetPotatoe.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${productSweetPotatoe.frontmatter.title} </h2> </div> </article> </a> <a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${productGarlic.frontmatter.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": `/${productGarlic.frontmatter.img}`, "alt": productGarlic.frontmatter.title, "class": "w-full h-full block", "width": 600, "height": 600 })} <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${productGarlic.frontmatter.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-yellow-800"> <p class="pb-3 px-2">${i18n.TABS.TAB_ROOTS.TAB_P}</p> <a${addAttribute(getRelativeLocaleUrl(lang, "products"), "href")} class="px-2 py-1 font-bold rounded-2xl text-yellow-800 bg-yellow-100">${i18n.TABS.TAB_ROOTS.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabRoots.astro", void 0);

const $$Astro$1 = createAstro();
const $$HomeTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeTabs;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="h-auto flex flex-col items-center py-12"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.TABS.SECTION_TITLE} </h1> <div class="w-auto mx-auto px-6 sm:px-0 flex items-center justify-center text-center pt-2"> ${renderComponent($$result, "Tabs", $$Tabs, { "defaultValue": "tropical", "class": "max-w-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TabsList", $$TabsList, { "class": "bg-white/0 text-acent" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "oriental" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB1_NAME}` })} ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "tropical" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB2_NAME}` })} ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "roots" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB3_NAME}` })} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "oriental" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabOriental", $$HomeTabOriental, {})} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "tropical" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabTropical", $$HomeTabTropical, {})} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "roots" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabRoots", $$HomeTabRoots, {})} ` })} ` })} </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabs.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const brands = await getCollection("brands");
  const flags = await getCollection("flags");
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "HeroSearch", $$HeroSearch, {})} ${renderComponent($$result, "HomeTabs", $$HomeTabs, {})} ${maybeRenderHead()}<section class="w-full h-full bg-amber-700"> <div> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full pointer-events-none", "width": 50, "height": 50, "src": "/bannerbg.jpg", "alt": "" })} </div> </section> <section class="flex flex-col mt-6 w-full h-full"> <div class="flex justify-center items-center text-center"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.HOME.BRANDS_TITLE} </h1> </div> <div class="flex overflow-hidden"> <ul class="flex animate-loop-scroll py-10 gap-10"> ${[...brands, ...brands].map((brand) => {
    const { data } = brand;
    const { brandImg, brandAlt } = data;
    return renderTemplate`<li class="flex gap-2"> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": brandImg, "alt": brandAlt, "class": "max-w-none w-25 h-18 md:w-35 md:h-25", "width": 100, "height": 100 })} </li>`;
  })} </ul> </div> </section> <section class="flex flex-col mt-6 w-full h-full"> <div class="flex justify-center items-center text-center"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.HOME.EXPORT_TITLE} </h1> </div> <div class="flex overflow-hidden"> <ul class="flex animate-loop-inverse py-10 gap-15"> ${[...flags, ...flags].map((flag) => {
    const { data } = flag;
    const { flagImg, flagAlt } = data;
    return renderTemplate`<li class="flex gap-2 shadow-md"> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": flagImg, "alt": flagAlt, "class": "max-w-none w-20 md:w-35 h-auto", "width": 100, "height": 100 })} </li>`;
  })} </ul> </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/pages/index.astro", void 0);

export { $$Index as $ };
