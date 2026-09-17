import { i as useForm, n as head_default, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./GuestLayout-ByleSOO0.js";
import { t as _sfc_main$2 } from "./InputError-B4JFFWr9.js";
import { n as _sfc_main$3, t as _sfc_main$4 } from "./TextInput-DhlYQZsY.js";
import { t as PrimaryButton_default } from "./PrimaryButton-BFO6s0rO.js";
//#region resources/js/Pages/Auth/ConfirmPassword.vue
var _sfc_main = {
	__name: "ConfirmPassword",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({ password: "" });
		const submit = () => {
			form.post(route("password.confirm"), { onFinish: () => form.reset() });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, _attrs, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Confirm Password" }, null, _parent, _scopeId));
						_push(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: (0, vue_exports.unref)(form).password,
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
							required: "",
							autocomplete: "current-password",
							autofocus: ""
						}, null, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-2",
							message: (0, vue_exports.unref)(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 flex justify-end"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": (0, vue_exports.unref)(form).processing }],
							disabled: (0, vue_exports.unref)(form).processing
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Confirm `);
								else return [(0, vue_exports.createTextVNode)(" Confirm ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						(0, vue_exports.createVNode)((0, vue_exports.unref)(head_default), { title: "Confirm Password" }),
						(0, vue_exports.createVNode)("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " This is a secure area of the application. Please confirm your password before continuing. "),
						(0, vue_exports.createVNode)("form", { onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]) }, [(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)(_sfc_main$3, {
								for: "password",
								value: "Password"
							}),
							(0, vue_exports.createVNode)(_sfc_main$4, {
								id: "password",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: (0, vue_exports.unref)(form).password,
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
								required: "",
								autocomplete: "current-password",
								autofocus: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							(0, vue_exports.createVNode)(_sfc_main$2, {
								class: "mt-2",
								message: (0, vue_exports.unref)(form).errors.password
							}, null, 8, ["message"])
						]), (0, vue_exports.createVNode)("div", { class: "mt-4 flex justify-end" }, [(0, vue_exports.createVNode)(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": (0, vue_exports.unref)(form).processing }],
							disabled: (0, vue_exports.unref)(form).processing
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Confirm ")]),
							_: 1
						}, 8, ["class", "disabled"])])], 32)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
