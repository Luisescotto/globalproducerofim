import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Pumpkin","slug":"pumpkin","description":"A versatile, nutrient-rich winter squash with vibrant orange flesh and a slightly sweet, earthy flavor. Widely used in both savory dishes (soups, stews, roasted) and sweet recipes (pies, desserts). High in vitamins A and C, fiber, and antioxidants.","img":"pumpkin.webp","category":"Roots","packageType":"Box","pounds":"50 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/pumpkin.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n              \r\n             \r\n                                                                                                                                                                                                                                                                     \r\n                 \r\n               \r\n                \r\n                 \r\n   \r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
