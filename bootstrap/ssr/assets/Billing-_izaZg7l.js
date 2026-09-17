import { a as usePage, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-C2BttBfH.js";
//#region resources/js/Pages/Account/Billing.vue
var _sfc_main = {
	__name: "Billing",
	__ssrInlineRender: true,
	props: {
		hasStripe: {
			type: Boolean,
			default: false
		},
		subscription: {
			type: Object,
			default: null
		}
	},
	setup(__props) {
		const page = usePage();
		const navLinks = page.props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Billing — Acme Coffee Roasters" }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white min-h-screen flex flex-col">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`<section class="flex-1 bg-warm-50 py-16"><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><h1 class="font-display text-2xl font-extrabold text-warm-900 mb-1">Your billing</h1><p class="text-warm-500 text-sm mb-8">Manage your coffee subscription and payment details.</p>`);
			if ((0, vue_exports.unref)(page).props.flash?.error) _push(`<div class="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.error)}</div>`);
			else _push(`<!---->`);
			_push(`<div class="bg-white border border-warm-200 rounded-2xl shadow-sm p-7 mb-6"><h2 class="font-semibold text-warm-900 mb-4">Subscription</h2>`);
			if (__props.subscription) {
				_push(`<!--[--><div class="flex flex-wrap items-center gap-3 mb-4">`);
				if (__props.subscription.active && !__props.subscription.onGracePeriod) _push(`<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Active</span>`);
				else if (__props.subscription.onGracePeriod) _push(`<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Cancelling</span>`);
				else _push(`<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-warm-100 text-warm-600">Inactive</span>`);
				if (__props.subscription.plan) _push(`<span class="text-sm text-warm-600">${(0, server_renderer_exports.ssrInterpolate)(__props.subscription.plan.name)} — ${(0, server_renderer_exports.ssrInterpolate)(__props.subscription.plan.price)} / ${(0, server_renderer_exports.ssrInterpolate)(__props.subscription.plan.interval)}</span>`);
				else _push(`<!---->`);
				_push(`</div>`);
				if (__props.subscription.onGracePeriod && __props.subscription.endsAt) _push(`<p class="text-sm text-warm-500"> Your subscription is set to end on <strong>${(0, server_renderer_exports.ssrInterpolate)(__props.subscription.endsAt)}</strong>. You&#39;ll keep receiving coffee until then. </p>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			} else {
				_push(`<div class="text-sm text-warm-500"><p class="mb-4">You don&#39;t have an active subscription yet.</p>`);
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("subscriptions.index"),
					class: "inline-block px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Browse subscription plans `);
						else return [(0, vue_exports.createTextVNode)(" Browse subscription plans ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			}
			_push(`</div><div class="bg-white border border-warm-200 rounded-2xl shadow-sm p-7"><h2 class="font-semibold text-warm-900 mb-2">Payment &amp; invoices</h2><p class="text-sm text-warm-500 mb-5"> Update your card, download invoices, or change/cancel your subscription in Stripe&#39;s secure customer portal. </p>`);
			if (__props.hasStripe) _push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", _ctx.route("account.billing.portal"))} class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "linear-gradient(135deg, #6f4422, #2a190e)" })}"> Manage billing in Stripe <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`);
			else _push(`<p class="text-sm text-warm-400">No billing history yet — it&#39;ll appear here after your first order.</p>`);
			_push(`</div></div></section>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Billing.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
