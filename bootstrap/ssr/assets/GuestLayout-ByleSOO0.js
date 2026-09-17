import { o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Layouts/GuestLayout.vue
var _sfc_main = {
	__name: "GuestLayout",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			default: ""
		},
		subtitle: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen flex font-sans antialiased" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden"><div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-500/30 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-800/40 rounded-full blur-3xl pointer-events-none"></div><div class="relative px-10 pt-10">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Back to website `);
					else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M10 19l-7-7m0 0l7-7m-7 7h18"
					})])), (0, vue_exports.createTextVNode)(" Back to website ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "flex items-center gap-4 mb-10"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/media/logo.svg" alt="Acme Coffee Roasters Logo" class="h-16 w-auto brightness-0 invert opacity-90"${_scopeId}><div${_scopeId}><p class="font-display font-bold text-lg leading-tight"${_scopeId}>Acme Coffee Roasters</p></div>`);
					else return [(0, vue_exports.createVNode)("img", {
						src: "/media/logo.svg",
						alt: "Acme Coffee Roasters Logo",
						class: "h-16 w-auto brightness-0 invert opacity-90"
					}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("p", { class: "font-display font-bold text-lg leading-tight" }, "Acme Coffee Roasters")])];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="font-display text-3xl xl:text-4xl font-bold leading-tight mb-4"> Portal </h1><p class="text-white/75 text-base leading-relaxed mb-10 max-w-sm"> Manage your coffee, subscriptions, workshops, and more — all in one place. </p><ul class="space-y-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)([
				{
					icon: "📅",
					text: "Schedule workshops and tastings"
				},
				{
					icon: "📰",
					text: "Publish news and announcements"
				},
				{
					icon: "👥",
					text: "View and manage subscribers"
				},
				{
					icon: "📊",
					text: "Track orders and activity"
				}
			], (item) => {
				_push(`<li class="flex items-center gap-3 text-white/80 text-sm"><span class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center text-base shrink-0">${(0, server_renderer_exports.ssrInterpolate)(item.icon)}</span> ${(0, server_renderer_exports.ssrInterpolate)(item.text)}</li>`);
			});
			_push(`<!--]--></ul></div><div class="relative px-10 pb-10"><p class="text-white/40 text-xs">© ${(0, server_renderer_exports.ssrInterpolate)((/* @__PURE__ */ new Date()).getFullYear())} Acme Coffee Roasters</p></div></div><div class="flex-1 flex flex-col bg-gradient-to-br from-warm-50 via-brand-50 to-accent-50"><div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "flex items-center gap-3"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/media/logo.svg" alt="Acme Coffee Roasters Logo" class="h-10 w-auto"${_scopeId}><div${_scopeId}><p class="font-display font-semibold text-brand-600 text-sm leading-tight"${_scopeId}>Acme Coffee Roasters</p></div>`);
					else return [(0, vue_exports.createVNode)("img", {
						src: "/media/logo.svg",
						alt: "Acme Coffee Roasters Logo",
						class: "h-10 w-auto"
					}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("p", { class: "font-display font-semibold text-brand-600 text-sm leading-tight" }, "Acme Coffee Roasters")])];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "text-xs text-warm-500 hover:text-brand-600 transition-colors font-medium"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to site `);
					else return [(0, vue_exports.createTextVNode)(" Back to site ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10"><div class="w-full max-w-md"><div class="mb-8"><h2 class="font-display text-2xl font-bold text-warm-900">${(0, server_renderer_exports.ssrInterpolate)(__props.title)}</h2>`);
			if (__props.subtitle) _push(`<p class="text-warm-500 text-sm mt-1">${(0, server_renderer_exports.ssrInterpolate)(__props.subtitle)}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
