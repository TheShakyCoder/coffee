import { a as usePage, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-C2BttBfH.js";
//#region resources/js/Pages/Subscriptions/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		plans: {
			type: Array,
			default: () => []
		},
		subscribed: {
			type: Boolean,
			default: false
		},
		currentPlan: {
			type: String,
			default: null
		},
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const page = usePage();
		const navLinks = page.props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Coffee Subscriptions — Acme Coffee Roasters" }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				navLinks: (0, vue_exports.unref)(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(`<section class="relative overflow-hidden text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%)" })}"><div class="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center"><span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border border-white/20 uppercase tracking-widest"> Our best value </span><h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Coffee subscriptions</h1><p class="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed"> Freshly roasted coffee on your schedule. Choose a plan, and we&#39;ll roast to order and post it to your door — pause, swap or cancel any time. </p></div><div class="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"><path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"></path></svg></div></section><section class="py-16 lg:py-20 bg-white"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">`);
			if ((0, vue_exports.unref)(page).props.flash?.error) _push(`<div class="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.error)}</div>`);
			else _push(`<!---->`);
			if (__props.subscribed) {
				_push(`<div class="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-center justify-between gap-4"><span>You have an active subscription. 🎉</span>`);
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("account.billing"),
					class: "font-semibold underline underline-offset-2 shrink-0"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Manage billing`);
						else return [(0, vue_exports.createTextVNode)("Manage billing")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<div class="grid gap-6 md:grid-cols-3 items-stretch"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.plans, (plan) => {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([plan.featured ? "border-brand-500 shadow-xl shadow-brand-500/10" : "border-warm-200", "relative flex flex-col rounded-2xl border-2 p-7 transition-all"])}">`);
				if (plan.featured) _push(`<span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422, #2a190e)" })}"> Most popular </span>`);
				else _push(`<!---->`);
				_push(`<h2 class="font-display text-xl font-bold text-warm-900">${(0, server_renderer_exports.ssrInterpolate)(plan.name)}</h2><p class="mt-2 flex items-baseline gap-1"><span class="font-display text-3xl font-extrabold text-warm-900">${(0, server_renderer_exports.ssrInterpolate)(plan.price)}</span><span class="text-sm text-warm-400">/ ${(0, server_renderer_exports.ssrInterpolate)(plan.interval)}</span></p><p class="mt-3 text-sm text-warm-500 leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(plan.description)}</p><ul class="mt-5 space-y-2.5 flex-1"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(plan.features, (feature) => {
					_push(`<li class="flex items-start gap-2 text-sm text-warm-700"><svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(feature)}</li>`);
				});
				_push(`<!--]--></ul><div class="mt-7">`);
				if (__props.subscribed && __props.currentPlan === plan.id) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("account.billing"),
					class: "block text-center py-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` ✓ Your current plan `);
						else return [(0, vue_exports.createTextVNode)(" ✓ Your current plan ")];
					}),
					_: 2
				}, _parent));
				else if (__props.subscribed) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("account.billing"),
					class: "block text-center py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Manage in billing `);
						else return [(0, vue_exports.createTextVNode)(" Manage in billing ")];
					}),
					_: 2
				}, _parent));
				else if (!plan.available) _push(`<button type="button" disabled class="w-full py-3 rounded-xl text-sm font-semibold bg-warm-100 text-warm-400 cursor-not-allowed"> Coming soon </button>`);
				else if ((0, vue_exports.unref)(page).props.auth?.user) _push(`<form${(0, server_renderer_exports.ssrRenderAttr)("action", _ctx.route("subscriptions.checkout"))} method="POST"><input type="hidden" name="_token"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(page).props.csrf_token)}><input type="hidden" name="plan"${(0, server_renderer_exports.ssrRenderAttr)("value", plan.id)}><button type="submit" style="${(0, server_renderer_exports.ssrRenderStyle)(plan.featured ? "background: linear-gradient(135deg, #6f4422, #2a190e)" : "")}" class="${(0, server_renderer_exports.ssrRenderClass)([plan.featured ? "" : "bg-brand-600 hover:bg-brand-700", "w-full py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm"])}"> Subscribe </button></form>`);
				else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("login"),
					class: "block text-center py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Log in to subscribe `);
						else return [(0, vue_exports.createTextVNode)(" Log in to subscribe ")];
					}),
					_: 2
				}, _parent));
				_push(`</div></div>`);
			});
			_push(`<!--]--></div><p class="text-center text-xs text-warm-400 mt-10"> Prices include free UK delivery. You can manage or cancel your subscription at any time. </p></div></section>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Subscriptions/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
