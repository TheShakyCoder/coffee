import { n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/PageViews/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		pageViews: {
			type: Object,
			required: true
		},
		stats: {
			type: Object,
			required: true
		},
		topPages: {
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
		const dateFrom = (0, vue_exports.ref)(props.filters.date_from ?? "");
		const dateTo = (0, vue_exports.ref)(props.filters.date_to ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.page-views.index"), {
					search: search.value || void 0,
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
			dateFrom,
			dateTo
		], applyFilters);
		function truncate(str, len = 80) {
			if (!str) return "—";
			return str.length > len ? str.slice(0, len) + "…" : str;
		}
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Page Views" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Page Views</h1><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Today</div><div class="text-2xl font-semibold"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.stats.today.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>This Week</div><div class="text-2xl font-semibold"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.stats.this_week.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>This Month</div><div class="text-2xl font-semibold"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.stats.this_month.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>All Time</div><div class="text-2xl font-semibold"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.stats.total.toLocaleString())}</div></div></div><div class="bg-white rounded-lg shadow p-4 mb-8"${_scopeId}><h2 class="text-lg font-semibold mb-3"${_scopeId}>Top Pages (Last 30 Days)</h2><div class="space-y-2"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.topPages, (page) => {
							_push(`<div class="flex justify-between items-center text-sm"${_scopeId}><span class="text-gray-700 truncate mr-4"${(0, server_renderer_exports.ssrRenderAttr)("title", page.url)}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(truncate(page.url, 60))}</span><span class="text-gray-500 whitespace-nowrap font-medium"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(Number(page.views).toLocaleString())}</span></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.topPages.length) _push(`<div class="text-gray-400 text-sm"${_scopeId}>No data yet.</div>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", search.value)} type="text" placeholder="Search URL, IP, or user agent…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", dateFrom.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", dateTo.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>URL</th><th class="px-4 py-3 font-medium"${_scopeId}>IP</th><th class="px-4 py-3 font-medium"${_scopeId}>Status</th><th class="px-4 py-3 font-medium"${_scopeId}>User</th><th class="px-4 py-3 font-medium"${_scopeId}>Viewed At</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.pageViews.data, (view) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 max-w-xs truncate"${(0, server_renderer_exports.ssrRenderAttr)("title", view.url)}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(truncate(view.url, 60))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(view.ip ?? "—")}</td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${(0, server_renderer_exports.ssrRenderClass)({
								"text-green-600": view.status_code >= 200 && view.status_code < 300,
								"text-yellow-600": view.status_code >= 300 && view.status_code < 400,
								"text-red-600": view.status_code >= 400
							})}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(view.status_code ?? "—")}</span></td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(view.user_id ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(formatDate(view.viewed_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.pageViews.data.length) _push(`<tr${_scopeId}><td colspan="5" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No page views recorded yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.pageViews.links && __props.pageViews.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.pageViews.links, (link) => {
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
						(0, vue_exports.createVNode)("h1", { class: "text-2xl font-bold mb-6" }, "Page Views"),
						(0, vue_exports.createVNode)("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" }, [
							(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow p-4" }, [(0, vue_exports.createVNode)("div", { class: "text-sm text-gray-500" }, "Today"), (0, vue_exports.createVNode)("div", { class: "text-2xl font-semibold" }, (0, vue_exports.toDisplayString)(__props.stats.today.toLocaleString()), 1)]),
							(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow p-4" }, [(0, vue_exports.createVNode)("div", { class: "text-sm text-gray-500" }, "This Week"), (0, vue_exports.createVNode)("div", { class: "text-2xl font-semibold" }, (0, vue_exports.toDisplayString)(__props.stats.this_week.toLocaleString()), 1)]),
							(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow p-4" }, [(0, vue_exports.createVNode)("div", { class: "text-sm text-gray-500" }, "This Month"), (0, vue_exports.createVNode)("div", { class: "text-2xl font-semibold" }, (0, vue_exports.toDisplayString)(__props.stats.this_month.toLocaleString()), 1)]),
							(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow p-4" }, [(0, vue_exports.createVNode)("div", { class: "text-sm text-gray-500" }, "All Time"), (0, vue_exports.createVNode)("div", { class: "text-2xl font-semibold" }, (0, vue_exports.toDisplayString)(__props.stats.total.toLocaleString()), 1)])
						]),
						(0, vue_exports.createVNode)("div", { class: "bg-white rounded-lg shadow p-4 mb-8" }, [(0, vue_exports.createVNode)("h2", { class: "text-lg font-semibold mb-3" }, "Top Pages (Last 30 Days)"), (0, vue_exports.createVNode)("div", { class: "space-y-2" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.topPages, (page) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: page.url,
								class: "flex justify-between items-center text-sm"
							}, [(0, vue_exports.createVNode)("span", {
								class: "text-gray-700 truncate mr-4",
								title: page.url
							}, (0, vue_exports.toDisplayString)(truncate(page.url, 60)), 9, ["title"]), (0, vue_exports.createVNode)("span", { class: "text-gray-500 whitespace-nowrap font-medium" }, (0, vue_exports.toDisplayString)(Number(page.views).toLocaleString()), 1)]);
						}), 128)), !__props.topPages.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "text-gray-400 text-sm"
						}, "No data yet.")) : (0, vue_exports.createCommentVNode)("", true)])]),
						(0, vue_exports.createVNode)("div", { class: "flex flex-wrap gap-3 mb-4" }, [
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								type: "text",
								placeholder: "Search URL, IP, or user agent…",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, search.value]]),
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
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "URL"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "IP"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Status"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "User"),
							(0, vue_exports.createVNode)("th", { class: "px-4 py-3 font-medium" }, "Viewed At")
						])]), (0, vue_exports.createVNode)("tbody", { class: "divide-y divide-gray-100" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.pageViews.data, (view) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", {
								key: view.id,
								class: "hover:bg-gray-50"
							}, [
								(0, vue_exports.createVNode)("td", {
									class: "px-4 py-3 max-w-xs truncate",
									title: view.url
								}, (0, vue_exports.toDisplayString)(truncate(view.url, 60)), 9, ["title"]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(view.ip ?? "—"), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 whitespace-nowrap" }, [(0, vue_exports.createVNode)("span", { class: {
									"text-green-600": view.status_code >= 200 && view.status_code < 300,
									"text-yellow-600": view.status_code >= 300 && view.status_code < 400,
									"text-red-600": view.status_code >= 400
								} }, (0, vue_exports.toDisplayString)(view.status_code ?? "—"), 3)]),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(view.user_id ?? "—"), 1),
								(0, vue_exports.createVNode)("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, (0, vue_exports.toDisplayString)(formatDate(view.viewed_at)), 1)
							]);
						}), 128)), !__props.pageViews.data.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("tr", { key: 0 }, [(0, vue_exports.createVNode)("td", {
							colspan: "5",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No page views recorded yet.")])) : (0, vue_exports.createCommentVNode)("", true)])])]),
						__props.pageViews.links && __props.pageViews.links.length > 3 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.pageViews.links, (link) => {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/PageViews/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
