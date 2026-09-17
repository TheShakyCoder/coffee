import { i as useForm, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./GuestLayout-ByleSOO0.js";
//#region resources/js/Pages/Auth/VerifyEmail.vue
var _sfc_main = {
	__name: "VerifyEmail",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const props = __props;
		const form = useForm({});
		const submit = () => {
			form.post(route("verification.send"));
		};
		const verificationLinkSent = (0, vue_exports.computed)(() => props.status === "verification-link-sent");
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
				title: "Verify your email",
				subtitle: "One last step before you get started"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Email Verification" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 p-4 rounded-xl bg-warm-100 border border-warm-200 text-sm text-warm-600 leading-relaxed"${_scopeId}> Thanks for signing up. Please verify your email address by clicking the link we sent you. If it hasn&#39;t arrived, you can request a new one below. </div>`);
						if (verificationLinkSent.value) _push(`<div class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> A new verification link has been sent to your email address. </div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Sending…" : "Resend verification email")}</button></form><p class="mt-6 text-center text-sm text-warm-500"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "text-warm-400 hover:text-warm-600 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Sign out `);
								else return [(0, vue_exports.createTextVNode)(" Sign out ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p>`);
					} else return [
						(0, vue_exports.createVNode)((0, vue_exports.unref)(head_default), { title: "Email Verification" }),
						(0, vue_exports.createVNode)("div", { class: "mb-6 p-4 rounded-xl bg-warm-100 border border-warm-200 text-sm text-warm-600 leading-relaxed" }, " Thanks for signing up. Please verify your email address by clicking the link we sent you. If it hasn't arrived, you can request a new one below. "),
						verificationLinkSent.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"
						}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: "w-4 h-4 shrink-0",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						})])), (0, vue_exports.createTextVNode)(" A new verification link has been sent to your email address. ")])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("form", { onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]) }, [(0, vue_exports.createVNode)("button", {
							type: "submit",
							disabled: (0, vue_exports.unref)(form).processing,
							class: "w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						}, [(0, vue_exports.unref)(form).processing ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							key: 0,
							class: "w-4 h-4 animate-spin",
							fill: "none",
							viewBox: "0 0 24 24"
						}, [(0, vue_exports.createVNode)("circle", {
							class: "opacity-25",
							cx: "12",
							cy: "12",
							r: "10",
							stroke: "currentColor",
							"stroke-width": "4"
						}), (0, vue_exports.createVNode)("path", {
							class: "opacity-75",
							fill: "currentColor",
							d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						})])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Sending…" : "Resend verification email"), 1)], 8, ["disabled"])], 32),
						(0, vue_exports.createVNode)("p", { class: "mt-6 text-center text-sm text-warm-500" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "text-warm-400 hover:text-warm-600 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Sign out ")]),
							_: 1
						}, 8, ["href"])])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
