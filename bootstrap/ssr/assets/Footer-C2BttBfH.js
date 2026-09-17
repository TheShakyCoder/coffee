import { a as usePage, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Layouts/Partials/Header.vue
var _sfc_main$3 = {
	__name: "Header",
	__ssrInlineRender: true,
	props: {
		navLinks: Array,
		canLogin: Boolean,
		canRegister: Boolean,
		auth: Object
	},
	setup(__props) {
		const mobileMenuOpen = (0, vue_exports.ref)(false);
		const openDropdown = (0, vue_exports.ref)(null);
		function closeDropdowns() {
			openDropdown.value = null;
		}
		function handleClickOutside(e) {
			if (e.target.closest("nav") === null) closeDropdowns();
		}
		(0, vue_exports.onMounted)(() => {
			document.addEventListener("click", handleClickOutside);
		});
		(0, vue_exports.onUnmounted)(() => {
			document.removeEventListener("click", handleClickOutside);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}><nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-warm-200"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-20 items-center justify-between"><a href="/" class="flex items-center gap-3 shrink-0"><img src="/media/logo.svg" alt="Acme Coffee Roasters Logo" class="h-14 w-auto"><div class="hidden md:block"><p class="text-lg font-semibold text-brand-700 leading-tight font-display">Acme</p><p class="text-md text-bean-caramel tracking-wider leading-tight font-display">Coffee Roasters</p></div></a><div class="hidden lg:flex items-center gap-1"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link, idx) => {
				_push(`<div class="relative group">`);
				if (!link.children || link.children.length === 0) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: link.href,
					class: "px-2 py-2 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(link.label)}`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(link.label), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<button type="button" class="px-2 py-2 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors flex items-center gap-1">${(0, server_renderer_exports.ssrInterpolate)(link.label)} <svg class="${(0, server_renderer_exports.ssrRenderClass)([{ "rotate-180": openDropdown.value === idx }, "w-4 h-4 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></button>`);
				if (link.children && link.children.length > 0 && openDropdown.value === idx) {
					_push(`<div class="absolute left-0 mt-0 w-48 bg-white border border-warm-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)(link.children, (child, cidx) => {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							key: cidx,
							href: child.href,
							class: "block px-4 py-2.5 text-sm text-warm-700 hover:bg-brand-50 hover:text-brand-600 transition-colors first:rounded-t-xl last:rounded-b-xl"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(child.label)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(child.label), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div><div class="hidden lg:flex items-center gap-3">`);
			if (__props.canLogin && !_ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("login"),
				class: "px-2 py-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Login `);
					else return [(0, vue_exports.createTextVNode)(" Login ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canRegister && !_ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("register"),
				class: "px-2 py-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Register `);
					else return [(0, vue_exports.createTextVNode)(" Register ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canLogin && _ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("dashboard"),
				class: "px-2 py-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [(0, vue_exports.createTextVNode)(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/shop",
				class: "px-5 py-2.5 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-md",
				style: { "background": "linear-gradient(135deg, #6f4422, #2a190e)" }
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Shop Coffee `);
					else return [(0, vue_exports.createTextVNode)(" Shop Coffee ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><button class="lg:hidden p-2 rounded-lg text-warm-600 hover:bg-warm-100 transition-colors">`);
			if (!mobileMenuOpen.value) _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
			else _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
			_push(`</button></div></div>`);
			if (mobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-t border-warm-100 bg-white px-4 pb-4 pt-2 space-y-1"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link, idx) => {
					_push(`<!--[-->`);
					if (!link.children || link.children.length === 0) _push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="block px-4 py-2.5 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors">${(0, server_renderer_exports.ssrInterpolate)(link.label)}</a>`);
					else {
						_push(`<div><button class="w-full text-left px-4 py-2.5 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors flex items-center justify-between">${(0, server_renderer_exports.ssrInterpolate)(link.label)} <svg class="${(0, server_renderer_exports.ssrRenderClass)([{ "rotate-180": openDropdown.value === idx }, "w-4 h-4 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></button>`);
						if (openDropdown.value === idx) {
							_push(`<div class="ml-4 mt-1 space-y-1 border-l-2 border-warm-100"><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(link.children, (child, cidx) => {
								_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", child.href)} class="block px-4 py-2.5 text-sm text-warm-600 hover:text-brand-600 transition-colors">${(0, server_renderer_exports.ssrInterpolate)(child.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					}
					_push(`<!--]-->`);
				});
				_push(`<!--]--><div class="pt-2 border-t border-warm-100 flex flex-col gap-2">`);
				if (__props.canLogin && !_ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: _ctx.route("login"),
					class: "block px-4 py-2.5 text-sm font-medium text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Login `);
						else return [(0, vue_exports.createTextVNode)(" Login ")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: "/shop",
					onClick: ($event) => mobileMenuOpen.value = false,
					class: "block text-center px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Shop Coffee `);
						else return [(0, vue_exports.createTextVNode)(" Shop Coffee ")];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</nav></header>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Header.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/CookieConsent.vue
var STORAGE_KEY$1 = "cookie_consent";
var _sfc_main$2 = {
	__name: "CookieConsent",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = (0, vue_exports.ref)(false);
		const showDetails = (0, vue_exports.ref)(false);
		(0, vue_exports.onMounted)(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY$1)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value) {
				_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
					role: "dialog",
					"aria-live": "polite",
					"aria-label": "Cookie consent",
					class: "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
				}, _attrs))}><div class="mx-auto max-w-4xl rounded-2xl bg-warm-900 text-warm-50 shadow-2xl ring-1 ring-warm-50/10"><div class="p-5 sm:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start"><div class="flex-1"><p class="text-sm font-semibold text-accent-400 mb-1">We value your privacy</p><p class="text-sm leading-relaxed text-warm-50/80"> We use cookies to keep the site working and to understand how visitors use it. Essential cookies are always on. You can accept all cookies, reject non-essential ones, or read more below. <a href="/privacy" class="underline hover:text-accent-400 transition-colors">Privacy Policy</a>. </p>`);
				if (showDetails.value) _push(`<div class="mt-4 space-y-3 text-xs text-warm-50/70"><div><p class="font-semibold text-warm-50">Essential</p><p>Required for the site to function (session, security, CSRF). Always on.</p></div><div><p class="font-semibold text-warm-50">Analytics</p><p>Help us understand how the site is used so we can improve it. Optional.</p></div></div>`);
				else _push(`<!---->`);
				_push(`</div><div class="flex flex-col gap-2 sm:w-56 sm:flex-shrink-0"><button type="button" class="rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-warm-900 hover:bg-accent-400/90 transition-colors"> Accept all </button><button type="button" class="rounded-lg border border-warm-50/20 px-4 py-2 text-sm font-medium text-warm-50 hover:bg-warm-50/5 transition-colors"> Reject non-essential </button><button type="button" class="text-xs text-warm-50/60 underline hover:text-warm-50 transition-colors">${(0, server_renderer_exports.ssrInterpolate)(showDetails.value ? "Hide details" : "Manage preferences")}</button></div></div></div></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CookieConsent.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DemoDisclaimer.vue
var STORAGE_KEY = "demo_disclaimer_dismissed";
var _sfc_main$1 = {
	__name: "DemoDisclaimer",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = (0, vue_exports.ref)(false);
		const BOT_PATTERN = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegrambot|discordbot|slackbot|twitterbot|google-inspectiontool|chrome-lighthouse|headlesschrome/i;
		function isBot() {
			if (typeof navigator === "undefined" || !navigator.userAgent) return false;
			return BOT_PATTERN.test(navigator.userAgent);
		}
		(0, vue_exports.onMounted)(() => {
			if (isBot()) return;
			try {
				if (!localStorage.getItem(STORAGE_KEY)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value) {
				_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "demo-disclaimer-title",
					class: "fixed inset-0 z-[60] flex items-center justify-center px-4"
				}, _attrs))}><div class="absolute inset-0 bg-warm-900/70 backdrop-blur-sm"></div>`);
				if (visible.value) _push(`<div class="relative w-full max-w-md rounded-2xl bg-warm-50 text-warm-900 shadow-2xl ring-1 ring-warm-900/10"><button type="button" aria-label="Dismiss" class="absolute top-3 right-3 rounded-full p-1.5 text-warm-500 hover:bg-warm-900/5 hover:text-warm-900 transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></button><div class="p-6 sm:p-8"><div class="flex items-center gap-3 mb-4"><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-400/15 text-accent-400"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span><p class="text-xs font-semibold tracking-[0.22em] uppercase text-accent-400"> Notice </p></div><h2 id="demo-disclaimer-title" class="font-display text-2xl font-semibold text-warm-900 mb-3"> For demonstration purposes only </h2><p class="text-sm leading-relaxed text-warm-600"> This website is a demo. It does not represent a real company or real services. Any names, contact details or content shown here are illustrative only. </p><p class="mt-3 text-sm leading-relaxed text-warm-600"> Built by <a href="https://fig.ltd.uk" target="_blank" rel="noopener" class="font-semibold text-accent-400 underline underline-offset-2 hover:text-accent-500 transition-colors">Fig Limited</a>. </p><button type="button" class="mt-6 w-full rounded-lg bg-warm-900 px-4 py-2.5 text-sm font-semibold text-warm-50 hover:bg-warm-800 transition-colors"> I understand </button></div></div>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DemoDisclaimer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/Partials/Footer.vue
var _sfc_main = {
	__name: "Footer",
	__ssrInlineRender: true,
	props: { navLinks: { type: Array } },
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "bg-warm-900 text-white" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"><div class="grid md:grid-cols-4 gap-10 mb-10"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-4"><img src="/media/logo.svg" alt="Acme Coffee Roasters Logo" class="h-14 w-auto brightness-0 invert opacity-90"><div><p class="font-semibold text-white font-display">Acme</p><p class="text-sm text-brand-300 font-display">Coffee Roasters</p></div></div><p class="text-white/60 text-sm leading-relaxed max-w-xs"> Independent speciality coffee roasters. Small-batch beans, roasted to order and delivered fresh to your door. </p></div><div><p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</p><ul class="space-y-2"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link) => {
				_push(`<li><a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="text-white/60 text-sm hover:text-white transition-colors">${(0, server_renderer_exports.ssrInterpolate)(link.label)}</a></li>`);
			});
			_push(`<!--]--></ul></div><div><p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Get in Touch</p><ul class="space-y-2 text-sm text-white/60 mb-6"><li><a${(0, server_renderer_exports.ssrRenderAttr)("href", "tel:" + (0, vue_exports.unref)(page).props.site.telephone)} class="hover:text-white transition-colors">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.site.telephone)}</a></li><li><a${(0, server_renderer_exports.ssrRenderAttr)("href", "mailto:" + (0, vue_exports.unref)(page).props.site.email)} class="hover:text-white transition-colors">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.site.email)}</a></li><li class="text-white/40 text-xs pt-1">${(0, vue_exports.unref)(page).props.site.opening_times ?? ""}</li></ul><p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">Follow Us</p><div class="flex gap-3"><a${(0, server_renderer_exports.ssrRenderAttr)("href", (0, vue_exports.unref)(page).props.site.social?.instagram)} target="_blank" rel="noopener" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-500/50 transition-colors" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a><a${(0, server_renderer_exports.ssrRenderAttr)("href", (0, vue_exports.unref)(page).props.site.social?.facebook)} target="_blank" rel="noopener" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2]/50 transition-colors" aria-label="Facebook"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a${(0, server_renderer_exports.ssrRenderAttr)("href", (0, vue_exports.unref)(page).props.site.social?.tiktok)} target="_blank" rel="noopener" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="TikTok"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69z"></path></svg></a></div></div></div><div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40"><p> © ${(0, server_renderer_exports.ssrInterpolate)((/* @__PURE__ */ new Date()).getFullYear())} <a href="https://fig.ltd.uk" target="_blank" rel="noopener" class="hover:text-white/70 transition-colors">Fig Limited</a>. All rights reserved. </p><div class="flex gap-5"><a href="#" class="hover:text-white/70 transition-colors">Privacy Policy</a><a href="#" class="hover:text-white/70 transition-colors">Terms of Use</a></div></div></div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, null, null, _parent));
			_push(`</footer>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$3 as n, _sfc_main as t };
