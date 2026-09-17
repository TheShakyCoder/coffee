import { i as useForm, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./GuestLayout-ByleSOO0.js";
import { t as _sfc_main$2 } from "./InputError-B4JFFWr9.js";
//#region resources/js/Pages/Auth/Register.vue
var _sfc_main = {
	__name: "Register",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			name: "",
			email: "",
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("register"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
				title: "Create an account",
				subtitle: "Register for access to the Acme Coffee Roasters portal"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Register" }, null, _parent, _scopeId));
						_push(`<form class="space-y-5"${_scopeId}><div${_scopeId}><label for="name" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}> Full name </label><input id="name"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).name)} type="text" required autofocus autocomplete="name" placeholder="Jane Smith" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.name ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.name
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}> Email address </label><input id="email"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).email)} type="email" required autocomplete="username" placeholder="you@example.com" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="grid sm:grid-cols-2 gap-5"${_scopeId}><div${_scopeId}><label for="password" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}> Password </label><input id="password"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).password)} type="password" required autocomplete="new-password" placeholder="••••••••" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.password ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><label for="password_confirmation" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}> Confirm password </label><input id="password_confirmation"${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).password_confirmation)} type="password" required autocomplete="new-password" placeholder="••••••••" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.password_confirmation ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							class: "mt-1.5",
							message: (0, vue_exports.unref)(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div></div><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Creating account…" : "Create account")}</button></form><div class="my-6 flex items-center gap-3"${_scopeId}><div class="flex-1 h-px bg-warm-200"${_scopeId}></div><span class="text-xs text-warm-400"${_scopeId}>already registered?</span><div class="flex-1 h-px bg-warm-200"${_scopeId}></div></div><p class="text-center text-sm text-warm-500"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("login"),
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Sign in to your account `);
								else return [(0, vue_exports.createTextVNode)(" Sign in to your account ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p>`);
					} else return [
						(0, vue_exports.createVNode)((0, vue_exports.unref)(head_default), { title: "Register" }),
						(0, vue_exports.createVNode)("form", {
							onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
							class: "space-y-5"
						}, [
							(0, vue_exports.createVNode)("div", null, [
								(0, vue_exports.createVNode)("label", {
									for: "name",
									class: "block text-xs font-semibold text-warm-700 mb-1.5"
								}, " Full name "),
								(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
									id: "name",
									"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).name = $event,
									type: "text",
									required: "",
									autofocus: "",
									autocomplete: "name",
									placeholder: "Jane Smith",
									class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.name ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
								}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).name]]),
								(0, vue_exports.createVNode)(_sfc_main$2, {
									class: "mt-1.5",
									message: (0, vue_exports.unref)(form).errors.name
								}, null, 8, ["message"])
							]),
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
									autocomplete: "username",
									placeholder: "you@example.com",
									class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", (0, vue_exports.unref)(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
								}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).email]]),
								(0, vue_exports.createVNode)(_sfc_main$2, {
									class: "mt-1.5",
									message: (0, vue_exports.unref)(form).errors.email
								}, null, 8, ["message"])
							]),
							(0, vue_exports.createVNode)("div", { class: "grid sm:grid-cols-2 gap-5" }, [(0, vue_exports.createVNode)("div", null, [
								(0, vue_exports.createVNode)("label", {
									for: "password",
									class: "block text-xs font-semibold text-warm-700 mb-1.5"
								}, " Password "),
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
							]), (0, vue_exports.createVNode)("div", null, [
								(0, vue_exports.createVNode)("label", {
									for: "password_confirmation",
									class: "block text-xs font-semibold text-warm-700 mb-1.5"
								}, " Confirm password "),
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
							])]),
							(0, vue_exports.createVNode)("button", {
								type: "submit",
								disabled: (0, vue_exports.unref)(form).processing,
								class: "w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
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
							})])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Creating account…" : "Create account"), 1)], 8, ["disabled"])
						], 32),
						(0, vue_exports.createVNode)("div", { class: "my-6 flex items-center gap-3" }, [
							(0, vue_exports.createVNode)("div", { class: "flex-1 h-px bg-warm-200" }),
							(0, vue_exports.createVNode)("span", { class: "text-xs text-warm-400" }, "already registered?"),
							(0, vue_exports.createVNode)("div", { class: "flex-1 h-px bg-warm-200" })
						]),
						(0, vue_exports.createVNode)("p", { class: "text-center text-sm text-warm-500" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("login"),
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Sign in to your account ")]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
