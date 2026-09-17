import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/Stats.vue
var _sfc_main = {
	__name: "Stats",
	__ssrInlineRender: true,
	setup(__props) {
		const stats = [
			{
				value: "12+",
				label: "Single-origin coffees",
				color: "from-brand-400 to-brand-600",
				shadow: "shadow-brand-400/20"
			},
			{
				value: "48h",
				label: "Roasted to dispatch",
				color: "from-bean-mocha to-bean-caramel",
				shadow: "shadow-bean-mocha/20"
			},
			{
				value: "1000s",
				label: "Bags delivered",
				color: "from-bean-rust to-bean-gold",
				shadow: "shadow-bean-rust/20"
			},
			{
				value: "5⭐",
				label: "Customer rating",
				color: "from-accent-400 to-accent-600",
				shadow: "shadow-accent-400/20"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "bg-white py-14" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(stats, (stat) => {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([stat.shadow, "relative text-center p-7 rounded-2xl bg-white border border-warm-100 shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-200"])}"><div class="${(0, server_renderer_exports.ssrRenderClass)([stat.color, "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"])}"></div><p class="${(0, server_renderer_exports.ssrRenderClass)([stat.color, "font-display text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent"])}">${stat.value ?? ""}</p><p class="text-sm text-warm-500 mt-2 font-medium">${(0, server_renderer_exports.ssrInterpolate)(stat.label)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Stats.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
