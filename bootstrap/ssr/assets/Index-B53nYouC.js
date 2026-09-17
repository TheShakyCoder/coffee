import { n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/Activities/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		activities: {
			type: Object,
			required: true
		},
		search: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const search = (0, vue_exports.ref)(__props.search);
		let debounce = null;
		(0, vue_exports.watch)(search, (val) => {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.activities.index"), { search: val || void 0 }, {
					preserveState: true,
					replace: true
				});
			}, 300);
		});
		const statusBadge = {
			active: "bg-green-100 text-green-700",
			inactive: "bg-gray-100 text-gray-500"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Activities" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Activities</h1>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("internal.activities.create"),
							class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` New Activity `);
								else return [(0, vue_exports.createTextVNode)(" New Activity ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Activities"), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: _ctx.route("internal.activities.create"),
						class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" New Activity ")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="mb-4"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", search.value)} type="text" placeholder="Search activities…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Title</th><th class="px-4 py-3 font-medium"${_scopeId}>Status</th><th class="px-4 py-3 font-medium"${_scopeId}>Meetings</th><th class="px-4 py-3 font-medium"${_scopeId}></th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.activities.data, (a) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 font-medium text-warm-900"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(a.title)}</td><td class="px-4 py-3"${_scopeId}><span class="${(0, server_renderer_exports.ssrRenderClass)([statusBadge[a.status], "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(a.status)}</span></td><td class="px-4 py-3 text-gray-500"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(a.meetings_count)}</td><td class="px-4 py-3 text-right space-x-2"${_scopeId}>`);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								href: _ctx.route("internal.activities.edit", a.id),
								class: "text-brand-600 hover:underline text-xs"
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Edit`);
									else return [(0, vue_exports.createTextVNode)("Edit")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								href: _ctx.route("internal.activities.show", a.id),
								class: "text-gray-500 hover:underline text-xs"
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`View`);
									else return [(0, vue_exports.createTextVNode)("View")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.activities.data.length) _push(`<tr${_scopeId}><td colspan="4" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No activities yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.activities.links && __props.activities.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.activities.links, (link) => {
								_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
									key: link.label,
									href: link.url ?? "#",
									class: ["px-3 py-1 rounded text-sm", {
										"bg-blue-600 text-white": link.active,
										"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
										"text-gray-300 cursor-default": !link.url
									}],
									"preserve-state": true
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
					} else return [
						(0, vue_exports.createVNode)("div", { class: "mb-4" }, [(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Search activities…",
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
						}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, search.value]])]),
						(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [(0, vue_exports.createVNode)("table", { class: "min-w-full text-sm" }, [(0, vue_exports.createVNode)("thead", { class: "bg-gray-50 text-left text-gray-500" }, [(0, vue_exports.createVNode)("tr", null, [
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Title"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Status"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Meetings"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" })
						])]), (0, vue_exports.createVNode)("tbody", { class: "divide-y divide-gray-100" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.activities.data, (a) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", {
								key: a.id,
								class: "hover:bg-gray-50"
							}, [
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 font-medium text-warm-900" }, (0, vue_exports.toDisplayString)(a.title), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3" }, [(0, vue_exports.createVNode)("span", { class: ["px-2 py-0.5 rounded-full text-xs font-medium", statusBadge[a.status]] }, (0, vue_exports.toDisplayString)(a.status), 3)]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500" }, (0, vue_exports.toDisplayString)(a.meetings_count), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-right space-x-2" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
									href: _ctx.route("internal.activities.edit", a.id),
									class: "text-brand-600 hover:underline text-xs"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)("Edit")]),
									_: 1
								}, 8, ["href"]), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
									href: _ctx.route("internal.activities.show", a.id),
									class: "text-gray-500 hover:underline text-xs"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)("View")]),
									_: 1
								}, 8, ["href"])])
							]);
						}), 128)), !__props.activities.data.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", { key: 0 }, [(0, vue_exports.createVNode)("td", {
							colspan: "4",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No activities yet.")])) : (0, vue_exports.createCommentVNode)("", true)])])]),
						__props.activities.links && __props.activities.links.length > 3 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.activities.links, (link) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(link_default), {
								key: link.label,
								href: link.url ?? "#",
								class: ["px-3 py-1 rounded text-sm", {
									"bg-blue-600 text-white": link.active,
									"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
									"text-gray-300 cursor-default": !link.url
								}],
								innerHTML: link.label,
								"preserve-state": true
							}, null, 8, [
								"href",
								"class",
								"innerHTML"
							]);
						}), 128))])) : (0, vue_exports.createCommentVNode)("", true)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Activities/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
