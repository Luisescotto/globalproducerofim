import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Thai Chilli","slug":"thai_chilli","description":"A small, fiery chili with high heat levels (50,000–100,000 SHU on the Scoville scale). A staple in Southeast Asian cuisine, especially in curries, sauces, and soups. Packed with vitamin C and antioxidants. Its fruity yet intense flavor adds boldness to savory dishes.","img":"thaiChilli.jpg","category":"Oriental","packageType":"Box","pounds":"30 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/en/thaiChilli.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                  \r\n                 \r\n                                                                                                                                                                                                                                                                                        \r\n                   \r\n                  \r\n                \r\n                 \r\n   \r\n";
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
