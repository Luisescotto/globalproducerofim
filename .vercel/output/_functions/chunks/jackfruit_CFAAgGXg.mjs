import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Jackfruit","slug":"jack_fruit","description":"Large tropical fruit with spiky green skin and sweet, fibrous flesh. Ripe, used in desserts; unripe, a meat substitute (think \"vegan pulled pork\"). High in fiber, vitamins C/B, and gluten-free. A sustainable crop native to Asia, now popular globally.","img":"jackfruit.jpg","category":"Oriental","packageType":"Box","pounds":"40 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/en/jackfruit.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                \r\n                \r\n                                                                                                                                                                                                                                                                       \r\n                  \r\n                  \r\n                \r\n                 \r\n   \r\n";
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
