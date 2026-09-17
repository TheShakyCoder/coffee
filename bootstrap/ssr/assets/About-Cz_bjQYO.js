import { a as usePage, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Components/PrimaryLink.vue
var _sfc_main$1 = {
	__name: "PrimaryLink",
	__ssrInlineRender: true,
	props: { href: String },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), (0, vue_exports.mergeProps)({
				href: __props.href,
				class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-white text-sm font-semibold rounded-xl hover:bg-brand-600 transition-colors"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryLink.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Home/Partials/About.vue
var _sfc_main = {
	__name: "About",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "about",
				class: "py-20 bg-warm-50"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-2 gap-16 items-center"><div><span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">About Us</span><h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900 mb-6 leading-tight"> More than just<br>a <span class="text-gradient-coffee">cup of coffee</span></h2><p class="text-warm-600 leading-relaxed mb-4"> Acme Coffee Roasters is an independent speciality roaster. We source green beans from growers we trust, roast them in small batches on our own roaster, and ship them at their freshest — so every cup tastes the way it should. </p><p class="text-warm-600 leading-relaxed mb-8"> From bright, fruity filter roasts to rich, chocolatey espresso blends, there&#39;s a coffee here for every brewer and every palate. Order a single bag, set up a subscription, or join us for a workshop to learn the craft behind the cup. </p><div class="flex flex-wrap gap-3"><a href="#coffee" class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"> Browse Our Coffee </a><a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-brand-200 text-brand-600 text-sm font-semibold rounded-xl hover:border-brand-400 transition-colors"> Get in Touch </a></div></div><div class="grid grid-cols-2 gap-4"><div class="rounded-2xl p-6 text-white col-span-2" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%)" })}"><p class="text-2xl font-display font-bold mb-2">&quot;The best coffee we&#39;ve had at home&quot;</p><p class="text-white/80 text-sm leading-relaxed"> &quot;You can taste how fresh it is. The subscription means we never run out, and every roast has been spot on. Brilliant service — highly recommended.&quot; </p><p class="text-white/60 text-xs mt-3 font-medium">— Verified subscriber</p></div><div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2"><span class="text-3xl">🫠</span><p class="text-sm font-semibold text-warm-800">Small-Batch Roasting</p><p class="text-xs text-warm-500">Roasted to order, never sat on a shelf</p></div><div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2"><span class="text-3xl">🌍</span><p class="text-sm font-semibold text-warm-800">Ethically Sourced</p><p class="text-xs text-warm-500">Traceable beans from trusted growers</p></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
