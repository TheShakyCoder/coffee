import { o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const news = [
			{
				date: "1 May 2026",
				title: "New seasonal Ethiopian single origin has landed",
				excerpt: "A bright, floral natural-process lot with notes of blueberry and jasmine — roasted light for filter. Available now while stocks last.",
				tag: "New Coffee",
				tagColor: "bg-brand-100 text-brand-700"
			},
			{
				date: "15 Apr 2026",
				title: "Subscriptions just got more flexible",
				excerpt: "Choose your grind, swap your beans each delivery, and pause whenever you like. Fresh coffee on your schedule, never a bag too many.",
				tag: "Subscriptions",
				tagColor: "bg-stone-100 text-stone-700"
			},
			{
				date: "1 Apr 2026",
				title: "Spring brewing workshops now open for booking",
				excerpt: "Master espresso or dial in your pour-over with our hands-on sessions at the roastery. Small groups, expert guidance, plenty of coffee.",
				tag: "Workshops",
				tagColor: "bg-amber-100 text-amber-700"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "news",
				class: "py-20 bg-white"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between mb-14"><div><span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">Latest News</span><h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900"> What&#39;s <span class="text-gradient-coffee">new</span> at the roastery </h2></div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/news-updates",
				class: "hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` All news <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
					else return [(0, vue_exports.createTextVNode)(" All news "), ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M9 5l7 7-7 7"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-3 gap-7"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(news, (item) => {
				_push(`<article class="group border border-warm-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer"><div class="flex items-center justify-between mb-4"><span class="${(0, server_renderer_exports.ssrRenderClass)([item.tagColor, "px-2.5 py-1 rounded-full text-xs font-semibold"])}">${(0, server_renderer_exports.ssrInterpolate)(item.tag)}</span><time class="text-xs text-warm-400">${(0, server_renderer_exports.ssrInterpolate)(item.date)}</time></div><h3 class="font-semibold text-warm-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors">${(0, server_renderer_exports.ssrInterpolate)(item.title)}</h3><p class="text-sm text-warm-500 leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(item.excerpt)}</p><div class="mt-4 flex items-center gap-1 text-xs font-medium text-brand-500"> Read more <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
