import { n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/FieldChanges/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		changes: {
			type: Object,
			required: true
		},
		modelTypes: {
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
		const model = (0, vue_exports.ref)(props.filters.model ?? "");
		const event = (0, vue_exports.ref)(props.filters.event ?? "");
		const dateFrom = (0, vue_exports.ref)(props.filters.date_from ?? "");
		const dateTo = (0, vue_exports.ref)(props.filters.date_to ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.field-changes.index"), {
					search: search.value || void 0,
					model: model.value || void 0,
					event: event.value || void 0,
					date_from: dateFrom.value || void 0,
					date_to: dateTo.value || void 0
				}, {
					preserveState: true,
					replace: true
				});
			}, 300);
		}
		(0, vue_exports.watch)([
			search,
			model,
			event,
			dateFrom,
			dateTo
		], applyFilters);
		function modelName(fqcn) {
			if (!fqcn) return "—";
			return fqcn.split("\\").pop();
		}
		function truncate(str, len = 60) {
			if (str === null || str === void 0) return "—";
			str = String(str);
			return str.length > len ? str.slice(0, len) + "…" : str;
		}
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		const eventColors = {
			created: "bg-green-100 text-green-700",
			updated: "bg-blue-100 text-blue-700",
			deleted: "bg-red-100 text-red-700"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Field Changes" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Field Changes</h1><div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", search.value)} type="text" placeholder="Search field, value, or ID…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(model.value) ? (0, server_renderer_exports.ssrLooseContain)(model.value, "") : (0, server_renderer_exports.ssrLooseEqual)(model.value, "")) ? " selected" : ""}${_scopeId}>All models</option><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.modelTypes, (t) => {
							_push(`<option${(0, server_renderer_exports.ssrRenderAttr)("value", t.value)}${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(model.value) ? (0, server_renderer_exports.ssrLooseContain)(model.value, t.value) : (0, server_renderer_exports.ssrLooseEqual)(model.value, t.value)) ? " selected" : ""}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(t.label)}</option>`);
						});
						_push(`<!--]--></select><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(event.value) ? (0, server_renderer_exports.ssrLooseContain)(event.value, "") : (0, server_renderer_exports.ssrLooseEqual)(event.value, "")) ? " selected" : ""}${_scopeId}>All events</option><option value="created"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(event.value) ? (0, server_renderer_exports.ssrLooseContain)(event.value, "created") : (0, server_renderer_exports.ssrLooseEqual)(event.value, "created")) ? " selected" : ""}${_scopeId}>Created</option><option value="updated"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(event.value) ? (0, server_renderer_exports.ssrLooseContain)(event.value, "updated") : (0, server_renderer_exports.ssrLooseEqual)(event.value, "updated")) ? " selected" : ""}${_scopeId}>Updated</option><option value="deleted"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray(event.value) ? (0, server_renderer_exports.ssrLooseContain)(event.value, "deleted") : (0, server_renderer_exports.ssrLooseEqual)(event.value, "deleted")) ? " selected" : ""}${_scopeId}>Deleted</option></select><input${(0, server_renderer_exports.ssrRenderAttr)("value", dateFrom.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", dateTo.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Model</th><th class="px-4 py-3 font-medium"${_scopeId}>ID</th><th class="px-4 py-3 font-medium"${_scopeId}>Event</th><th class="px-4 py-3 font-medium"${_scopeId}>Field</th><th class="px-4 py-3 font-medium"${_scopeId}>Old Value</th><th class="px-4 py-3 font-medium"${_scopeId}>New Value</th><th class="px-4 py-3 font-medium"${_scopeId}>User</th><th class="px-4 py-3 font-medium"${_scopeId}>When</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.changes.data, (c) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 whitespace-nowrap font-medium"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(modelName(c.auditable_type))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap font-mono text-xs"${(0, server_renderer_exports.ssrRenderAttr)("title", c.auditable_id)}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(c.auditable_id?.slice(0, 8))}… </td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${(0, server_renderer_exports.ssrRenderClass)([eventColors[c.event] ?? "bg-gray-100 text-gray-600", "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(c.event)}</span></td><td class="px-4 py-3 text-gray-700 whitespace-nowrap font-mono text-xs"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(c.field ?? "—")}</td><td class="px-4 py-3 text-red-700 max-w-xs truncate"${(0, server_renderer_exports.ssrRenderAttr)("title", c.old_value)}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(truncate(c.old_value))}</td><td class="px-4 py-3 text-green-700 max-w-xs truncate"${(0, server_renderer_exports.ssrRenderAttr)("title", c.new_value)}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(truncate(c.new_value))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(c.user?.name ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(formatDate(c.changed_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.changes.data.length) _push(`<tr${_scopeId}><td colspan="8" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No field changes recorded yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.changes.links && __props.changes.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.changes.links, (link) => {
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
						_push(`</div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
						(0, vue_exports.createVNode)("h1", { class: "text-2xl font-bold mb-6" }, "Field Changes"),
						(0, vue_exports.createVNode)("div", { class: "flex flex-wrap gap-3 mb-4" }, [
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								type: "text",
								placeholder: "Search field, value, or ID…",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, search.value]]),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("select", {
								"onUpdate:modelValue": ($event) => model.value = $event,
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, [(0, vue_exports.createVNode)("option", { value: "" }, "All models"), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.modelTypes, (t) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("option", {
									key: t.value,
									value: t.value
								}, (0, vue_exports.toDisplayString)(t.label), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vue_exports.vModelSelect, model.value]]),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("select", {
								"onUpdate:modelValue": ($event) => event.value = $event,
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, [
								(0, vue_exports.createVNode)("option", { value: "" }, "All events"),
								(0, vue_exports.createVNode)("option", { value: "created" }, "Created"),
								(0, vue_exports.createVNode)("option", { value: "updated" }, "Updated"),
								(0, vue_exports.createVNode)("option", { value: "deleted" }, "Deleted")
							], 8, ["onUpdate:modelValue"]), [[vue_exports.vModelSelect, event.value]]),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => dateFrom.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, dateFrom.value]]),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => dateTo.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, dateTo.value]])
						]),
						(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [(0, vue_exports.createVNode)("table", { class: "min-w-full text-sm" }, [(0, vue_exports.createVNode)("thead", { class: "bg-gray-50 text-left text-gray-500" }, [(0, vue_exports.createVNode)("tr", null, [
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Model"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "ID"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Event"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Field"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Old Value"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "New Value"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "User"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "When")
						])]), (0, vue_exports.createVNode)("tbody", { class: "divide-y divide-gray-100" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.changes.data, (c) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", {
								key: c.id,
								class: "hover:bg-gray-50"
							}, [
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 whitespace-nowrap font-medium" }, (0, vue_exports.toDisplayString)(modelName(c.auditable_type)), 1),
								(0, vue_exports.createVNode)("td", {
									class: "px-4 py-3 text-gray-500 whitespace-nowrap font-mono text-xs",
									title: c.auditable_id
								}, (0, vue_exports.toDisplayString)(c.auditable_id?.slice(0, 8)) + "… ", 9, ["title"]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 whitespace-nowrap" }, [(0, vue_exports.createVNode)("span", { class: ["px-2 py-0.5 rounded-full text-xs font-medium", eventColors[c.event] ?? "bg-gray-100 text-gray-600"] }, (0, vue_exports.toDisplayString)(c.event), 3)]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-700 whitespace-nowrap font-mono text-xs" }, (0, vue_exports.toDisplayString)(c.field ?? "—"), 1),
								(0, vue_exports.createVNode)("td", {
									class: "px-4 py-3 text-red-700 max-w-xs truncate",
									title: c.old_value
								}, (0, vue_exports.toDisplayString)(truncate(c.old_value)), 9, ["title"]),
								(0, vue_exports.createVNode)("td", {
									class: "px-4 py-3 text-green-700 max-w-xs truncate",
									title: c.new_value
								}, (0, vue_exports.toDisplayString)(truncate(c.new_value)), 9, ["title"]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(c.user?.name ?? "—"), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(formatDate(c.changed_at)), 1)
							]);
						}), 128)), !__props.changes.data.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", { key: 0 }, [(0, vue_exports.createVNode)("td", {
							colspan: "8",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No field changes recorded yet.")])) : (0, vue_exports.createCommentVNode)("", true)])])]),
						__props.changes.links && __props.changes.links.length > 3 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.changes.links, (link) => {
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
					])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/FieldChanges/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
