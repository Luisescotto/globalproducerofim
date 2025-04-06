import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, s as spreadAttributes, q as renderSlot, o as renderScript, u as unescapeHTML } from './astro/server_DkevOTP5.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Icon } from './Layout_CoO1AYC6.mjs';
import { tv } from 'tailwind-variants';
import 'clsx';
import { g as getCollection } from './_astro_content_SubFZrGB.mjs';

const $$Astro$9 = createAstro("https://www.globalproducerofim.com");
const $$HeroSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeroSearch;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full h-screen overflow-hidden text-left z-0 relative min-h-96 justify-items-start items-center md:items-end"> <div class="z-30 relative pb-6 px-10 text-white"> <header class="flex flex-col flex-nowrap mb-4"> <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl lg:pr-20 font-bold font-inter"> ${i18n.HERO_HOME.HERO_TITLE} </h1> <h2 class="text-xl md:text-2xl font-semibold -mt-2 font-inter"> ${i18n.HERO_HOME.HERO_TAGLINE} </h2> </header> <div class="flex flex-col text-white"> <ul class="text-xl sm:2xl md:4xl lg:text-4xl font-light justify-center items-start flex flex-col gap-5"> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P1}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P2}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "check-bold" })}<span>${i18n.HERO_HOME.P3}</span> </li> <li class="flex"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-2xl sm:text-3xl lg:text-5xl", "name": "plus-outline" })}<span>${i18n.HERO_HOME.P4}</span> </li> </ul> </div> </div> <div class="absolute top-0 bottom-0 w-full h-full z-10"> <img class="object-center h-full w-full object-cover" src="/heroBg.jpg" alt=""> </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HeroSearch.astro", void 0);

const $$Astro$8 = createAstro("https://www.globalproducerofim.com");
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tabs;
  const tabs = tv({ base: "starwind-tabs" });
  const { defaultValue, syncKey, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabs({ class: className }), "class")}${addAttribute(defaultValue, "data-default-value")}${addAttribute(syncKey, "data-sync-key")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro", void 0);

const $$Astro$7 = createAstro("https://www.globalproducerofim.com");
const $$TabsContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TabsContent;
  const tabsContent = tv({ base: "mt-2 focus-visible:outline-2 focus-visible:outline-offset-2" });
  const { value, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabsContent({ class: className }), "class")} data-tabs-content${addAttribute(value, "data-value")} data-state="inactive" role="tabpanel" tabindex="0" hidden${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/TabsContent.astro", void 0);

const $$Astro$6 = createAstro("https://www.globalproducerofim.com");
const $$TabsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TabsList;
  const tabsList = tv({
    base: "bg-muted text-muted-foreground inline-flex w-full items-center justify-center rounded-md p-1"
  });
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tabsList({ class: className }), "class")} data-tabs-list role="tablist"${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/TabsList.astro", void 0);

const $$Astro$5 = createAstro("https://www.globalproducerofim.com");
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

const html$8 = () => "";

				const frontmatter$8 = {"title":"Avocado","slug":"avocado","description":"Is a tropical fruit with an oval or pear-like shape, featuring green skin and creamy flesh. It is the fruit of the Persea americana tree, belonging to the Lauraceae (laurel) family.","img":"./avocado.jpg","category":"Tropical","packageType":"Box","pounds":"12.5-25 pounds"};
				const file$8 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/avocado.md";
				const url$8 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$8;
					content.file = file$8;
					content.url = url$8;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$8())}`;
				});

const html$7 = () => "";

				const frontmatter$7 = {"title":"Mango","slug":"mango","description":"Juicy, sweet, and vibrantly colored, our Dominican mangoes are cultivated under optimal tropical conditions. Known for their rich flavor and smooth texture, they are handpicked at peak ripeness to ensure premium quality. Perfect for retail, foodservice, or wholesale distribution.","img":"mango.jpg","category":"Tropical","packageType":"Box","pounds":"4-8 pounds"};
				const file$7 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/mango.md";
				const url$7 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$7;
					content.file = file$7;
					content.url = url$7;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$7())}`;
				});

