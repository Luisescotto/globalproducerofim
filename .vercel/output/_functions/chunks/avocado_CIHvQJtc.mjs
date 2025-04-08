import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Avocado","slug":"avocado","description":"Is a tropical fruit with an oval or pear-like shape, featuring green skin and creamy flesh. It is the fruit of the Persea americana tree, belonging to the Lauraceae (laurel) family.","img":"./avocado.jpg","category":"Tropical","packageType":"Box","pounds":"12.5-25 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/en/avocado.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n              \r\n             \r\n                                                                                                                                                                                                  \r\n                  \r\n                  \r\n                \r\n                      \r\n   \r\n";
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
