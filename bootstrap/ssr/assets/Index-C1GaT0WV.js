import { a as usePage, i as useForm, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Admin/User/Roles/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		user: {
			type: Object,
			required: true
		},
		roles: {
			type: Array,
			required: true
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const form = useForm({ role_ids: props.user.roles.map((r) => r.id) });
		function toggle(id) {
			const idx = form.role_ids.indexOf(id);
			if (idx === -1) form.role_ids.push(id);
			else form.role_ids.splice(idx, 1);
		}
		function has(id) {
			return form.role_ids.includes(id);
		}
		function submit() {
			form.put(`/admin/users/${props.user.id}/roles`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: `Roles — ${__props.user.name}` }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Manage Roles</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}> User: <span class="font-medium text-warm-700"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.user.name)}</span></p></div></div><button${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg>`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes")}</button></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
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
					}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Manage Roles"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, [(0, vue_exports.createTextVNode)(" User: "), (0, vue_exports.createVNode)("span", { class: "font-medium text-warm-700" }, (0, vue_exports.toDisplayString)(__props.user.name), 1)])])]), (0, vue_exports.createVNode)("button", {
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
					})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes"), 1)], 8, ["disabled"])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						_push(`<div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 bg-warm-50"${_scopeId}><p class="text-xs text-warm-500"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).role_ids.length)} role${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).role_ids.length !== 1 ? "s" : "")} assigned </p></div><ul class="divide-y divide-warm-100"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.roles, (role) => {
							_push(`<li class="flex items-center gap-4 px-6 py-4 hover:bg-warm-50 transition-colors cursor-pointer"${_scopeId}><div class="${(0, server_renderer_exports.ssrRenderClass)([has(role.id) ? "bg-brand-600 border-brand-600" : "bg-white border-warm-300", "w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors"])}"${_scopeId}>`);
							if (has(role.id)) _push(`<svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"${_scopeId}></path></svg>`);
							else _push(`<!---->`);
							_push(`</div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(role.name)}</p><p class="text-xs text-warm-400 font-mono"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(role.slug)}</p></div>`);
							if (has(role.id)) _push(`<span class="text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700"${_scopeId}> Assigned </span>`);
							else _push(`<!---->`);
							_push(`</li>`);
						});
						_push(`<!--]--></ul>`);
						if (__props.roles.length === 0) {
							_push(`<div class="px-6 py-10 text-center text-sm text-warm-400"${_scopeId}> No roles exist yet. `);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								href: "/admin/roles/create",
								class: "text-brand-600 hover:text-brand-800 font-medium ml-1"
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Create one →`);
									else return [(0, vue_exports.createTextVNode)("Create one →")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div><div class="sticky bottom-6 mt-6 flex justify-end"${_scopeId}><button${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="inline-flex items-center gap-2 px-7 py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes")}</button></div>`);
					} else return [
						(0, vue_exports.unref)(page).props.flash.success ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
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
						})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).props.flash.success), 1)])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [
							(0, vue_exports.createVNode)("div", { class: "px-6 py-4 border-b border-warm-100 bg-warm-50" }, [(0, vue_exports.createVNode)("p", { class: "text-xs text-warm-500" }, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).role_ids.length) + " role" + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).role_ids.length !== 1 ? "s" : "") + " assigned ", 1)]),
							(0, vue_exports.createVNode)("ul", { class: "divide-y divide-warm-100" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.roles, (role) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("li", {
									key: role.id,
									class: "flex items-center gap-4 px-6 py-4 hover:bg-warm-50 transition-colors cursor-pointer",
									onClick: ($event) => toggle(role.id)
								}, [
									(0, vue_exports.createVNode)("div", { class: ["w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors", has(role.id) ? "bg-brand-600 border-brand-600" : "bg-white border-warm-300"] }, [has(role.id) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
										key: 0,
										class: "w-3 h-3 text-white",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor"
									}, [(0, vue_exports.createVNode)("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										"stroke-width": "3",
										d: "M5 13l4 4L19 7"
									})])) : (0, vue_exports.createCommentVNode)("", true)], 2),
									(0, vue_exports.createVNode)("div", { class: "flex-1 min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-900" }, (0, vue_exports.toDisplayString)(role.name), 1), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400 font-mono" }, (0, vue_exports.toDisplayString)(role.slug), 1)]),
									has(role.id) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
										key: 0,
										class: "text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700"
									}, " Assigned ")) : (0, vue_exports.createCommentVNode)("", true)
								], 8, ["onClick"]);
							}), 128))]),
							__props.roles.length === 0 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								class: "px-6 py-10 text-center text-sm text-warm-400"
							}, [(0, vue_exports.createTextVNode)(" No roles exist yet. "), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
								href: "/admin/roles/create",
								class: "text-brand-600 hover:text-brand-800 font-medium ml-1"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)("Create one →")]),
								_: 1
							})])) : (0, vue_exports.createCommentVNode)("", true)
						]),
						(0, vue_exports.createVNode)("div", { class: "sticky bottom-6 mt-6 flex justify-end" }, [(0, vue_exports.createVNode)("button", {
							onClick: submit,
							disabled: (0, vue_exports.unref)(form).processing,
							class: "inline-flex items-center gap-2 px-7 py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
						})])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save changes"), 1)], 8, ["disabled"])])
					];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Roles/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