const html$6 = () => "";

				const frontmatter$6 = {"title":"Plantain","slug":"plantain","description":"A long fruit with green skin when unripe (starchy) or yellow/black when ripe (sweet). A staple in Caribbean, African, and Latin American cuisines, it’s fried (tostones ), boiled (mangú ), roasted, or caramelized as a dessert. High in potassium, vitamin A, fiber, and energy-boosting carbs. Its dense texture and adaptability make it a versatile ingredient for savory dishes, desserts, and breakfasts.","img":"plantain.jpg","category":"Tropical","packageType":"Units Box 50","pounds":""};
				const file$6 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/plantain.md";
				const url$6 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$6())}`;
				});

const $$Astro$4 = createAstro("https://www.globalproducerofim.com");
const $$HomeTabTropical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HomeTabTropical;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`/product/${frontmatter$7.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$7.img}`, "src")}${addAttribute(frontmatter$7.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$7.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter$8.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$8.img}`, "src")}${addAttribute(frontmatter$8.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$8.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter$6.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$6.img}`, "src")}${addAttribute(frontmatter$6.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-secondary bg-green-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$6.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-secondary"> <p class="pb-3 px-1">${i18n.TABS.TAB_TROPICAL.TAB_P}</p> <a href="/products" class="px-2 py-1 rounded-2xl bg-green-100 text-secondary font-bold">${i18n.TABS.TAB_TROPICAL.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabTropical.astro", void 0);

const html$5 = () => "";

				const frontmatter$5 = {"title":"Thai Chilli","slug":"thai_chilli","description":"A small, fiery chili with high heat levels (50,000–100,000 SHU on the Scoville scale). A staple in Southeast Asian cuisine, especially in curries, sauces, and soups. Packed with vitamin C and antioxidants. Its fruity yet intense flavor adds boldness to savory dishes.","img":"thaiChilli.jpg","category":"Oriental","packageType":"Box","pounds":"30 pounds"};
				const file$5 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/thaiChilli.md";
				const url$5 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$5())}`;
				});

const html$4 = () => "";

				const frontmatter$4 = {"title":"Tindora","slug":"tindora","description":"Small, round green gourd with a mild, slightly sweet flavor. Common in South Asian cuisines (curries, stir-fries, stuffed dishes). Low-calorie, high in fiber and vitamin C. Often paired with spices like turmeric, cumin, and garlic. A staple in Indian and Pakistani home cooking.","img":"tindora.webp","category":"Oriental","packageType":"Box","pounds":"30 pounds"};
				const file$4 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/tindora.md";
				const url$4 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4())}`;
				});

const html$3 = () => "";

				const frontmatter$3 = {"title":"Jack fruit","slug":"jack_fruit","description":"Large tropical fruit with spiky green skin and sweet, fibrous flesh. Ripe, used in desserts; unripe, a meat substitute (think \"vegan pulled pork\"). High in fiber, vitamins C/B, and gluten-free. A sustainable crop native to Asia, now popular globally.","img":"jackfruit.jpg","category":"Oriental","packageType":"Box","pounds":"40 pounds"};
				const file$3 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/jackfruit.md";
				const url$3 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3())}`;
				});

const $$Astro$3 = createAstro("https://www.globalproducerofim.com");
const $$HomeTabOriental = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeTabOriental;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`/product/${frontmatter$3.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$3.img}`, "src")}${addAttribute(frontmatter$3.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$3.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter$4.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$4.img}`, "src")}${addAttribute(frontmatter$4.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$4.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter$5.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$5.img}`, "src")}${addAttribute(frontmatter$5.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-orange-900 bg-orange-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$5.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-orange-900"> <p class="pb-3 px-2 text-xs md:text-xl"> ${i18n.TABS.TAB_ORIENTAL.TAB_P} </p> <a href="/products" class="px-2 py-1 font-bold rounded-2xl text-orange-900 bg-orange-100">${i18n.TABS.TAB_ORIENTAL.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabOriental.astro", void 0);

const html$2 = () => "";

				const frontmatter$2 = {"title":"Pumpkin","slug":"pumpkin","description":"A versatile, nutrient-rich winter squash with vibrant orange flesh and a slightly sweet, earthy flavor. Widely used in both savory dishes (soups, stews, roasted) and sweet recipes (pies, desserts). High in vitamins A and C, fiber, and antioxidants.","img":"pumpkin.webp","category":"Roots","packageType":"Box","pounds":"50 pounds"};
				const file$2 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/pumpkin.md";
				const url$2 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2())}`;
				});

const html$1 = () => "";

				const frontmatter$1 = {"title":"Sweet Potato","slug":"sweet_potato","description":"A nutrient-dense root vegetable with vibrant orange flesh, offering a subtly sweet flavor and velvety texture. Versatile in both savory dishes (roasted, fries, casseroles) and sweet recipes (pies, muffins). Packed with beta-carotene, vitamins A and C, and fiber. Naturally gluten-free and lower on the glycemic index compared to regular potatoes. A global staple in cuisines from the Americas to Asia.","img":"sweetPotatoe.webp","category":"Roots","packageType":"Box","pounds":"50 pounds"};
				const file$1 = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/sweetPotatoe.md";
				const url$1 = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1())}`;
				});

