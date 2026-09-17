import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/Events.vue
var _sfc_main = {
	__name: "Events",
	__ssrInlineRender: true,
	setup(__props) {
		const events = [
			{
				date: "MONTHLY",
				title: "Espresso Basics Workshop",
				time: "First Saturday, 10:00am",
				location: "The Roastery",
				tag: "Beginner",
				tagColor: "bg-orange-100 text-orange-700",
				accent: "bg-orange-500"
			},
			{
				date: "MONTHLY",
				title: "Brew at Home: Pour-Over",
				time: "Third Saturday, 10:00am",
				location: "The Roastery",
				tag: "Home Brewing",
				tagColor: "bg-amber-100 text-amber-700",
				accent: "bg-amber-500"
			},
			{
				date: "WEEKLY",
				title: "Cupping & Tasting Session",
				time: "Fridays, 4:00pm",
				location: "The Roastery",
				tag: "Tasting",
				tagColor: "bg-stone-100 text-stone-700",
				accent: "bg-bean-caramel"
			},
			{
				date: "BY ARRANGEMENT",
				title: "Roastery Tours",
				time: "Groups welcome",
				location: "The Roastery",
				tag: "Tour",
				tagColor: "bg-brand-100 text-brand-700",
				accent: "bg-brand-500"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "workshops",
				class: "py-20 bg-gradient-to-b from-brand-50 to-white"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between mb-14"><div><span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">Workshops &amp; Tastings</span><h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900"> What&#39;s <span class="text-gradient-coffee">on</span></h2></div><a href="#contact" class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors"> Get in touch to book <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(events, (event) => {
				_push(`<div class="bg-white rounded-2xl overflow-hidden border border-warm-200 shadow-sm hover:shadow-md transition-shadow"><div class="${(0, server_renderer_exports.ssrRenderClass)([event.accent, "h-2 w-full"])}"></div><div class="p-5"><p class="text-xs font-bold tracking-wider text-warm-400 mb-3">${(0, server_renderer_exports.ssrInterpolate)(event.date)}</p><h3 class="font-semibold text-warm-900 mb-2 leading-snug">${(0, server_renderer_exports.ssrInterpolate)(event.title)}</h3><div class="flex items-center gap-1.5 text-xs text-warm-500 mb-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(event.time)}</div><div class="flex items-center gap-1.5 text-xs text-warm-500 mb-4"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(event.location)}</div><span class="${(0, server_renderer_exports.ssrRenderClass)([event.tagColor, "inline-block px-2.5 py-1 rounded-full text-xs font-semibold"])}">${(0, server_renderer_exports.ssrInterpolate)(event.tag)}</span></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Events.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
