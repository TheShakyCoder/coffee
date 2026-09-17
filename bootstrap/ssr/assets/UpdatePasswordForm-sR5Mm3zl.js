import { i as useForm, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./InputError-B4JFFWr9.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./TextInput-DhlYQZsY.js";
import { t as PrimaryButton_default } from "./PrimaryButton-BFO6s0rO.js";
//#region resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue
var _sfc_main = {
	__name: "UpdatePasswordForm",
	__ssrInlineRender: true,
	setup(__props) {
		const passwordInput = (0, vue_exports.ref)(null);
		const currentPasswordInput = (0, vue_exports.ref)(null);
		const form = useForm({
			current_password: "",
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Update Password </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				for: "current_password",
				value: "Current Password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
				id: "current_password",
				ref_key: "currentPasswordInput",
				ref: currentPasswordInput,
				modelValue: (0, vue_exports.unref)(form).current_password,
				"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).current_password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "current-password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				message: (0, vue_exports.unref)(form).errors.current_password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				for: "password",
				value: "New Password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
				id: "password",
				ref_key: "passwordInput",
				ref: passwordInput,
				modelValue: (0, vue_exports.unref)(form).password,
				"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				message: (0, vue_exports.unref)(form).errors.password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				for: "password_confirmation",
				value: "Confirm Password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
				id: "password_confirmation",
				modelValue: (0, vue_exports.unref)(form).password_confirmation,
				"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password_confirmation = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				message: (0, vue_exports.unref)(form).errors.password_confirmation,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div class="flex items-center gap-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(PrimaryButton_default, { disabled: (0, vue_exports.unref)(form).processing }, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [(0, vue_exports.createTextVNode)("Save")];
				}),
				_: 1
			}, _parent));
			if ((0, vue_exports.unref)(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600 dark:text-gray-400"> Saved. </p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
