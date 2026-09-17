import { a as usePage, n as head_default, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const allSections = {
			"posts": {
				label: "Posts",
				icon: "📰"
			},
			"pages": {
				label: "Pages",
				icon: "📄"
			},
			"media": {
				label: "Media",
				icon: "🖼️"
			},
			"menu-items": {
				label: "Menu Items",
				icon: "🔗"
			},
			"competitions": {
				label: "Competitions",
				icon: "🏆"
			},
			"activities": {
				label: "Activities",
				icon: "📅"
			},
			"meetings": {
				label: "Meetings",
				icon: "🗓️"
			},
			"page-views": {
				label: "Page Views",
				icon: "👁️"
			},
			"field-changes": {
				label: "Field Changes",
				icon: "🔀"
			}
		};
		const isAdmin = (0, vue_exports.computed)(() => page.props.auth?.user?.is_admin);
		const indexLinks = (0, vue_exports.computed)(() => {
			if (isAdmin.value) return Object.entries(allSections).map(([resource, section]) => ({
				label: section.label,
				href: `/internal/${resource}`,
				icon: section.icon
			}));
			return (page.props.can ?? []).filter((p) => typeof p === "string" && p.endsWith(".index")).map((p) => {
				const resource = p.split(".").slice(1, -1).join("-");
				const section = allSections[resource];
				return section ? {
					label: section.label,
					href: `/internal/${resource}`,
					icon: section.icon
				} : null;
			}).filter(Boolean);
		});
		const stats = [
			{
				label: "Upcoming Workshops",
				value: "4",
				icon: "📅",
				change: "+2 this week",
				trend: "up",
				color: "bg-brand-50 border-brand-200",
				iconBg: "bg-brand-100",
				valueColor: "text-brand-700"
			},
			{
				label: "Active Subscribers",
				value: "1,248",
				icon: "👥",
				change: "+12 this month",
				trend: "up",
				color: "bg-sky-50 border-sky-200",
				iconBg: "bg-sky-100",
				valueColor: "text-sky-700"
			},
			{
				label: "News Articles",
				value: "18",
				icon: "📰",
				change: "3 drafts pending",
				trend: "neutral",
				color: "bg-purple-50 border-purple-200",
				iconBg: "bg-purple-100",
				valueColor: "text-purple-700"
			},
			{
				label: "Orders This Week",
				value: "152",
				icon: "📦",
				change: "+5 vs last week",
				trend: "up",
				color: "bg-accent-50 border-orange-200",
				iconBg: "bg-orange-100",
				valueColor: "text-orange-700"
			}
		];
		const recentActivity = [
			{
				action: "New subscriber",
				detail: "Sarah Thompson started a monthly subscription",
				time: "2 mins ago",
				icon: "👤",
				color: "bg-brand-100 text-brand-700"
			},
			{
				action: "Workshop scheduled",
				detail: "\"Espresso Basics\" added for 12 Apr",
				time: "1 hour ago",
				icon: "📅",
				color: "bg-sky-100 text-sky-700"
			},
			{
				action: "News article published",
				detail: "New Ethiopian single origin published",
				time: "3 hours ago",
				icon: "📰",
				color: "bg-purple-100 text-purple-700"
			},
			{
				action: "Order received",
				detail: "£42 order placed via online shop",
				time: "Yesterday",
				icon: "☕",
				color: "bg-green-100 text-green-700"
			},
			{
				action: "Wholesale enquiry",
				detail: "New trade enquiry from a local café",
				time: "Yesterday",
				icon: "🏪",
				color: "bg-amber-100 text-amber-700"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Dashboard — Acme Coffee Roasters Admin" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { title: "Internal Dashboard" }, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Dashboard</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Welcome back, ${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.name)}</p></div><div class="flex items-center gap-2"${_scopeId}><a href="/" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"${_scopeId}> View Public Site </a></div></div>`);
					else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Dashboard"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, "Welcome back, " + (0, vue_exports.toDisplayString)(_ctx.$page.props.auth.user.name), 1)]), (0, vue_exports.createVNode)("div", { class: "flex items-center gap-2" }, [(0, vue_exports.createVNode)("a", {
						href: "/",
						class: "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
					}, " View Public Site ")])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (indexLinks.value.length) {
							_push(`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(indexLinks.value, (link) => {
								_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm font-medium text-warm-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"${_scopeId}><span class="text-base"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(link.icon)}</span> ${(0, server_renderer_exports.ssrInterpolate)(link.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(stats, (stat) => {
							_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([stat.color, "p-5 rounded-2xl border-2 transition-shadow hover:shadow-md"])}"${_scopeId}><div class="flex items-start justify-between mb-3"${_scopeId}><div class="${(0, server_renderer_exports.ssrRenderClass)([stat.iconBg, "w-10 h-10 rounded-xl flex items-center justify-center text-xl"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(stat.icon)}</div></div><p class="${(0, server_renderer_exports.ssrRenderClass)([stat.valueColor, "text-2xl font-bold font-display"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(stat.value)}</p><p class="text-xs font-medium text-warm-600 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(stat.label)}</p><p class="text-xs text-warm-400 mt-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(stat.change)}</p></div>`);
						});
						_push(`<!--]--></div><div class="grid lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 flex items-center justify-between"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Recent Activity</h2><a href="#" class="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"${_scopeId}>View all</a></div><div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(recentActivity, (item) => {
							_push(`<div class="flex items-start gap-3 px-6 py-4 hover:bg-warm-50 transition-colors"${_scopeId}><div class="${(0, server_renderer_exports.ssrRenderClass)([item.color, "w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.icon)}</div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.action)}</p><p class="text-xs text-warm-500 mt-0.5 truncate"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.detail)}</p></div><span class="text-xs text-warm-400 shrink-0 ml-2 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.time)}</span></div>`);
						});
						_push(`<!--]--></div></div><div class="space-y-5"${_scopeId}><div class="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-5 text-white"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><img src="/media/logo.svg" alt="Acme Coffee Roasters" class="h-12 w-auto brightness-0 invert opacity-90"${_scopeId}><div${_scopeId}><p class="font-semibold text-sm font-display"${_scopeId}>Acme Coffee Roasters</p></div></div><div class="grid grid-cols-2 gap-3 text-center"${_scopeId}><div class="bg-white/15 rounded-xl p-3"${_scopeId}><p class="text-lg font-bold font-display"${_scopeId}>1,248</p><p class="text-white/70 text-xs"${_scopeId}>Subscribers</p></div><div class="bg-white/15 rounded-xl p-3"${_scopeId}><p class="text-lg font-bold font-display"${_scopeId}>152</p><p class="text-white/70 text-xs"${_scopeId}>Orders this week</p></div></div></div><div class="bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="px-5 py-4 border-b border-warm-100"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Next Workshops</h2></div><div class="divide-y divide-warm-50"${_scopeId}><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-brand-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>12</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>Espresso Basics Workshop</p><p class="text-xs text-warm-400"${_scopeId}>10:00 – The Roastery</p></div></div><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-sky-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>16</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>Cupping &amp; Tasting Session</p><p class="text-xs text-warm-400"${_scopeId}>09:30 – The Roastery</p></div></div><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-purple-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>25</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>Brew at Home: Pour-Over</p><p class="text-xs text-warm-400"${_scopeId}>18:00 – The Roastery</p></div></div></div><div class="px-5 py-3 border-t border-warm-100"${_scopeId}><a href="#" class="text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"${_scopeId}>Manage workshops →</a></div></div></div></div>`);
					} else return [
						indexLinks.value.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(indexLinks.value, (link) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("a", {
								key: link.href,
								href: link.href,
								class: "flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm font-medium text-warm-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"
							}, [(0, vue_exports.createVNode)("span", { class: "text-base" }, (0, vue_exports.toDisplayString)(link.icon), 1), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)(link.label), 1)], 8, ["href"]);
						}), 128))])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", { class: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8" }, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(stats, (stat) => {
							return (0, vue_exports.createVNode)("div", {
								key: stat.label,
								class: ["p-5 rounded-2xl border-2 transition-shadow hover:shadow-md", stat.color]
							}, [
								(0, vue_exports.createVNode)("div", { class: "flex items-start justify-between mb-3" }, [(0, vue_exports.createVNode)("div", { class: ["w-10 h-10 rounded-xl flex items-center justify-center text-xl", stat.iconBg] }, (0, vue_exports.toDisplayString)(stat.icon), 3)]),
								(0, vue_exports.createVNode)("p", { class: ["text-2xl font-bold font-display", stat.valueColor] }, (0, vue_exports.toDisplayString)(stat.value), 3),
								(0, vue_exports.createVNode)("p", { class: "text-xs font-medium text-warm-600 mt-0.5" }, (0, vue_exports.toDisplayString)(stat.label), 1),
								(0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400 mt-1" }, (0, vue_exports.toDisplayString)(stat.change), 1)
							], 2);
						}), 64))]),
						(0, vue_exports.createVNode)("div", { class: "grid lg:grid-cols-3 gap-6" }, [(0, vue_exports.createVNode)("div", { class: "lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "px-6 py-4 border-b border-warm-100 flex items-center justify-between" }, [(0, vue_exports.createVNode)("h2", { class: "font-semibold text-warm-900 text-sm" }, "Recent Activity"), (0, vue_exports.createVNode)("a", {
							href: "#",
							class: "text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, "View all")]), (0, vue_exports.createVNode)("div", { class: "divide-y divide-warm-50" }, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(recentActivity, (item) => {
							return (0, vue_exports.createVNode)("div", {
								key: item.action,
								class: "flex items-start gap-3 px-6 py-4 hover:bg-warm-50 transition-colors"
							}, [
								(0, vue_exports.createVNode)("div", { class: ["w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5", item.color] }, (0, vue_exports.toDisplayString)(item.icon), 3),
								(0, vue_exports.createVNode)("div", { class: "flex-1 min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-900" }, (0, vue_exports.toDisplayString)(item.action), 1), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-500 mt-0.5 truncate" }, (0, vue_exports.toDisplayString)(item.detail), 1)]),
								(0, vue_exports.createVNode)("span", { class: "text-xs text-warm-400 shrink-0 ml-2 mt-0.5" }, (0, vue_exports.toDisplayString)(item.time), 1)
							]);
						}), 64))])]), (0, vue_exports.createVNode)("div", { class: "space-y-5" }, [(0, vue_exports.createVNode)("div", { class: "bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-5 text-white" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 mb-4" }, [(0, vue_exports.createVNode)("img", {
							src: "/media/logo.svg",
							alt: "Acme Coffee Roasters",
							class: "h-12 w-auto brightness-0 invert opacity-90"
						}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("p", { class: "font-semibold text-sm font-display" }, "Acme Coffee Roasters")])]), (0, vue_exports.createVNode)("div", { class: "grid grid-cols-2 gap-3 text-center" }, [(0, vue_exports.createVNode)("div", { class: "bg-white/15 rounded-xl p-3" }, [(0, vue_exports.createVNode)("p", { class: "text-lg font-bold font-display" }, "1,248"), (0, vue_exports.createVNode)("p", { class: "text-white/70 text-xs" }, "Subscribers")]), (0, vue_exports.createVNode)("div", { class: "bg-white/15 rounded-xl p-3" }, [(0, vue_exports.createVNode)("p", { class: "text-lg font-bold font-display" }, "152"), (0, vue_exports.createVNode)("p", { class: "text-white/70 text-xs" }, "Orders this week")])])]), (0, vue_exports.createVNode)("div", { class: "bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [
							(0, vue_exports.createVNode)("div", { class: "px-5 py-4 border-b border-warm-100" }, [(0, vue_exports.createVNode)("h2", { class: "font-semibold text-warm-900 text-sm" }, "Next Workshops")]),
							(0, vue_exports.createVNode)("div", { class: "divide-y divide-warm-50" }, [
								(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 px-5 py-3" }, [(0, vue_exports.createVNode)("div", { class: "text-center shrink-0" }, [(0, vue_exports.createVNode)("p", { class: "text-xs font-bold text-brand-600" }, "APR"), (0, vue_exports.createVNode)("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "12")]), (0, vue_exports.createVNode)("div", { class: "min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-800 truncate" }, "Espresso Basics Workshop"), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400" }, "10:00 – The Roastery")])]),
								(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 px-5 py-3" }, [(0, vue_exports.createVNode)("div", { class: "text-center shrink-0" }, [(0, vue_exports.createVNode)("p", { class: "text-xs font-bold text-sky-600" }, "APR"), (0, vue_exports.createVNode)("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "16")]), (0, vue_exports.createVNode)("div", { class: "min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-800 truncate" }, "Cupping & Tasting Session"), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400" }, "09:30 – The Roastery")])]),
								(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 px-5 py-3" }, [(0, vue_exports.createVNode)("div", { class: "text-center shrink-0" }, [(0, vue_exports.createVNode)("p", { class: "text-xs font-bold text-purple-600" }, "APR"), (0, vue_exports.createVNode)("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "25")]), (0, vue_exports.createVNode)("div", { class: "min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-800 truncate" }, "Brew at Home: Pour-Over"), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400" }, "18:00 – The Roastery")])])
							]),
							(0, vue_exports.createVNode)("div", { class: "px-5 py-3 border-t border-warm-100" }, [(0, vue_exports.createVNode)("a", {
								href: "#",
								class: "text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"
							}, "Manage workshops →")])
						])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
