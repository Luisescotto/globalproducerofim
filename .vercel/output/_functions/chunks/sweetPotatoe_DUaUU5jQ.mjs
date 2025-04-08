import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Batata","slug":"sweet_potato","description":"Batata, raíz nutricionalmente densa con pulpa naranja vibrante, sabor dulce sutil y textura aterciopelada. Versátil en preparaciones saladas (asados, fritos, gratinados) y dulces (pay, muffins). Cargada con beta-caroteno, vitamina A y fibra dietética, es un sustituto saludable de la papa convencional por su bajo índice glucémico y ausencia de gluten. Base culinaria global desde América hasta Asia, adaptada a dietas modernas y tradicionales.","img":"sweetPotatoe.jpg","category":"Roots","packageType":"Caja","pounds":"50 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/sweetPotatoe.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n             \r\n                  \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                         \r\n                     \r\n               \r\n                 \r\n                 \r\n   \r\n";
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
