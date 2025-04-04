import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_XqUvMMd3.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DYmitiPJ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/","cacheDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/node_modules/.astro/","outDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/dist/","srcDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/src/","publicDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/public/","buildClientDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/dist/client/","buildServerDir":"file:///C:/Users/luise/Documents/Astro/globalproducerofim/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"products/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/product/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/product/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/products.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/products@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/product/[id]@_@astro":"pages/product/_id_.astro.mjs","\u0000@astro-page:src/pages/products@_@astro":"pages/products.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","C:/Users/luise/Documents/Astro/globalproducerofim/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_5ZrJGSYc.mjs","C:\\Users\\luise\\Documents\\Astro\\globalproducerofim\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\luise\\Documents\\Astro\\globalproducerofim\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CqVKUvuw.mjs","\u0000@astrojs-manifest":"manifest_OjhnsVyx.mjs","C:/Users/luise/Documents/Astro/globalproducerofim/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.C4_EzL_R.js","C:/Users/luise/Documents/Astro/globalproducerofim/src/components/SideMenu.astro?astro&type=script&index=0&lang.ts":"_astro/SideMenu.astro_astro_type_script_index_0_lang.BiJbqeLz.js","C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.l4cBzppU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/luise/Documents/Astro/globalproducerofim/src/components/starwind/tabs/Tabs.astro?astro&type=script&index=0&lang.ts","class g{tabs;triggers;contents;currentTabIndex=0;tabsId;syncKey;storageKey;valueToTriggerMap;valueToContentMap;constructor(t,i){this.tabs=t,this.triggers=Array.from(t.querySelectorAll(\"[data-tabs-trigger]\")),this.contents=Array.from(t.querySelectorAll(\"[data-tabs-content]\")),this.tabsId=`starwind-tabs${i}`,this.syncKey=t.dataset.syncKey,this.storageKey=this.syncKey?`starwind-tabs-${this.syncKey}`:`starwind-tabs-${this.tabsId}`,this.valueToTriggerMap=new Map(this.triggers.map(e=>[e.getAttribute(\"data-value\")??\"\",e])),this.valueToContentMap=new Map(this.contents.map(e=>[e.getAttribute(\"data-value\")??\"\",e])),this.setupIds(),this.initializeTab(),this.addEventListeners(),this.syncKey&&this.setupSyncListener()}initializeTab(){const t=this.syncKey?localStorage.getItem(this.storageKey)??this.tabs.dataset.defaultValue:this.tabs.dataset.defaultValue;t&&(this.showTab(t),this.currentTabIndex=this.triggers.findIndex(i=>i.getAttribute(\"data-value\")===t),this.setTabIndex())}setupSyncListener(){document.addEventListener(`starwind-tabs-sync:${this.syncKey}`,t=>{const i=t.detail.value,e=this.valueToTriggerMap.get(i),s=e?this.triggers.indexOf(e):-1;s!==-1&&(this.showTab(i),this.currentTabIndex=s,this.setTabIndex())})}setupIds(){this.triggers.forEach((t,i)=>{const e=`${this.tabsId}-t${i}`,s=`${this.tabsId}-c${i}`,n=t.getAttribute(\"data-value\");if(t.id=e,n){t.setAttribute(\"aria-controls\",s);const r=this.valueToContentMap.get(n);r&&(r.id=s,r.setAttribute(\"aria-labelledby\",e))}})}setTabIndex(){this.triggers.forEach((t,i)=>{t.setAttribute(\"tabindex\",i===this.currentTabIndex?\"0\":\"-1\")})}dispatchSyncEvent(t){this.syncKey&&(document.dispatchEvent(new CustomEvent(`starwind-tabs-sync:${this.syncKey}`,{detail:{value:t}})),localStorage.setItem(this.storageKey,t))}handleKeyNavigation=(t,i)=>{const e=t.key;let s=this.currentTabIndex;switch(e){case\"ArrowRight\":{for(let a=1;a<this.triggers.length;a++){const h=(this.currentTabIndex+a)%this.triggers.length;if(!this.triggers[h].disabled){s=h;break}}break}case\"ArrowLeft\":{for(let a=1;a<this.triggers.length;a++){const h=(this.currentTabIndex-a+this.triggers.length)%this.triggers.length;if(!this.triggers[h].disabled){s=h;break}}break}case\"Home\":{for(let a=0;a<this.triggers.length;a++)if(!this.triggers[a].disabled){s=a;break}break}case\"End\":{for(let a=this.triggers.length-1;a>=0;a--)if(!this.triggers[a].disabled){s=a;break}break}default:return}t.preventDefault();const n=this.triggers[s],r=n.getAttribute(\"data-value\");r&&(this.showTab(r),this.currentTabIndex=s,this.setTabIndex(),n.focus(),this.dispatchSyncEvent(r))};handleClick=(t,i)=>{const e=t.getAttribute(\"data-value\");e&&(this.showTab(e),this.currentTabIndex=i,this.setTabIndex(),t.focus(),this.dispatchSyncEvent(e))};addEventListeners(){this.triggers.forEach((t,i)=>{t.addEventListener(\"click\",()=>this.handleClick(t,i)),t.addEventListener(\"keydown\",e=>this.handleKeyNavigation(e,t))})}showTab(t){const i=this.valueToTriggerMap.get(t),e=this.valueToContentMap.get(t);!i||!e||(this.triggers.forEach(s=>{const n=s===i;s.setAttribute(\"data-state\",n?\"active\":\"inactive\"),s.setAttribute(\"aria-selected\",n.toString())}),this.contents.forEach(s=>{const n=s===e;s.setAttribute(\"data-state\",n?\"active\":\"inactive\"),s.hidden=!n}))}}const c=new WeakMap,o=()=>{document.querySelectorAll(\".starwind-tabs\").forEach((d,t)=>{c.has(d)||c.set(d,new g(d,t))})};o();document.addEventListener(\"astro:after-swap\",o);"]],"assets":["/_astro/about.Dxy8vvUx.css","/aboutBg.jpg","/avocado.jpg","/bannerAbout.jpg","/bannerbg.jpg","/bellPepper.jpg","/breadFruit.jpg","/bugaluTomato.jpg","/cachuchaPepper.jpg","/carrot.jpg","/cassava.jpg","/cherryTomato.jpg","/chineseOkra.jpg","/cubanellePepper.jpg","/cucumber.jpg","/dosakai.jpg","/favicon.ico","/favicon.svg","/garlic.webp","/greenBanana.jpg","/greenLongBean.jpg","/guardBean.jpg","/habaneroPepper.jpg","/heroBg.jpg","/heroBgAbout.jpg","/heroBgProducts.jpg","/indianLongSquash.jpg","/inter.ttf","/jackfruit.jpg","/lemon.jpg","/logo.png","/longChilli.jpg","/mango.jpg","/maps.jpg","/pineapple.jpg","/plantain.jpg","/pumpkin.webp","/quenepa.jpg","/redOnion.jpg","/roundTomato.jpg","/sweetPotatoe.webp","/thaiChilli.jpg","/tindora.webp","/tindoraParvol.jpg","/video.mp4","/watermelon.jpg","/whiteLongBean.jpg","/whiteTania.jpg","/whiteYam.jpg","/yellowOnion.jpg","/yellowTania.jpg","/flags/germany.png","/flags/guadeloupe.png","/flags/italy.png","/flags/martinique.png","/flags/netherlands.png","/flags/puertoRico.png","/flags/spain.png","/flags/unitedStates.png","/flags/virginIslands.png","/_astro/Header.astro_astro_type_script_index_0_lang.C4_EzL_R.js","/_astro/SideMenu.astro_astro_type_script_index_0_lang.BiJbqeLz.js","/_astro/store.SV53OXd4.js","/brands/logoArrozCampos.jpg","/brands/logoBaldom.png","/brands/logoBrunswick.png","/brands/logoCafeSantoDomingo.jpg","/brands/logoCoopearroz.webp","/brands/logoDonaGallina.png","/brands/logoGrupoRica.png","/brands/logoLaFabril.jpg","/brands/logoMaggi.png","/brands/logoNestle.png","/brands/logoNiveo.png","/about/index.html","/contact/index.html","/products/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"kXSoQCFJG0befe/W7xFrN+VF4jP+gfaDEz/OtIj91ds="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
