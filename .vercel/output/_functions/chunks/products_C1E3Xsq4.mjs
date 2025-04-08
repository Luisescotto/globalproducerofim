import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import { g as getI18N, a as getLangFromUrl, b as getRelativeLocaleUrl, $ as $$Icon } from './Layout_Bua67f1J.mjs';
import { g as getCollection } from './_astro_content_BksGV7Qo.mjs';
import { $ as $$Image } from './_astro_assets_BRry4TA6.mjs';

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const lang = getLangFromUrl(Astro2.url);
  getRelativeLocaleUrl(lang, "products");
  const collection = lang;
  const products = await getCollection(collection);
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full h-screen max-h-96 overflow-hidden text-left z-0 relative min-h-96 justify-items-start items-end" data-astro-cid-nzsl65ms> <div class="z-30 relative pb-6 px-10 text-white" data-astro-cid-nzsl65ms> <div class="flex flex-col text-white" data-astro-cid-nzsl65ms> <ul class="text-[min(6vw,40px)] font-bold" data-astro-cid-nzsl65ms> <li class="flex" data-astro-cid-nzsl65ms> <span data-astro-cid-nzsl65ms>${i18n.CONTACT.BANNER.P1}</span> </li> <li class="flex" data-astro-cid-nzsl65ms> <span data-astro-cid-nzsl65ms>${i18n.CONTACT.BANNER.P2}</span> </li> <li class="flex" data-astro-cid-nzsl65ms> <span data-astro-cid-nzsl65ms>${i18n.CONTACT.BANNER.P3}</span> </li> </ul> </div> </div> <div class="absolute top-0 bottom-0 w-full h-full z-10" data-astro-cid-nzsl65ms> ${renderComponent($$result, "Image", $$Image, { "class": "object-center h-full w-full object-cover", "src": "/heroBgProducts.jpg", "alt": "", "width": "300", "height": "163", "data-astro-cid-nzsl65ms": true })} </div> </div> <section class="flex flex-col pt-6 w-full h-full px-[24px] bg-secondary" data-astro-cid-nzsl65ms> <div class="flex justify-center items-center text-center" data-astro-cid-nzsl65ms> <h1 class="text-white font-bold border-b-2 border-acent text-4xl pt-4" data-astro-cid-nzsl65ms> ${i18n.PRODUCTS.TITLE} </h1> </div> <div class="flex flex-col justify-center items-center text-center" data-astro-cid-nzsl65ms> <p class="text-white text-[12px] xs:text-[14px] sm:text-xl py-3 px-1 text-nowrap" data-astro-cid-nzsl65ms> ${i18n.PRODUCTS.TAGLINE} </p> <div class="flex justify-center sm:self-end items-center text-center text-secondary bg-green-100 rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105" data-astro-cid-nzsl65ms> <a class="text-[16px] flex gap-2 justify-center items-center text-center" href="https://drive.google.com/file/d/1lmR6_0v0gq2g_zisNjtIdXSHKal9EWel/view?usp=drive_link" target="_blank" data-astro-cid-nzsl65ms> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "size": 30, "class": "text-secondary", "data-astro-cid-nzsl65ms": true })} ${i18n.PRODUCTS.CATALOG}</a> </div> </div> <ul class="products-grid py-10 gap-4" data-astro-cid-nzsl65ms> ${products.map((product) => {
    const { data } = product;
    const { title, img, category, slug } = data;
    return renderTemplate`<a${addAttribute(`${getRelativeLocaleUrl(lang, "product")}${slug}`, "href")} class="" data-astro-cid-nzsl65ms> <li class="w-full flex flex-col pb-2 gap-2 justify-center items-center text-center bg-white rounded transition-transform duration-300 hover:scale-105" data-astro-cid-nzsl65ms> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": "/" + img, "alt": title, "decoding": "async", "class": "max-w-none w-50 h-50", "width": "50", "height": "50", "data-astro-cid-nzsl65ms": true })} <p data-astro-cid-nzsl65ms>${title}</p> ${category == "Tropical" ? renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-secondary bg-green-100" data-astro-cid-nzsl65ms> ${category} </span>` : category == "Oriental" ? renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-orange-900 bg-orange-100" data-astro-cid-nzsl65ms> ${category} </span>` : renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-yellow-800 bg-yellow-100" data-astro-cid-nzsl65ms> ${category} </span>`} </li> </a>`;
  })} </ul> </section>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/pages/products.astro", void 0);

export { $$Products as $ };
