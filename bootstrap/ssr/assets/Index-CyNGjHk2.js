import { a as usePage, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Components/Dropdown.vue
var _sfc_main$4 = {
	__name: "Dropdown",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "right"
		},
		width: {
			type: String,
			default: "48"
		},
		contentClasses: {
			type: String,
			default: "py-1 bg-white dark:bg-gray-700"
		}
	},
	setup(__props) {
		const props = __props;
		const closeOnEscape = (e) => {
			if (open.value && e.key === "Escape") open.value = false;
		};
		(0, vue_exports.onMounted)(() => document.addEventListener("keydown", closeOnEscape));
		(0, vue_exports.onUnmounted)(() => document.removeEventListener("keydown", closeOnEscape));
		const widthClass = (0, vue_exports.computed)(() => {
			return { 48: "w-48" }[props.width.toString()];
		});
		const alignmentClasses = (0, vue_exports.computed)(() => {
			if (props.align === "left") return "ltr:origin-top-left rtl:origin-top-right start-0";
			else if (props.align === "right") return "ltr:origin-top-right rtl:origin-top-left end-0";
			else return "origin-top";
		});
		const open = (0, vue_exports.ref)(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative" }, _attrs))}><div>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trigger", {}, null, _push, _parent);
			_push(`</div><div class="fixed inset-0 z-40" style="${(0, server_renderer_exports.ssrRenderStyle)(open.value ? null : { display: "none" })}"></div><div class="${(0, server_renderer_exports.ssrRenderClass)([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}" style="${(0, server_renderer_exports.ssrRenderStyle)([{ "display": "none" }, open.value ? null : { display: "none" }])}"><div class="${(0, server_renderer_exports.ssrRenderClass)([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "content", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DropdownLink.vue
var _sfc_main$3 = {
	__name: "DropdownLink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), (0, vue_exports.mergeProps)({
				href: __props.href,
				class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/ResponsiveNavLink.vue
var _sfc_main$2 = {
	__name: "ResponsiveNavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = (0, vue_exports.computed)(() => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), (0, vue_exports.mergeProps)({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout/Partials/DesktopLink.vue
var _sfc_main$1 = {
	__name: "DesktopLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), (0, vue_exports.mergeProps)({
				href: _ctx.route(__props.href),
				class: ["px-3 py-2 text-sm font-medium rounded-lg transition-colors", _ctx.route().current(__props.href) ? "bg-brand-50 text-brand-700" : "text-warm-600 hover:bg-warm-100 hover:text-warm-900"]
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(__props.title)}`);
					else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(__props.title), 1)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout/Partials/DesktopLink.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { title: String },
	setup(__props) {
		const page = usePage();
		const showingNavigationDropdown = (0, vue_exports.ref)(false);
		const navLinks = [
			{
				label: "Dashboard",
				href: "dashboard",
				permission: null
			},
			{
				label: "Admin",
				href: "admin.dashboard",
				permission: "admin.dashboard"
			},
			{
				label: "Posts",
				href: "internal.posts.index",
				permission: "internal.posts.index"
			},
			{
				label: "Pages",
				href: "internal.pages.index",
				permission: "internal.pages.index"
			},
			{
				label: "Media",
				href: "internal.media.index",
				permission: "internal.media.index"
			},
			{
				label: "Menu",
				href: "internal.menu-items.index",
				permission: "internal.menu-items.index"
			}
		];
		(0, vue_exports.onMounted)(() => {
			console.log("User permissions:", page.props.can);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen bg-warm-50 font-sans antialiased" }, _attrs))}><nav class="bg-white border-b border-warm-200 shadow-sm sticky top-0 z-40"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 items-center justify-between"><div class="flex items-center gap-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("home"),
				class: "flex items-center gap-3"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/media/logo.svg" alt="Acme Coffee Roasters" class="h-10 w-auto"${_scopeId}><div class="hidden sm:block"${_scopeId}><p class="text-sm font-semibold text-brand-600 leading-tight font-display"${_scopeId}> Acme Coffee Roasters </p><p class="text-xs text-warm-400 leading-tight"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.title)}</p></div>`);
					else return [(0, vue_exports.createVNode)("img", {
						src: "/media/logo.svg",
						alt: "Acme Coffee Roasters",
						class: "h-10 w-auto"
					}), (0, vue_exports.createVNode)("div", { class: "hidden sm:block" }, [(0, vue_exports.createVNode)("p", { class: "text-sm font-semibold text-brand-600 leading-tight font-display" }, " Acme Coffee Roasters "), (0, vue_exports.createVNode)("p", { class: "text-xs text-warm-400 leading-tight" }, (0, vue_exports.toDisplayString)(__props.title), 1)])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden md:flex items-center gap-1 ml-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navLinks, (link) => {
				_push(`<!--[-->`);
				if (link.permission && (0, vue_exports.unref)(page).props.can.includes(link.permission) || !link.permission || (0, vue_exports.unref)(page).props.auth.user.is_admin) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
					href: link.href,
					title: link.label
				}, null, _parent));
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div></div><div class="hidden sm:flex items-center gap-3"><a href="/" class="text-xs text-warm-500 hover:text-brand-600 transition-colors flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> View site </a>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, {
				align: "right",
				width: "48"
			}, {
				trigger: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-warm-100 transition-colors text-sm font-medium text-warm-700"${_scopeId}><div class="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase())}</div><span class="max-w-[120px] truncate"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.name)}</span><svg class="w-4 h-4 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
					else return [(0, vue_exports.createVNode)("button", {
						type: "button",
						class: "flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-warm-100 transition-colors text-sm font-medium text-warm-700"
					}, [
						(0, vue_exports.createVNode)("div", { class: "w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold" }, (0, vue_exports.toDisplayString)(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase()), 1),
						(0, vue_exports.createVNode)("span", { class: "max-w-[120px] truncate" }, (0, vue_exports.toDisplayString)(_ctx.$page.props.auth.user.name), 1),
						((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: "w-4 h-4 text-warm-400",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M19 9l-7 7-7-7"
						})]))
					])];
				}),
				content: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="px-4 py-3 border-b border-warm-100"${_scopeId}><p class="text-xs text-warm-500"${_scopeId}> Signed in as </p><p class="text-sm font-medium text-warm-900 truncate"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.email)}</p></div>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
							href: _ctx.route("profile.edit"),
							class: "flex items-center gap-2 text-sm text-warm-700"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> My Profile `);
								else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								})])), (0, vue_exports.createTextVNode)(" My Profile ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "flex items-center gap-2 text-sm text-rose-600 w-full"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId}></path></svg> Log Out `);
								else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
								})])), (0, vue_exports.createTextVNode)(" Log Out ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						(0, vue_exports.createVNode)("div", { class: "px-4 py-3 border-b border-warm-100" }, [(0, vue_exports.createVNode)("p", { class: "text-xs text-warm-500" }, " Signed in as "), (0, vue_exports.createVNode)("p", { class: "text-sm font-medium text-warm-900 truncate" }, (0, vue_exports.toDisplayString)(_ctx.$page.props.auth.user.email), 1)]),
						(0, vue_exports.createVNode)(_sfc_main$3, {
							href: _ctx.route("profile.edit"),
							class: "flex items-center gap-2 text-sm text-warm-700"
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
								d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							})])), (0, vue_exports.createTextVNode)(" My Profile ")]),
							_: 1
						}, 8, ["href"]),
						(0, vue_exports.createVNode)(_sfc_main$3, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "flex items-center gap-2 text-sm text-rose-600 w-full"
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
								d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							})])), (0, vue_exports.createTextVNode)(" Log Out ")]),
							_: 1
						}, 8, ["href"])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div><button class="sm:hidden p-2 rounded-lg text-warm-500 hover:bg-warm-100 transition-colors"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path class="${(0, server_renderer_exports.ssrRenderClass)({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${(0, server_renderer_exports.ssrRenderClass)({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div class="${(0, server_renderer_exports.ssrRenderClass)([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden border-t border-warm-100"])}"><div class="px-4 py-3 space-y-1">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [(0, vue_exports.createTextVNode)(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				href: "/internal/media",
				active: _ctx.$page.url.startsWith("/internal/media")
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Media `);
					else return [(0, vue_exports.createTextVNode)(" Media ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				href: "/internal/menu-items",
				active: _ctx.$page.url.startsWith("/internal/menu-items")
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Menu `);
					else return [(0, vue_exports.createTextVNode)(" Menu ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="border-t border-warm-100 px-4 py-3"><div class="flex items-center gap-3 mb-3"><div class="w-9 h-9 bg-brand-600 rounded-full flex items-center justify-center text-white text-sm font-bold">${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase())}</div><div><p class="text-sm font-medium text-warm-900">${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.name)}</p><p class="text-xs text-warm-500">${(0, server_renderer_exports.ssrInterpolate)(_ctx.$page.props.auth.user.email)}</p></div></div><div class="space-y-1">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { href: _ctx.route("profile.edit") }, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Profile`);
					else return [(0, vue_exports.createTextVNode)("Profile")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				href: _ctx.route("logout"),
				method: "post",
				as: "button"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Log Out`);
					else return [(0, vue_exports.createTextVNode)("Log Out")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></nav>`);
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white border-b border-warm-200"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">`);
				(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
			_push(`<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
