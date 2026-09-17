import { n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Admin/Role/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { role: Object },
	setup(__props) {
		const methodMeta = {
			index: {
				label: "View list",
				colour: "bg-sky-100 text-sky-700"
			},
			show: {
				label: "View detail",
				colour: "bg-purple-100 text-purple-700"
			},
			store: {
				label: "Create",
				colour: "bg-brand-100 text-brand-700"
			},
			update: {
				label: "Edit",
				colour: "bg-amber-100 text-amber-700"
			},
			destroy: {
				label: "Delete",
				colour: "bg-rose-100 text-rose-700"
			}
		};
		function methodLabel(key) {
			const method = key?.split("@")[1] ?? key;
			return methodMeta[method] ?? {
				label: method,
				colour: "bg-warm-100 text-warm-700"
			};
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: `Role — ${__props.role.name}` }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/admin/roles",
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.name)}</h1><p class="text-sm text-warm-500 font-mono mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.slug)}</p></div></div>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: `/admin/roles/${__props.role.id}/rights`,
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg> Manage rights `);
								else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								})])), (0, vue_exports.createTextVNode)(" Manage rights ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: "/admin/roles",
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
					}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, (0, vue_exports.toDisplayString)(__props.role.name), 1), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 font-mono mt-0.5" }, (0, vue_exports.toDisplayString)(__props.role.slug), 1)])]), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: `/admin/roles/${__props.role.id}/rights`,
						class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
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
							d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						})])), (0, vue_exports.createTextVNode)(" Manage rights ")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-2xl space-y-6"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 bg-warm-50"${_scopeId}><h2 class="text-sm font-semibold text-warm-700"${_scopeId}>Details</h2></div><div class="divide-y divide-warm-50"${_scopeId}><div class="flex items-center gap-4 px-6 py-3.5"${_scopeId}><span class="text-xs font-semibold text-warm-400 w-20 shrink-0"${_scopeId}>Name</span><span class="text-sm text-warm-900"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.name)}</span></div><div class="flex items-center gap-4 px-6 py-3.5"${_scopeId}><span class="text-xs font-semibold text-warm-400 w-20 shrink-0"${_scopeId}>Slug</span><span class="text-sm text-warm-900 font-mono"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.slug)}</span></div></div></div><div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="flex items-center justify-between px-6 py-4 border-b border-warm-100 bg-warm-50"${_scopeId}><h2 class="text-sm font-semibold text-warm-700"${_scopeId}>Rights</h2><span class="text-xs text-warm-400"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.role.rights?.length ?? 0)} assigned</span></div>`);
						if (!__props.role.rights?.length) {
							_push(`<div class="px-6 py-8 text-center text-sm text-warm-400"${_scopeId}> No rights assigned yet. `);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								href: `/admin/roles/${__props.role.id}/rights`,
								class: "text-brand-600 hover:text-brand-800 font-medium ml-1"
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Add some →`);
									else return [(0, vue_exports.createTextVNode)("Add some →")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else {
							_push(`<div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.role.rights, (right) => {
								_push(`<div class="flex items-center gap-4 px-6 py-3.5"${_scopeId}><span class="${(0, server_renderer_exports.ssrRenderClass)([methodLabel(right.controller_method_name).colour, "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shrink-0"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(methodLabel(right.controller_method_name).label)}</span><span class="text-sm text-warm-500 font-mono truncate"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(right.controller_method_name)}</span>`);
								if (right.description) _push(`<span class="ml-auto text-xs text-warm-400 shrink-0"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(right.description)}</span>`);
								else _push(`<!---->`);
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						}
						_push(`</div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "max-w-2xl space-y-6" }, [(0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [(0, vue_exports.createVNode)("div", { class: "px-6 py-4 border-b border-warm-100 bg-warm-50" }, [(0, vue_exports.createVNode)("h2", { class: "text-sm font-semibold text-warm-700" }, "Details")]), (0, vue_exports.createVNode)("div", { class: "divide-y divide-warm-50" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-4 px-6 py-3.5" }, [(0, vue_exports.createVNode)("span", { class: "text-xs font-semibold text-warm-400 w-20 shrink-0" }, "Name"), (0, vue_exports.createVNode)("span", { class: "text-sm text-warm-900" }, (0, vue_exports.toDisplayString)(__props.role.name), 1)]), (0, vue_exports.createVNode)("div", { class: "flex items-center gap-4 px-6 py-3.5" }, [(0, vue_exports.createVNode)("span", { class: "text-xs font-semibold text-warm-400 w-20 shrink-0" }, "Slug"), (0, vue_exports.createVNode)("span", { class: "text-sm text-warm-900 font-mono" }, (0, vue_exports.toDisplayString)(__props.role.slug), 1)])])]), (0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between px-6 py-4 border-b border-warm-100 bg-warm-50" }, [(0, vue_exports.createVNode)("h2", { class: "text-sm font-semibold text-warm-700" }, "Rights"), (0, vue_exports.createVNode)("span", { class: "text-xs text-warm-400" }, (0, vue_exports.toDisplayString)(__props.role.rights?.length ?? 0) + " assigned", 1)]), !__props.role.rights?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 0,
						class: "px-6 py-8 text-center text-sm text-warm-400"
					}, [(0, vue_exports.createTextVNode)(" No rights assigned yet. "), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: `/admin/roles/${__props.role.id}/rights`,
						class: "text-brand-600 hover:text-brand-800 font-medium ml-1"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)("Add some →")]),
						_: 1
					}, 8, ["href"])])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 1,
						class: "divide-y divide-warm-50"
					}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.role.rights, (right) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: right.id,
							class: "flex items-center gap-4 px-6 py-3.5"
						}, [
							(0, vue_exports.createVNode)("span", { class: ["inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shrink-0", methodLabel(right.controller_method_name).colour] }, (0, vue_exports.toDisplayString)(methodLabel(right.controller_method_name).label), 3),
							(0, vue_exports.createVNode)("span", { class: "text-sm text-warm-500 font-mono truncate" }, (0, vue_exports.toDisplayString)(right.controller_method_name), 1),
							right.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
								key: 0,
								class: "ml-auto text-xs text-warm-400 shrink-0"
							}, (0, vue_exports.toDisplayString)(right.description), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]);
					}), 128))]))])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
