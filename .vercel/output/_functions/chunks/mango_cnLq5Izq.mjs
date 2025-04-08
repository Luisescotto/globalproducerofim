import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Mango","slug":"mango","description":"Mango, fruto carnoso y dulce, cultivado bajo condiciones tropicales óptimas en RD. Reconocido por su sabor intenso y textura suave, se cosecha en su punto de madurez para garantizar calidad premium. Ideal para retail, foodservice o distribución masiva, cumpliendo con estándares internacionales de sabor y presentación.","img":"mango.jpg","category":"Tropical","packageType":"Caja","pounds":"4-8 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/mango.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n            \r\n           \r\n                                                                                                                                                                                                                                                                                                                                            \r\n              \r\n                  \r\n                 \r\n                  \r\n   \r\n";
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
