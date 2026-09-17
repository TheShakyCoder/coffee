import { a as usePage, i as useForm, n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
import _sfc_main$2 from "./Groups-B_9H6G9X.js";
//#region resources/js/Pages/Admin/Role/Right/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		role: {
			type: Object,
			required: true
		},
		internal: {
			type: Object,
			required: true
		},
		admin: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const form = useForm({ controller_method_names: {} });
		(0, vue_exports.onMounted)(() => {
			for (const r of props.role.rights) form.controller_method_names[r.controller_method_name] = true;
		});
		const methodMeta = {
			index: {
				label: "View list",
				colour: "bg-sky-100 text-sky-700 border-sky-200"
			},
			show: {
				label: "View detail",
				colour: "bg-purple-100 text-purple-700 border-purple-200"
			},
			store: {
				label: "Create",
				colour: "bg-brand-100 text-brand-700 border-brand-200"
			},
			update: {
				label: "Edit",
				colour: "bg-amber-100 text-amber-700 border-amber-200"
			},
			destroy: {
				label: "Delete",
				colour: "bg-rose-100 text-rose-700 border-rose-200"
			}
		};
		const savedCount = (0, vue_exports.computed)(() => Object.values(form.controller_method_names).filter(Boolean).length);
		function submit() {
			router.put("/admin/roles/" + props.role.id + "/rights", form);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: `Rights — ${__props.role.name}` }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/admin/roles/" + __props.role.id,
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Manage Rights</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}> Role: <span class="font-medium text-warm-700"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.name)}</span></p></div></div><div class="flex items-center gap-3"${_scopeId}><span class="text-xs text-warm-400"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(savedCount.value)} permission${(0, server_renderer_exports.ssrInterpolate)(savedCount.value !== 1 ? "s" : "")} enabled </span><button${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg>`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes")}</button></div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: "/admin/roles/" + __props.role.id,
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
					}, 8, ["href"]), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Manage Rights"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, [(0, vue_exports.createTextVNode)(" Role: "), (0, vue_exports.createVNode)("span", { class: "font-medium text-warm-700" }, (0, vue_exports.toDisplayString)(__props.role.name), 1)])])]), (0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)("span", { class: "text-xs text-warm-400" }, (0, vue_exports.toDisplayString)(savedCount.value) + " permission" + (0, vue_exports.toDisplayString)(savedCount.value !== 1 ? "s" : "") + " enabled ", 1), (0, vue_exports.createVNode)("button", {
						onClick: submit,
						disabled: (0, vue_exports.unref)(form).processing,
						class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
					})])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						key: 1,
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M5 13l4 4L19 7"
					})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes"), 1)], 8, ["disabled"])])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						_push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							title: "Internal Routes",
							routes: __props.internal,
							form: (0, vue_exports.unref)(form),
							methodMeta,
							submit
						}, null, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							title: "Admin Routes",
							routes: __props.admin,
							form: (0, vue_exports.unref)(form),
							methodMeta,
							submit
						}, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [(0, vue_exports.unref)(page).props.flash.success ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 0,
						class: "mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"
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
					})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).props.flash.success), 1)])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createVNode)("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [(0, vue_exports.createVNode)(_sfc_main$2, {
						title: "Internal Routes",
						routes: __props.internal,
						form: (0, vue_exports.unref)(form),
						methodMeta,
						submit
					}, null, 8, ["routes", "form"]), (0, vue_exports.createVNode)(_sfc_main$2, {
						title: "Admin Routes",
						routes: __props.admin,
						form: (0, vue_exports.unref)(form),
						methodMeta,
						submit
					}, null, 8, ["routes", "form"])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Right/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
