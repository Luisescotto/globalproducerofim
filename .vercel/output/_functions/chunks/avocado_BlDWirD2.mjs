import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Aguacate","slug":"avocado","description":"Aguacate tropical, fruto del árbol Persea americana (familia Lauraceae), con piel verde, pulpa cremosa y forma oval-pera. Ideal para mercados premium.","img":"avocado.jpg","category":"Tropical","packageType":"Caja","pounds":"12.5-25 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/avocado.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n               \r\n             \r\n                                                                                                                                                                   \r\n                \r\n                  \r\n                 \r\n                      \r\n   \r\n";
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
