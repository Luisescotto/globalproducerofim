import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XqUvMMd3.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../chunks/Layout_B7LVy64e.mjs';
import { g as getCollection } from '../chunks/_astro_content_CtZg4cKw.mjs';
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getCollection("products");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products - Tranding Global Produce Rofim", "data-astro-cid-3swd3b6j": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full h-screen max-h-96 overflow-hidden text-left z-0 relative min-h-96 justify-items-start items-end" data-astro-cid-3swd3b6j><div class="z-30 relative pb-6 px-10 text-white" data-astro-cid-3swd3b6j><div class="flex flex-col text-white" data-astro-cid-3swd3b6j><ul class="text-[min(6vw,40px)] font-bold" data-astro-cid-3swd3b6j><li class="flex" data-astro-cid-3swd3b6j><span data-astro-cid-3swd3b6j>Premium Quality</span></li><li class="flex" data-astro-cid-3swd3b6j><span data-astro-cid-3swd3b6j>Authentic Products</span></li><li class="flex" data-astro-cid-3swd3b6j><span data-astro-cid-3swd3b6j>Professional Excellence</span></li></ul></div></div><div class="absolute top-0 bottom-0 w-full h-full z-10" data-astro-cid-3swd3b6j><img class="object-center h-full w-full object-cover" src="/heroBgProducts.jpg" alt="" data-astro-cid-3swd3b6j></div></div><section class="flex flex-col pt-6 w-full h-full px-[24px] bg-secondary" data-astro-cid-3swd3b6j><div class="flex justify-center items-center text-center" data-astro-cid-3swd3b6j><h1 class="text-white font-bold border-b-2 border-acent text-4xl pt-4" data-astro-cid-3swd3b6j>
Our Products
</h1></div><div class="flex flex-col justify-center items-center text-center" data-astro-cid-3swd3b6j><p class="text-white text-[12px] xs:text-[14px] sm:text-xl py-3 px-1 text-nowrap" data-astro-cid-3swd3b6j>
We offer a wide range of products from different categories
</p><div class="flex justify-center sm:self-end items-center text-center text-secondary bg-green-100 rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105" data-astro-cid-3swd3b6j><a class="text-[16px] flex gap-2" href="https://drive.google.com/file/d/1lmR6_0v0gq2g_zisNjtIdXSHKal9EWel/view?usp=drive_link" target="_blank" data-astro-cid-3swd3b6j>${renderComponent($$result2, "Icon", $$Icon, { "name": "download", "size": 30, "class": "text-secondary", "data-astro-cid-3swd3b6j": true })}
Download our products catalog</a></div></div><ul class="products-grid py-10 gap-4" data-astro-cid-3swd3b6j>${products.map((product) => {
    const { data } = product;
    const { title, img, category, slug } = data;
    return renderTemplate`<a${addAttribute(`/product/${slug}`, "href")} class="" data-astro-cid-3swd3b6j><li class="w-full flex flex-col pb-2 gap-2 justify-center items-center text-center bg-white rounded transition-transform duration-300 hover:scale-105" data-astro-cid-3swd3b6j><img loading="lazy"${addAttribute(img, "src")}${addAttribute(title, "alt")} class="max-w-none w-50 h-50" data-astro-cid-3swd3b6j><p data-astro-cid-3swd3b6j>${title}</p>${category == "Tropical" ? renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-secondary bg-green-100" data-astro-cid-3swd3b6j>${category}</span>` : category == "Oriental" ? renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-orange-900 bg-orange-100" data-astro-cid-3swd3b6j>${category}</span>` : renderTemplate`<span class="rounded-2xl px-2 text-[14px] font-medium text-yellow-800 bg-yellow-100" data-astro-cid-3swd3b6j>${category}</span>`}</li></a>`;
  })}</ul></section>` })}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/products.astro", void 0);

const $$file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
