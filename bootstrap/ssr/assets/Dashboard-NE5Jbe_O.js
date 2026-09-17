import { a as usePage, n as head_default, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Admin/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		stats: {
			type: Object,
			default: () => ({})
		},
		recentPosts: {
			type: Array,
			default: () => []
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const statCards = [{
			label: "Staff Users",
			key: "users",
			icon: "👥",
			href: null,
			colour: "bg-sky-50 border-sky-200",
			iconBg: "bg-sky-100",
			value: "text-sky-700"
		}, {
			label: "Roles",
			key: "roles",
			icon: "🔐",
			href: "/admin/roles",
			colour: "bg-purple-50 border-purple-200",
			iconBg: "bg-purple-100",
			value: "text-purple-700"
		}];
		const quickLinks = [
			{
				label: "Users",
				icon: "👥",
				href: "/admin/users",
				colour: "bg-brand-600 hover:bg-brand-700 text-white"
			},
			{
				label: "All Posts",
				icon: "📰",
				href: "/admin/posts",
				colour: "bg-sky-500 hover:bg-sky-600 text-white"
			},
			{
				label: "Roles",
				icon: "🔐",
				href: "/admin/roles",
				colour: "bg-purple-600 hover:bg-purple-700 text-white"
			},
			{
				label: "Public Site",
				icon: "🌐",
				href: "/",
				colour: "bg-warm-700 hover:bg-warm-800 text-white"
			}
		];
		function formatDate(iso) {
			return new Date(iso).toLocaleDateString("en-GB", {
				day: "numeric",
				month: "short",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Admin Dashboard" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { title: "Admin Dashboard" }, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Admin Dashboard</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Welcome back, ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.auth.user.name)}</p></div><a href="/" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg> View public site </a></div>`);
					else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Admin Dashboard"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, "Welcome back, " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).props.auth.user.name), 1)]), (0, vue_exports.createVNode)("a", {
						href: "/",
						target: "_blank",
						class: "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
					}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						class: "w-3.5 h-3.5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					})])), (0, vue_exports.createTextVNode)(" View public site ")])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(quickLinks, (link) => {
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
								key: link.label,
								href: link.href,
								class: ["flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm", link.colour]
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span class="text-base"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(link.icon)}</span> ${(0, server_renderer_exports.ssrInterpolate)(link.label)}`);
									else return [(0, vue_exports.createVNode)("span", { class: "text-base" }, (0, vue_exports.toDisplayString)(link.icon), 1), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)(link.label), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div><div class="grid sm:grid-cols-3 gap-5 mb-8"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(statCards, (card) => {
							(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(card.href ? "a" : "div"), {
								key: card.key,
								href: card.href ?? void 0,
								class: ["group p-5 rounded-2xl border-2 transition-all", [card.colour, card.href ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""]]
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([card.iconBg, "w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(card.icon)}</div><p class="${(0, server_renderer_exports.ssrRenderClass)([card.value, "text-2xl font-bold font-display"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(props.stats[card.key] ?? 0)}</p><p class="text-xs font-medium text-warm-600 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(card.label)}</p>`);
									else return [
										(0, vue_exports.createVNode)("div", { class: ["w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3", card.iconBg] }, (0, vue_exports.toDisplayString)(card.icon), 3),
										(0, vue_exports.createVNode)("p", { class: ["text-2xl font-bold font-display", card.value] }, (0, vue_exports.toDisplayString)(props.stats[card.key] ?? 0), 3),
										(0, vue_exports.createVNode)("p", { class: "text-xs font-medium text-warm-600 mt-0.5" }, (0, vue_exports.toDisplayString)(card.label), 1)
									];
								}),
								_: 2
							}), _parent, _scopeId);
						});
						_push(`<!--]--></div><div class="grid lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="flex items-center justify-between px-6 py-4 border-b border-warm-100"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Recent Posts</h2><a href="/internal/posts" class="text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"${_scopeId}> View all → </a></div>`);
						if (__props.recentPosts.length === 0) _push(`<div class="px-6 py-10 text-center text-sm text-warm-400"${_scopeId}> No posts yet. <a href="/internal/posts/create" class="text-brand-600 hover:text-brand-800 font-medium ml-1"${_scopeId}>Create one →</a></div>`);
						else {
							_push(`<div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.recentPosts, (post) => {
								_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", `/internal/posts/${post.id}`)} class="flex items-center gap-4 px-6 py-3.5 hover:bg-warm-50 transition-colors group"${_scopeId}><div class="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0"${_scopeId}> 📰 </div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900 truncate group-hover:text-brand-700 transition-colors"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(post.title)}</p><p class="text-xs text-warm-400 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(formatDate(post.created_at))}</p></div><svg class="w-4 h-4 text-warm-300 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></a>`);
							});
							_push(`<!--]--></div>`);
						}
						_push(`</div><div class="space-y-5"${_scopeId}><div class="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><img src="/media/logo.svg" alt="Acme Coffee Roasters" class="h-12 w-auto brightness-0 invert opacity-90"${_scopeId}><div${_scopeId}><p class="font-semibold text-sm font-display leading-tight"${_scopeId}>Acme Coffee Roasters</p></div></div><p class="text-white/70 text-xs leading-relaxed"${_scopeId}> Manage your site content, user roles, and permissions from this internal panel. </p></div><div class="bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="px-5 py-4 border-b border-warm-100"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Manage</h2></div><div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(quickLinks.slice(0, 3), (link) => {
							_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="flex items-center gap-3 px-5 py-3 hover:bg-warm-50 transition-colors group"${_scopeId}><span class="text-base"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(link.icon)}</span><span class="text-sm font-medium text-warm-700 group-hover:text-brand-700 transition-colors flex-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(link.label)}</span><svg class="w-4 h-4 text-warm-300 group-hover:text-brand-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></a>`);
						});
						_push(`<!--]--></div></div></div></div>`);
					} else return [
						(0, vue_exports.createVNode)("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" }, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(quickLinks, (link) => {
							return (0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
								key: link.label,
								href: link.href,
								class: ["flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm", link.colour]
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("span", { class: "text-base" }, (0, vue_exports.toDisplayString)(link.icon), 1), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)(link.label), 1)]),
								_: 2
							}, 1032, ["href", "class"]);
						}), 64))]),
						(0, vue_exports.createVNode)("div", { class: "grid sm:grid-cols-3 gap-5 mb-8" }, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(statCards, (card) => {
							return (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(card.href ? "a" : "div"), {
								key: card.key,
								href: card.href ?? void 0,
								class: ["group p-5 rounded-2xl border-2 transition-all", [card.colour, card.href ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : ""]]
							}, {
								default: (0, vue_exports.withCtx)(() => [
									(0, vue_exports.createVNode)("div", { class: ["w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3", card.iconBg] }, (0, vue_exports.toDisplayString)(card.icon), 3),
									(0, vue_exports.createVNode)("p", { class: ["text-2xl font-bold font-display", card.value] }, (0, vue_exports.toDisplayString)(props.stats[card.key] ?? 0), 3),
									(0, vue_exports.createVNode)("p", { class: "text-xs font-medium text-warm-600 mt-0.5" }, (0, vue_exports.toDisplayString)(card.label), 1)
								]),
								_: 2
							}, 1032, ["href", "class"]);
						}), 64))]),
						(0, vue_exports.createVNode)("div", { class: "grid lg:grid-cols-3 gap-6" }, [(0, vue_exports.createVNode)("div", { class: "lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between px-6 py-4 border-b border-warm-100" }, [(0, vue_exports.createVNode)("h2", { class: "font-semibold text-warm-900 text-sm" }, "Recent Posts"), (0, vue_exports.createVNode)("a", {
							href: "/internal/posts",
							class: "text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"
						}, " View all → ")]), __props.recentPosts.length === 0 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "px-6 py-10 text-center text-sm text-warm-400"
						}, [(0, vue_exports.createTextVNode)(" No posts yet. "), (0, vue_exports.createVNode)("a", {
							href: "/internal/posts/create",
							class: "text-brand-600 hover:text-brand-800 font-medium ml-1"
						}, "Create one →")])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 1,
							class: "divide-y divide-warm-50"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.recentPosts, (post) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("a", {
								key: post.id,
								href: `/internal/posts/${post.id}`,
								class: "flex items-center gap-4 px-6 py-3.5 hover:bg-warm-50 transition-colors group"
							}, [
								(0, vue_exports.createVNode)("div", { class: "w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0" }, " 📰 "),
								(0, vue_exports.createVNode)("div", { class: "flex-1 min-w-0" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-900 truncate group-hover:text-brand-700 transition-colors" }, (0, vue_exports.toDisplayString)(post.title), 1), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400 mt-0.5" }, (0, vue_exports.toDisplayString)(formatDate(post.created_at)), 1)]),
								((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4 text-warm-300 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M9 5l7 7-7 7"
								})]))
							], 8, ["href"]);
						}), 128))]))]), (0, vue_exports.createVNode)("div", { class: "space-y-5" }, [(0, vue_exports.createVNode)("div", { class: "bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3 mb-4" }, [(0, vue_exports.createVNode)("img", {
							src: "/media/logo.svg",
							alt: "Acme Coffee Roasters",
							class: "h-12 w-auto brightness-0 invert opacity-90"
						}), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("p", { class: "font-semibold text-sm font-display leading-tight" }, "Acme Coffee Roasters")])]), (0, vue_exports.createVNode)("p", { class: "text-white/70 text-xs leading-relaxed" }, " Manage your site content, user roles, and permissions from this internal panel. ")]), (0, vue_exports.createVNode)("div", { class: "bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "px-5 py-4 border-b border-warm-100" }, [(0, vue_exports.createVNode)("h2", { class: "font-semibold text-warm-900 text-sm" }, "Manage")]), (0, vue_exports.createVNode)("div", { class: "divide-y divide-warm-50" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(quickLinks.slice(0, 3), (link) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("a", {
								key: link.label,
								href: link.href,
								class: "flex items-center gap-3 px-5 py-3 hover:bg-warm-50 transition-colors group"
							}, [
								(0, vue_exports.createVNode)("span", { class: "text-base" }, (0, vue_exports.toDisplayString)(link.icon), 1),
								(0, vue_exports.createVNode)("span", { class: "text-sm font-medium text-warm-700 group-hover:text-brand-700 transition-colors flex-1" }, (0, vue_exports.toDisplayString)(link.label), 1),
								((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4 text-warm-300 group-hover:text-brand-400 transition-colors",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M9 5l7 7-7 7"
								})]))
							], 8, ["href"]);
						}), 128))])])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
