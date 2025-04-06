import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DkevOTP5.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_CoO1AYC6.mjs';
import { $ as $$Contact$1 } from '../chunks/contact_CjHen6MC.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Tranding Global Produce Rofim" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$Contact$1, {})} ` })}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/contact.astro", void 0);

const $$file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
