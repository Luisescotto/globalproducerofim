import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Plantain","slug":"plantain","description":"A long fruit with green skin when unripe (starchy) or yellow/black when ripe (sweet). A staple in Caribbean, African, and Latin American cuisines, it’s fried (tostones ), boiled (mangú ), roasted, or caramelized as a dessert. High in potassium, vitamin A, fiber, and energy-boosting carbs. Its dense texture and adaptability make it a versatile ingredient for savory dishes, desserts, and breakfasts.","img":"plantain.jpg","category":"Tropical","packageType":"Units Box 50","pounds":""};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/en/plantain.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n               \r\n              \r\n                                                                                                                                                                                                                                                                                                                                                                                                                             \r\n                 \r\n                  \r\n                         \r\n          \r\n   \r\n";
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
