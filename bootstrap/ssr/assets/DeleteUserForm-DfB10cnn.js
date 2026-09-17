import { i as useForm, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$4 } from "./InputError-B4JFFWr9.js";
import { n as _sfc_main$5, t as _sfc_main$6 } from "./TextInput-DhlYQZsY.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
//#region resources/js/Components/DangerButton.vue
var _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800" }, _attrs))}>`);
	(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var DangerButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Components/Modal.vue
var _sfc_main$2 = {
	__name: "Modal",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: "2xl"
		},
		closeable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dialog = (0, vue_exports.ref)();
		const showSlot = (0, vue_exports.ref)(props.show);
		(0, vue_exports.watch)(() => props.show, () => {
			if (props.show) {
				document.body.style.overflow = "hidden";
				showSlot.value = true;
				dialog.value?.showModal();
			} else {
				document.body.style.overflow = "";
				setTimeout(() => {
					dialog.value?.close();
					showSlot.value = false;
				}, 200);
			}
		});
		const close = () => {
			if (props.closeable) emit("close");
		};
		const closeOnEscape = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				if (props.show) close();
			}
		};
		(0, vue_exports.onMounted)(() => document.addEventListener("keydown", closeOnEscape));
		(0, vue_exports.onUnmounted)(() => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = "";
		});
		const maxWidthClass = (0, vue_exports.computed)(() => {
			return {
				sm: "sm:max-w-sm",
				md: "sm:max-w-md",
				lg: "sm:max-w-lg",
				xl: "sm:max-w-xl",
				"2xl": "sm:max-w-2xl"
			}[props.maxWidth];
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<dialog${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
				ref_key: "dialog",
				ref: dialog
			}, _attrs))}><div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div class="fixed inset-0 transform transition-all" style="${(0, server_renderer_exports.ssrRenderStyle)(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div></div><div class="${(0, server_renderer_exports.ssrRenderClass)([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800"])}" style="${(0, server_renderer_exports.ssrRenderStyle)(__props.show ? null : { display: "none" })}">`);
			if (showSlot.value) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			else _push(`<!---->`);
			_push(`</div></div></dialog>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/SecondaryButton.vue
var _sfc_main$1 = {
	__name: "SecondaryButton",
	__ssrInlineRender: true,
	props: { type: {
		type: String,
		default: "button"
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				type: __props.type,
				class: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
			}, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/DeleteUserForm.vue
var _sfc_main = {
	__name: "DeleteUserForm",
	__ssrInlineRender: true,
	setup(__props) {
		const confirmingUserDeletion = (0, vue_exports.ref)(false);
		const passwordInput = (0, vue_exports.ref)(null);
		const form = useForm({ password: "" });
		const confirmUserDeletion = () => {
			confirmingUserDeletion.value = true;
			(0, vue_exports.nextTick)(() => passwordInput.value.focus());
		};
		const deleteUser = () => {
			form.delete(route("profile.destroy"), {
				preserveScroll: true,
				onSuccess: () => closeModal(),
				onError: () => passwordInput.value.focus(),
				onFinish: () => form.reset()
			});
		};
		const closeModal = () => {
			confirmingUserDeletion.value = false;
			form.clearErrors();
			form.reset();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Delete Account </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(DangerButton_default, { onClick: confirmUserDeletion }, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Delete Account`);
					else return [(0, vue_exports.createTextVNode)("Delete Account")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				show: confirmingUserDeletion.value,
				onClose: closeModal
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$5, {
							for: "password",
							value: "Password",
							class: "sr-only"
						}, null, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$6, {
							id: "password",
							ref_key: "passwordInput",
							ref: passwordInput,
							modelValue: (0, vue_exports.unref)(form).password,
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
							type: "password",
							class: "mt-1 block w-3/4",
							placeholder: "Password",
							onKeyup: deleteUser
						}, null, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, {
							message: (0, vue_exports.unref)(form).errors.password,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { onClick: closeModal }, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [(0, vue_exports.createTextVNode)(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(DangerButton_default, {
							class: ["ms-3", { "opacity-25": (0, vue_exports.unref)(form).processing }],
							disabled: (0, vue_exports.unref)(form).processing,
							onClick: deleteUser
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete Account `);
								else return [(0, vue_exports.createTextVNode)(" Delete Account ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "p-6" }, [
						(0, vue_exports.createVNode)("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, " Are you sure you want to delete your account? "),
						(0, vue_exports.createVNode)("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
						(0, vue_exports.createVNode)("div", { class: "mt-6" }, [
							(0, vue_exports.createVNode)(_sfc_main$5, {
								for: "password",
								value: "Password",
								class: "sr-only"
							}),
							(0, vue_exports.createVNode)(_sfc_main$6, {
								id: "password",
								ref_key: "passwordInput",
								ref: passwordInput,
								modelValue: (0, vue_exports.unref)(form).password,
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
								type: "password",
								class: "mt-1 block w-3/4",
								placeholder: "Password",
								onKeyup: (0, vue_exports.withKeys)(deleteUser, ["enter"])
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							(0, vue_exports.createVNode)(_sfc_main$4, {
								message: (0, vue_exports.unref)(form).errors.password,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						(0, vue_exports.createVNode)("div", { class: "mt-6 flex justify-end" }, [(0, vue_exports.createVNode)(_sfc_main$1, { onClick: closeModal }, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Cancel ")]),
							_: 1
						}), (0, vue_exports.createVNode)(DangerButton_default, {
							class: ["ms-3", { "opacity-25": (0, vue_exports.unref)(form).processing }],
							disabled: (0, vue_exports.unref)(form).processing,
							onClick: deleteUser
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Delete Account ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
