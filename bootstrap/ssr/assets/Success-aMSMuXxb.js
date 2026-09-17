import { a as usePage, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-C2BttBfH.js";
//#region resources/js/Pages/Checkout/Success.vue
var _sfc_main = {
	__name: "Success",
	__ssrInlineRender: true,
	props: { sessionId: {
		type: String,
		default: null
	} },
	setup(__props) {
		const page = usePage();
		const navLinks = page.props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Thank you — Acme Coffee Roasters" }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white min-h-screen flex flex-col">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`<section class="flex-1 flex items-center justify-center px-4 py-20 bg-warm-50"><div class="w-full max-w-lg text-center bg-white border border-warm-200 rounded-2xl shadow-sm p-10"><div class="mx-auto w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><h1 class="font-display text-2xl font-extrabold text-warm-900 mb-3">Thank you for your order!</h1><p class="text-warm-500 leading-relaxed mb-8"> Your payment was successful and a confirmation is on its way to your inbox. We&#39;ll get your coffee roasted and on its way to you shortly. ☕ </p><div class="flex flex-wrap justify-center gap-3">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/shop",
				class: "px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm",
				style: { "background": "linear-gradient(135deg, #6f4422, #2a190e)" }
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Continue shopping `);
					else return [(0, vue_exports.createTextVNode)(" Continue shopping ")];
				}),
				_: 1
			}, _parent));
			if ((0, vue_exports.unref)(page).props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("account.billing"),
				class: "px-6 py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` View my billing `);
					else return [(0, vue_exports.createTextVNode)(" View my billing ")];
				}),
				_: 1
			}, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "px-6 py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to home `);
					else return [(0, vue_exports.createTextVNode)(" Back to home ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Success.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
