import { i as useForm, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Admin/User/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: { user: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const form = useForm({
			name: props.user.name,
			email: props.user.email
		});
		function submit() {
			form.patch(`/admin/users/${props.user.id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: `Edit — ${__props.user.name}` }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/admin/users",
							class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg>`);
								else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M15 19l-7-7 7-7"
								})]))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Edit User</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.user.email)}</p></div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: "/admin/users",
						class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
					}, {
						default: (0, vue_exports.withCtx)(() => [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: "w-4 h-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M15 19l-7-7 7-7"
						})]))]),
						_: 1
					}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Edit User"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, (0, vue_exports.toDisplayString)(__props.user.email), 1)])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-lg"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-7 shadow-sm"${_scopeId}><form class="space-y-5"${_scopeId}><div${_scopeId}><label for="name" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Name</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).name)} id="name" type="text" required class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.name) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.name)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Email</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).email)} id="email" type="email" required class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.email) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.email)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex items-center gap-3 pt-2"${_scopeId}><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes")}</button>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/admin/users",
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [(0, vue_exports.createTextVNode)(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "max-w-lg" }, [(0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl p-7 shadow-sm" }, [(0, vue_exports.createVNode)("form", {
						onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
						class: "space-y-5"
					}, [
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", {
								for: "name",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Name"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).name = $event,
								id: "name",
								type: "text",
								required: "",
								class: "w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).name]]),
							(0, vue_exports.unref)(form).errors.name ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.name), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]),
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", {
								for: "email",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Email"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).email = $event,
								id: "email",
								type: "email",
								required: "",
								class: "w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).email]]),
							(0, vue_exports.unref)(form).errors.email ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.email), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]),
						(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 pt-2" }, [(0, vue_exports.createVNode)("button", {
							type: "submit",
							disabled: (0, vue_exports.unref)(form).processing,
							class: "px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
						}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes"), 9, ["disabled"]), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
							href: "/admin/users",
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Cancel ")]),
							_: 1
						})])
					], 32)])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
