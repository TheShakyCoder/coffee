import { n as head_default, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
import _sfc_main$2 from "./DeleteUserForm-DfB10cnn.js";
import _sfc_main$3 from "./UpdatePasswordForm-sR5Mm3zl.js";
import _sfc_main$4 from "./UpdateProfileInformationForm-LShbPCfJ.js";
//#region resources/js/Pages/Profile/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Profile" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Profile </h2>`);
					else return [(0, vue_exports.createVNode)("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Profile ")];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "py-12" }, [(0, vue_exports.createVNode)("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
						(0, vue_exports.createVNode)("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800" }, [(0, vue_exports.createVNode)(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, 8, ["must-verify-email", "status"])]),
						(0, vue_exports.createVNode)("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800" }, [(0, vue_exports.createVNode)(_sfc_main$3, { class: "max-w-xl" })]),
						(0, vue_exports.createVNode)("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800" }, [(0, vue_exports.createVNode)(_sfc_main$2, { class: "max-w-xl" })])
					])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
