import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	setup(__props) {
		const services = [
			{
				icon: "&#129760;",
				title: "Single-Origin Beans",
				desc: "Traceable coffees from a single farm or region — bright, distinctive and roasted to bring out each origin's character. Brazil, Colombia, Ethiopia and more.",
				color: "bg-brand-50 border-brand-200",
				iconBg: "bg-brand-100"
			},
			{
				icon: "&#9749;",
				title: "Espresso Blends",
				desc: "Rich, balanced blends built for the espresso machine — chocolatey, full-bodied and forgiving, with a thick golden crema every time.",
				color: "bg-amber-50 border-amber-200",
				iconBg: "bg-amber-100"
			},
			{
				icon: "&#127759;",
				title: "Filter & Decaf",
				desc: "Lighter filter roasts for pour-over, V60 and batch brew, plus a properly good decaf for those who want the flavour without the buzz.",
				color: "bg-orange-50 border-orange-200",
				iconBg: "bg-orange-100"
			},
			{
				icon: "&#128230;",
				title: "Coffee Subscriptions",
				desc: "Our best value. Choose your beans, grind and frequency and we'll roast and post fresh coffee on your schedule — pause or cancel any time.",
				color: "bg-stone-50 border-stone-200",
				iconBg: "bg-stone-100"
			},
			{
				icon: "&#127869;",
				title: "Brewing Equipment",
				desc: "Grinders, pour-over kit, cafetières, scales and filters — everything you need to brew a better cup at home, hand-picked by our team.",
				color: "bg-lime-50 border-lime-200",
				iconBg: "bg-lime-100"
			},
			{
				icon: "&#127873;",
				title: "Gifts & Bundles",
				desc: "Curated coffee gift boxes, taster bundles and gift cards — a thoughtful present for any coffee lover, ready to send straight to their door.",
				color: "bg-yellow-50 border-yellow-200",
				iconBg: "bg-yellow-100"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "coffee",
				class: "py-20 bg-white"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-14"><span class="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3 block">Our Coffee</span><h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900"> A great cup for <span class="text-gradient-coffee">everyone</span></h2><p class="text-warm-500 mt-4 max-w-xl mx-auto"> From bright single origins to rich espresso blends, subscriptions and brewing kit — freshly roasted and ready to ship. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(services, (service) => {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([service.color, "group p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"])}"><div class="${(0, server_renderer_exports.ssrRenderClass)([service.iconBg, "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"])}">${service.icon ?? ""}</div><h3 class="font-semibold text-warm-900 text-base mb-2">${(0, server_renderer_exports.ssrInterpolate)(service.title)}</h3><p class="text-sm text-warm-600 leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(service.desc)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
