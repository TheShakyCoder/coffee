import { i as useForm, n as head_default, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./GuestLayout-ByleSOO0.js";
import { t as _sfc_main$2 } from "./InputError-B4JFFWr9.js";
//#region resources/js/Pages/Auth/ResetPassword.vue
var _sfc_main = {
	__name: "ResetPassword",
	__ssrInlineRender: true,
	props: {
		email: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			token: props.token,
			email: props.email,
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("password.store"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
				title: "Choose a new password",
				subtitle: "Enter your new password below"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Reset Password" }, null, _parent, _scopeId));
						_push(`<form class="space-y-5"${_scopeId}><div${_scopeId}><label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Email address</label><input id="email"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).email)} type="email" required autocomplete="username" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><label for="password" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>New password</label><input id="password"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).password)} type="password" required autocomplete="new-password" placeholder="••••••••" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.password ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><label for="password_confirmation" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Confirm new password</label><input id="password_confirmation"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).password_confirmation)} type="password" required autocomplete="new-password" placeholder="••••••••" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.password_confirmation ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Set new password")}</button></form>`);
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(head_default), { title: "Reset Password" }), (0, vue_exports.createVNode)("form", {
						onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
						class: "space-y-5"
					}, [
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", {
								for: "email",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Email address"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								id: "email",
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).email = $event,
								type: "email",
								required: "",
								autocomplete: "username",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-warm-900", (0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).email]]),
							(0, vue_exports.createVNode)(_sfc_main$2, {
								class: "mt-1.5",
								message: (0, vue_exports.unref)(form).errors.email
							}, null, 8, ["message"])
						]),
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", {
								for: "password",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "New password"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								id: "password",
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
								type: "password",
								required: "",
								autocomplete: "new-password",
								placeholder: "••••••••",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.password ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).password]]),
							(0, vue_exports.createVNode)(_sfc_main$2, {
								class: "mt-1.5",
								message: (0, vue_exports.unref)(form).errors.password
							}, null, 8, ["message"])
						]),
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", {
								for: "password_confirmation",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Confirm new password"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								id: "password_confirmation",
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password_confirmation = $event,
								type: "password",
								required: "",
								autocomplete: "new-password",
								placeholder: "••••••••",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.password_confirmation ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).password_confirmation]]),
							(0, vue_exports.createVNode)(_sfc_main$2, {
								class: "mt-1.5",
								message: (0, vue_exports.unref)(form).errors.password_confirmation
							}, null, 8, ["message"])
						]),
						(0, vue_exports.createVNode)("button", {
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
						})])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Set new password"), 1)], 8, ["disabled"])
					], 32)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
