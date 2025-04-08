import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Jackfruit","slug":"jack_fruit","description":"Jackfruit, fruto con tamaño XL con cáscara verde espinosa y pulpa dulce/fibrosa. Maduro, se destaca en postres tropicales; verde, funciona como sustituto vegano de carne. Rico en fibra, vitaminas C y B, y libre de gluten. Cultivo sostenible originario de Asia, hoy clave en mercados internacionales por su versatilidad y demanda vegana.","img":"jackfruit.jpg","category":"Oriental","packageType":"Caja","pounds":"40 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/jackfruit.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                \r\n                \r\n                                                                                                                                                                                                                                                                                                                                                             \r\n                  \r\n                  \r\n                 \r\n                 \r\n   \r\n";
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
