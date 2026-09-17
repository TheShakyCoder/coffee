import { i as useForm, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$2 } from "./GuestLayout-ByleSOO0.js";
import { t as _sfc_main$3 } from "./InputError-B4JFFWr9.js";
//#region resources/js/Components/Checkbox.vue
var _sfc_main$1 = {
	__name: "Checkbox",
	__ssrInlineRender: true,
	props: {
		checked: {
			type: [Array, Boolean],
			required: true
		},
		value: { default: null }
	},
	emits: ["update:checked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const proxyChecked = (0, vue_exports.computed)({
			get() {
				return props.checked;
			},
			set(val) {
				emit("update:checked", val);
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<input${(0, server_renderer_exports.ssrRenderAttrs)((_temp0 = (0, vue_exports.mergeProps)({
				type: "checkbox",
				value: __props.value,
				checked: Array.isArray(proxyChecked.value) ? (0, server_renderer_exports.ssrLooseContain)(proxyChecked.value, __props.value) : proxyChecked.value,
				class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
			}, _attrs), (0, vue_exports.mergeProps)(_temp0, (0, server_renderer_exports.ssrGetDynamicModelProps)(_temp0, proxyChecked.value))))}>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/Login.vue
var _sfc_main = {
	__name: "Login",
	__ssrInlineRender: true,
	props: {
		canResetPassword: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		const submit = () => {
			form.post(route("login"), { onFinish: () => form.reset("password") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, (0, vue_exports.mergeProps)({
				title: "Welcome back",
				subtitle: "Sign in to the Acme Coffee Roasters portal"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Login" }, null, _parent, _scopeId));
						if (__props.status) _push(`<div class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(__props.status)}</div>`);
						else _push(`<!---->`);
						_push(`<form class="space-y-5"${_scopeId}><div${_scopeId}><label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}> Email address </label><input id="email"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).email)} type="email" required autofocus autocomplete="username" placeholder="you@example.com" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><div class="flex items-center justify-between mb-1.5"${_scopeId}><label for="password" class="block text-xs font-semibold text-warm-700"${_scopeId}> Password </label>`);
						if (__props.canResetPassword) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("password.request"),
							class: "text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Forgot password? `);
								else return [(0, vue_exports.createTextVNode)(" Forgot password? ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div><input id="password"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).password)} type="password" required autocomplete="current-password" placeholder="••••••••" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.password ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center gap-2.5"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
							id: "remember",
							name: "remember",
							checked: (0, vue_exports.unref)(form).remember,
							"onUpdate:checked": ($event) => (0, vue_exports.unref)(form).remember = $event,
							class: "rounded text-brand-600 border-warm-300 focus:ring-brand-400"
						}, null, _parent, _scopeId));
						_push(`<label for="remember" class="text-sm text-warm-600 cursor-pointer select-none"${_scopeId}> Keep me signed in </label></div><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Signing in…" : "Sign in")}</button></form><div class="my-6 flex items-center gap-3"${_scopeId}><div class="flex-1 h-px bg-warm-200"${_scopeId}></div><span class="text-xs text-warm-400"${_scopeId}>or</span><div class="flex-1 h-px bg-warm-200"${_scopeId}></div></div><p class="text-center text-sm text-warm-500"${_scopeId}> Not yet registered? `);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/register",
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Register here `);
								else return [(0, vue_exports.createTextVNode)(" Register here ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p>`);
					} else return [
						(0, vue_exports.createVNode)((0, vue_exports.unref)(head_default), { title: "Login" }),
						__props.status ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
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
						})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)(__props.status), 1)])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("form", {
							onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
							class: "space-y-5"
						}, [
							(0, vue_exports.createVNode)("div", null, [
								(0, vue_exports.createVNode)("label", {
									for: "email",
									class: "block text-xs font-semibold text-warm-700 mb-1.5"
								}, " Email address "),
								(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
									id: "email",
									"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).email = $event,
									type: "email",
									required: "",
									autofocus: "",
									autocomplete: "username",
									placeholder: "you@example.com",
									class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
								}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).email]]),
								(0, vue_exports.createVNode)(_sfc_main$3, {
									class: "mt-1.5",
									message: (0, vue_exports.unref)(form).errors.email
								}, null, 8, ["message"])
							]),
							(0, vue_exports.createVNode)("div", null, [
								(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between mb-1.5" }, [(0, vue_exports.createVNode)("label", {
									for: "password",
									class: "block text-xs font-semibold text-warm-700"
								}, " Password "), __props.canResetPassword ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(link_default), {
									key: 0,
									href: _ctx.route("password.request"),
									class: "text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Forgot password? ")]),
									_: 1
								}, 8, ["href"])) : (0, vue_exports.createCommentVNode)("", true)]),
								(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
									id: "password",
									"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).password = $event,
									type: "password",
									required: "",
									autocomplete: "current-password",
									placeholder: "••••••••",
									class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.password ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
								}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).password]]),
								(0, vue_exports.createVNode)(_sfc_main$3, {
									class: "mt-1.5",
									message: (0, vue_exports.unref)(form).errors.password
								}, null, 8, ["message"])
							]),
							(0, vue_exports.createVNode)("div", { class: "flex items-center gap-2.5" }, [(0, vue_exports.createVNode)(_sfc_main$1, {
								id: "remember",
								name: "remember",
								checked: (0, vue_exports.unref)(form).remember,
								"onUpdate:checked": ($event) => (0, vue_exports.unref)(form).remember = $event,
								class: "rounded text-brand-600 border-warm-300 focus:ring-brand-400"
							}, null, 8, ["checked", "onUpdate:checked"]), (0, vue_exports.createVNode)("label", {
								for: "remember",
								class: "text-sm text-warm-600 cursor-pointer select-none"
							}, " Keep me signed in ")]),
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
							})])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Signing in…" : "Sign in"), 1)], 8, ["disabled"])
						], 32),
						(0, vue_exports.createVNode)("div", { class: "my-6 flex items-center gap-3" }, [
							(0, vue_exports.createVNode)("div", { class: "flex-1 h-px bg-warm-200" }),
							(0, vue_exports.createVNode)("span", { class: "text-xs text-warm-400" }, "or"),
							(0, vue_exports.createVNode)("div", { class: "flex-1 h-px bg-warm-200" })
						]),
						(0, vue_exports.createVNode)("p", { class: "text-center text-sm text-warm-500" }, [(0, vue_exports.createTextVNode)(" Not yet registered? "), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
							href: "/register",
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Register here ")]),
							_: 1
						})])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
