import { n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/Meetings/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		meetings: {
			type: Object,
			required: true
		},
		activities: {
			type: Array,
			required: true
		},
		filters: {
			type: Object,
			default: () => ({})
		}
	},
	setup(__props) {
		const props = __props;
		const search = (0, vue_exports.ref)(props.filters.search ?? "");
		const activityId = (0, vue_exports.ref)(props.filters.activity_id ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.meetings.index"), {
					search: search.value || void 0,
					activity_id: activityId.value || void 0
				}, {
					preserveState: true,
					replace: true
				});
			}, 300);
		}
		(0, vue_exports.watch)([search, activityId], applyFilters);
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		const recurrenceBadge = {
			weekly: "bg-blue-100 text-blue-700",
			fortnightly: "bg-purple-100 text-purple-700",
			monthly: "bg-amber-100 text-amber-700"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Meetings" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Meetings</h1>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("internal.meetings.create"),
							class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` New Meeting `);
								else return [(0, vue_exports.createTextVNode)(" New Meeting ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Meetings"), (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: _ctx.route("internal.meetings.create"),
						class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" New Meeting ")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", search.value)} type="text" placeholder="Search meetings…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(activityId.value) ? (0, server_renderer_exports.ssrLooseContain)(activityId.value, "") : (0, server_renderer_exports.ssrLooseEqual)(activityId.value, "")) ? " selected" : ""}${_scopeId}>All activities</option><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.activities, (a) => {
							_push(`<option${(0, server_renderer_exports.ssrRenderAttr)("value", a.id)}${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(activityId.value) ? (0, server_renderer_exports.ssrLooseContain)(activityId.value, a.id) : (0, server_renderer_exports.ssrLooseEqual)(activityId.value, a.id)) ? " selected" : ""}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(a.title)}</option>`);
						});
						_push(`<!--]--></select></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Title</th><th class="px-4 py-3 font-medium"${_scopeId}>Activity</th><th class="px-4 py-3 font-medium"${_scopeId}>Starts</th><th class="px-4 py-3 font-medium"${_scopeId}>Location</th><th class="px-4 py-3 font-medium"${_scopeId}>Recurrence</th><th class="px-4 py-3 font-medium"${_scopeId}></th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.meetings.data, (m) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 font-medium text-warm-900"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(m.title)}</td><td class="px-4 py-3 text-gray-500"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(m.activity?.title ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(formatDate(m.starts_at))}</td><td class="px-4 py-3 text-gray-500"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(m.location ?? "—")}</td><td class="px-4 py-3"${_scopeId}>`);
							if (m.recurrence) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)([recurrenceBadge[m.recurrence] ?? "bg-gray-100 text-gray-600", "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(m.recurrence)}</span>`);
							else _push(`<span class="text-gray-400"${_scopeId}>—</span>`);
							_push(`</td><td class="px-4 py-3 text-right"${_scopeId}>`);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								href: _ctx.route("internal.meetings.edit", m.id),
								class: "text-brand-600 hover:underline text-xs"
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Edit`);
									else return [(0, vue_exports.createTextVNode)("Edit")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.meetings.data.length) _push(`<tr${_scopeId}><td colspan="6" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No meetings yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.meetings.links && __props.meetings.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.meetings.links, (link) => {
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
						(0, vue_exports.createVNode)("div", { class: "flex flex-wrap gap-3 mb-4" }, [(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Search meetings…",
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
						}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, search.value]]), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("select", {
							"onUpdate:modelValue": ($event) => activityId.value = $event,
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
						}, [(0, vue_exports.createVNode)("option", { value: "" }, "All activities"), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.activities, (a) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("option", {
								key: a.id,
								value: a.id
							}, (0, vue_exports.toDisplayString)(a.title), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vue_exports.vModelSelect, activityId.value]])]),
						(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [(0, vue_exports.createVNode)("table", { class: "min-w-full text-sm" }, [(0, vue_exports.createVNode)("thead", { class: "bg-gray-50 text-left text-gray-500" }, [(0, vue_exports.createVNode)("tr", null, [
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Title"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Activity"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Starts"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Location"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Recurrence"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" })
						])]), (0, vue_exports.createVNode)("tbody", { class: "divide-y divide-gray-100" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.meetings.data, (m) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", {
								key: m.id,
								class: "hover:bg-gray-50"
							}, [
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 font-medium text-warm-900" }, (0, vue_exports.toDisplayString)(m.title), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500" }, (0, vue_exports.toDisplayString)(m.activity?.title ?? "—"), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(formatDate(m.starts_at)), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500" }, (0, vue_exports.toDisplayString)(m.location ?? "—"), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3" }, [m.recurrence ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 0,
									class: ["px-2 py-0.5 rounded-full text-xs font-medium", recurrenceBadge[m.recurrence] ?? "bg-gray-100 text-gray-600"]
								}, (0, vue_exports.toDisplayString)(m.recurrence), 3)) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 1,
									class: "text-gray-400"
								}, "—"))]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-right" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
									href: _ctx.route("internal.meetings.edit", m.id),
									class: "text-brand-600 hover:underline text-xs"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)("Edit")]),
									_: 1
								}, 8, ["href"])])
							]);
						}), 128)), !__props.meetings.data.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", { key: 0 }, [(0, vue_exports.createVNode)("td", {
							colspan: "6",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No meetings yet.")])) : (0, vue_exports.createCommentVNode)("", true)])])]),
						__props.meetings.links && __props.meetings.links.length > 3 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.meetings.links, (link) => {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Meetings/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