const html = () => "";

				const frontmatter = {"title":"Garlic","slug":"garlic","description":"A pungent, aromatic bulb with cloves that add bold flavor to cuisines worldwide. Used in cooking (sauces, roasts, sautés), traditional remedies, and natural health practices. Rich in allicin, vitamins B6 and C, and antioxidants.","img":"garlic.webp","category":"Roots","packageType":"Sack","pounds":"23 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/garlic.md";
				const url = undefined;

				createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const $$Astro$2 = createAstro("https://www.globalproducerofim.com");
const $$HomeTabRoots = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeTabRoots;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto w-full h-auto max-w-xl pt-20"> <div class="h-auto w-full text-center items-center grid grid-cols-2 grid-rows-2 border-2 border-gray-100 rounded"> <a${addAttribute(`/product/${frontmatter$2.slug}`, "href")} class="xl:mb-0 border-r-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$2.img}`, "src")}${addAttribute(frontmatter$2.title, "alt")} class="w-full block h-full"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$2.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter$1.slug}`, "href")} class="xl:mb-0 border-b-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter$1.img}`, "src")}${addAttribute(frontmatter$1.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter$1.title} </h2> </div> </article> </a> <a${addAttribute(`/product/${frontmatter.slug}`, "href")} class="xl:mb-0 border-t-2 border-gray-100"> <article class="flex flex-col w-full relative"> <img${addAttribute(`/${frontmatter.img}`, "src")}${addAttribute(frontmatter.title, "alt")} class="w-full h-full block"> <div class="w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4 pb-1 absolute"> <h2 class="text-md md:text-2xl font-bold leading-tight text-yellow-800 bg-yellow-100/80 rounded-2xl px-2 py-1 mb-2"> ${frontmatter.title} </h2> </div> </article> </a> <div class="w-full h-full flex flex-col justify-center items-center text-white border-l-2 border-gray-100 bg-yellow-800"> <p class="pb-3 px-2">${i18n.TABS.TAB_ROOTS.TAB_P}</p> <a href="/products" class="px-2 py-1 font-bold rounded-2xl text-yellow-800 bg-yellow-100">${i18n.TABS.TAB_ROOTS.TAB_LINK}</a> </div> </div> </div>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabRoots.astro", void 0);

const $$Astro$1 = createAstro("https://www.globalproducerofim.com");
const $$HomeTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeTabs;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="h-auto flex flex-col items-center py-12"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.TABS.SECTION_TITLE} </h1> <div class="w-auto mx-auto px-6 sm:px-0 flex items-center justify-center text-center pt-2"> ${renderComponent($$result, "Tabs", $$Tabs, { "defaultValue": "tropical", "class": "max-w-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TabsList", $$TabsList, { "class": "bg-white/0 text-acent" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "oriental" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB1_NAME}` })} ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "tropical" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB2_NAME}` })} ${renderComponent($$result3, "TabsTrigger", $$TabsTrigger, { "value": "roots" }, { "default": ($$result4) => renderTemplate`${i18n.TABS.TAB3_NAME}` })} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "oriental" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabOriental", $$HomeTabOriental, {})} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "tropical" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabTropical", $$HomeTabTropical, {})} ` })} ${renderComponent($$result2, "TabsContent", $$TabsContent, { "value": "roots" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeTabRoots", $$HomeTabRoots, {})} ` })} ` })} </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/HomeTabs.astro", void 0);

const $$Astro = createAstro("https://www.globalproducerofim.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const brands = await getCollection("brands");
  const flags = await getCollection("flags");
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "HeroSearch", $$HeroSearch, {})} ${renderComponent($$result, "HomeTabs", $$HomeTabs, {})} ${maybeRenderHead()}<section class="w-full h-full bg-amber-700"> <div> <img class="w-full h-full pointer-events-none" src="/bannerbg.jpg" alt=""> </div> </section> <section class="flex flex-col mt-6 w-full h-full"> <div class="flex justify-center items-center text-center"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.HOME.BRANDS_TITLE} </h1> </div> <div class="flex overflow-hidden"> <ul class="flex animate-loop-scroll py-10 gap-10"> ${[...brands, ...brands].map((brand) => {
    const { data } = brand;
    const { brandImg, brandAlt } = data;
    return renderTemplate`<li class="flex gap-2"> <img loading="lazy"${addAttribute(brandImg, "src")}${addAttribute(brandAlt, "alt")} class="max-w-none w-25 h-18 md:w-35 md:h-25"> </li>`;
  })} </ul> </div> </section> <section class="flex flex-col mt-6 w-full h-full"> <div class="flex justify-center items-center text-center"> <h1 class="text-title font-bold border-b-2 border-acent text-4xl pt-4"> ${i18n.HOME.EXPORT_TITLE} </h1> </div> <div class="flex overflow-hidden"> <ul class="flex animate-loop-inverse py-10 gap-10"> ${[...flags, ...flags].map((flag) => {
    const { data } = flag;
    const { flagImg, flagAlt } = data;
    return renderTemplate`<li class="flex gap-2"> <img loading="lazy"${addAttribute(flagImg, "src")}${addAttribute(flagAlt, "alt")} class="max-w-none w-20 md:w-35 h-auto"> </li>`;
  })} </ul> </div> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/pages/index.astro", void 0);

export { $$Index as $ };
