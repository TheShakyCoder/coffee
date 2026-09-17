import { a as usePage, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-C2BttBfH.js";
//#region resources/js/Pages/Shop/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		products: {
			type: Array,
			default: () => []
		},
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const page = usePage();
		const navLinks = page.props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Shop Coffee — Acme Coffee Roasters" }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				navLinks: (0, vue_exports.unref)(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(`<section class="relative overflow-hidden text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%)" })}"><div class="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"><nav class="flex items-center gap-2 text-white/50 text-xs mb-5">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "hover:text-white transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home`);
					else return [(0, vue_exports.createTextVNode)("Home")];
				}),
				_: 1
			}, _parent));
			_push(`<span>›</span><span class="text-white/80">Shop</span></nav><span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border border-white/20 uppercase tracking-widest"> Freshly roasted to order </span><h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Shop our coffee</h1><p class="text-white/75 text-lg max-w-xl leading-relaxed"> Single-origin beans and signature blends, roasted in small batches and shipped at their freshest. Or `);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/subscriptions",
				class: "underline underline-offset-2 hover:text-white"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`save with a subscription`);
					else return [(0, vue_exports.createTextVNode)("save with a subscription")];
				}),
				_: 1
			}, _parent));
			_push(`. </p></div><div class="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"><path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"></path></svg></div></section><section class="py-16 lg:py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			if ((0, vue_exports.unref)(page).props.flash?.error) _push(`<div class="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.error)}</div>`);
			else _push(`<!---->`);
			_push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.products, (product) => {
				_push(`<div class="group flex flex-col border border-warm-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-lg transition-all duration-200"><div class="aspect-[4/3] bg-gradient-to-br from-brand-50 to-warm-100 flex items-center justify-center"><span class="text-7xl group-hover:scale-110 transition-transform duration-300">🫘</span></div><div class="p-6 flex flex-col flex-1 gap-3"><div class="flex flex-wrap gap-2"><span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">${(0, server_renderer_exports.ssrInterpolate)(product.origin)}</span><span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">${(0, server_renderer_exports.ssrInterpolate)(product.roast)}</span></div><h2 class="font-display font-semibold text-warm-900 leading-snug">${(0, server_renderer_exports.ssrInterpolate)(product.name)}</h2><p class="text-xs font-medium text-brand-600">${(0, server_renderer_exports.ssrInterpolate)(product.tasting)}</p><p class="text-sm text-warm-500 leading-relaxed flex-1">${(0, server_renderer_exports.ssrInterpolate)(product.description)}</p><div class="flex items-baseline justify-between pt-1"><p class="font-display text-xl font-bold text-warm-900">${(0, server_renderer_exports.ssrInterpolate)(product.price)}</p><p class="text-xs text-warm-400">${(0, server_renderer_exports.ssrInterpolate)(product.weight)}</p></div>`);
				if (product.available) {
					_push(`<form${(0, server_renderer_exports.ssrRenderAttr)("action", _ctx.route("shop.checkout"))} method="POST" class="mt-2 flex gap-2"><input type="hidden" name="_token"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(page).props.csrf_token)}><input type="hidden" name="product"${(0, server_renderer_exports.ssrRenderAttr)("value", product.id)}><select name="quantity" class="w-16 px-2 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)(5, (n) => {
						_push(`<option${(0, server_renderer_exports.ssrRenderAttr)("value", n)}>${(0, server_renderer_exports.ssrInterpolate)(n)}</option>`);
					});
					_push(`<!--]--></select><button type="submit" class="flex-1 py-2.5 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-sm" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422, #2a190e)" })}"> Buy now </button></form>`);
				} else _push(`<button type="button" disabled class="mt-2 w-full py-2.5 text-sm font-semibold rounded-xl bg-warm-100 text-warm-400 cursor-not-allowed"> Coming soon </button>`);
				_push(`</div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shop/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
