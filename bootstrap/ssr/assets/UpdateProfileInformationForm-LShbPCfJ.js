import { a as usePage, i as useForm, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./InputError-B4JFFWr9.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./TextInput-DhlYQZsY.js";
import { t as PrimaryButton_default } from "./PrimaryButton-BFO6s0rO.js";
//#region resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue
var _sfc_main = {
	__name: "UpdateProfileInformationForm",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const user = usePage().props.auth.user;
		const form = useForm({
			name: user.name,
			email: user.email
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Profile Information </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				for: "name",
				value: "Name"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
				id: "name",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: (0, vue_exports.unref)(form).name,
				"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).name = $event,
				required: "",
				autofocus: "",
				autocomplete: "name"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				class: "mt-2",
				message: (0, vue_exports.unref)(form).errors.name
			}, null, _parent));
			_push(`</div><div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				for: "email",
				value: "Email"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
				id: "email",
				type: "email",
				class: "mt-1 block w-full",
				modelValue: (0, vue_exports.unref)(form).email,
				"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).email = $event,
				required: "",
				autocomplete: "username"
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				class: "mt-2",
				message: (0, vue_exports.unref)(form).errors.email
			}, null, _parent));
			_push(`</div>`);
			if (__props.mustVerifyEmail && (0, vue_exports.unref)(user).email_verified_at === null) {
				_push(`<div><p class="mt-2 text-sm text-gray-800 dark:text-gray-200"> Your email address is unverified. `);
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("verification.send"),
					method: "post",
					as: "button",
					class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Click here to re-send the verification email. `);
						else return [(0, vue_exports.createTextVNode)(" Click here to re-send the verification email. ")];
					}),
					_: 1
				}, _parent));
				_push(`</p><div class="mt-2 text-sm font-medium text-green-600 dark:text-green-400" style="${(0, server_renderer_exports.ssrRenderStyle)(__props.status === "verification-link-sent" ? null : { display: "none" })}"> A new verification link has been sent to your email address. </div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="flex items-center gap-4">`);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
