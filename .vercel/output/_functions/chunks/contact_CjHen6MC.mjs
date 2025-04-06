import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_DkevOTP5.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Icon } from './Layout_CoO1AYC6.mjs';

const $$Astro = createAstro("https://www.globalproducerofim.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full h-screen max-h-96 overflow-hidden text-left z-0 relative min-h-96 justify-items-start items-end" data-astro-cid-soxsy4n7> <div class="z-30 relative pb-6 px-10 text-white" data-astro-cid-soxsy4n7> <div class="flex flex-col text-white" data-astro-cid-soxsy4n7> <ul class="text-[min(6vw,40px)] font-bold" data-astro-cid-soxsy4n7> <li class="flex" data-astro-cid-soxsy4n7> <span data-astro-cid-soxsy4n7>${i18n.CONTACT.BANNER.P1}</span> </li> <li class="flex" data-astro-cid-soxsy4n7> <span data-astro-cid-soxsy4n7>${i18n.CONTACT.BANNER.P2}</span> </li> <li class="flex" data-astro-cid-soxsy4n7> <span data-astro-cid-soxsy4n7>${i18n.CONTACT.BANNER.P3}</span> </li> </ul> </div> </div> <div class="absolute top-0 bottom-0 w-full h-full z-10" data-astro-cid-soxsy4n7> <img class="object-center h-full w-full object-cover" src="/heroBgProducts.jpg" alt="" data-astro-cid-soxsy4n7> </div> </div> <main aria-label="us" class="flex flex-col w-full h-auto items-start justify-start text-center mx-auto bg-white" data-astro-cid-soxsy4n7> <div class="flex flex-col h-auto w-full justify-center text-center items-cente mx-auto px-12 py-4" data-astro-cid-soxsy4n7> <h3 class="pb-2 text-3xl text-title font-bold" data-astro-cid-soxsy4n7> ${i18n.CONTACT.TITLE} </h3> <p class="text-title/80" data-astro-cid-soxsy4n7> ${i18n.CONTACT.TAGLINE} </p> <div class="py-8" data-astro-cid-soxsy4n7> <a href="https://www.google.com/maps" target="_blank" data-astro-cid-soxsy4n7> <img class="w-full h-full rounded border-primary shadow-lg" src="/maps.jpg" alt="Ubicación de Trading Global Produce Rofim" data-astro-cid-soxsy4n7> </a> </div> </div> <h1 class="text-white font-bold text-2xl py-8 bg-secondary w-full" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.TITLE} </h1> <div class="h-auto w-full text-center items-center cards-grid flex-wrap bg-secondary pb-12 gap-4 px-12" data-astro-cid-soxsy4n7> <a href="tel:+18093832022" class="flex flex-col w-full h-full bg-white hover:bg-linear-to-b from-white to-primary/20 justify-around items-center p-8 rounded shadow-md" data-astro-cid-soxsy4n7> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "size": 50, "class": "text-secondary bg-green-100 rounded-full p-2", "data-astro-cid-soxsy4n7": true })} <h2 class="text-2xl font-medium py-1.5 leading-tight text-secondary" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.PHONE.TITLE} </h2> <p class="text-xl text-title" data-astro-cid-soxsy4n7>${i18n.CONTACT.INFO.CARDS.PHONE.P}</p> </a> <a href="mailto:joe_rofim@hotmail.com" class="flex flex-col w-full h-full bg-white hover:bg-linear-to-b from-white to-primary/20 justify-around items-center p-8 rounded shadow-md" data-astro-cid-soxsy4n7> ${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "size": 50, "class": "text-secondary bg-green-100 rounded-full p-2", "data-astro-cid-soxsy4n7": true })} <h2 class="text-2xl font-medium py-1.5 leading-tight text-secondary" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.EMAIL.TITLE} </h2> <p class="text-xl sm:text-sm lg:text-xl text-title" data-astro-cid-soxsy4n7>
&#106;&#111;&#101;&#95;&#114;&#111;&#102;&#105;&#109;&#64;&#104;&#111;&#116;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
</p> </a> <article class="flex flex-col w-full h-full bg-white hover:bg-linear-to-b from-white to-primary/20 justify-around items-center p-8 rounded shadow-md" data-astro-cid-soxsy4n7> ${renderComponent($$result, "Icon", $$Icon, { "name": "location", "size": 50, "class": "text-secondary bg-green-100 rounded-full p-2", "data-astro-cid-soxsy4n7": true })} <h2 class="text-2xl font-medium py-1.5 leading-tight text-secondary" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.LOCATION.TITLE} </h2> <p class="text-lg text-title" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.LOCATION.P} </p> </article> <a href="https://drive.google.com/file/d/1lmR6_0v0gq2g_zisNjtIdXSHKal9EWel/view?usp=drive_link" target="_blank" class="flex flex-col w-full h-full bg-white hover:bg-linear-to-b from-white to-primary/20 justify-around items-center p-8 rounded shadow-md" data-astro-cid-soxsy4n7> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "size": 50, "class": "text-secondary bg-green-100 rounded-full p-2", "data-astro-cid-soxsy4n7": true })} <h2 class="text-2xl font-medium py-1.5 leading-tight text-secondary" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.DOWNLOAD.TITLE} </h2> <p class="text-md text-secondary border-2 border-secondary rounded px-3 py-2" data-astro-cid-soxsy4n7> ${i18n.CONTACT.INFO.CARDS.DOWNLOAD.P} </p> </a> </div> </main>`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/components/pages/contact.astro", void 0);

export { $$Contact as $ };
