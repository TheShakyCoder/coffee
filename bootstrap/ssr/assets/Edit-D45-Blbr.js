import { i as useForm, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/MenuItem/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		menuItem: {
			type: Object,
			required: true
		},
		topLevelItems: {
			type: Array,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const itemType = (0, vue_exports.ref)(props.menuItem.href ? "link" : "submenu");
		const form = useForm({
			label: props.menuItem.label,
			href: props.menuItem.href || "",
			parent_id: props.menuItem.parent_id || null,
			type: itemType.value
		});
		const showHref = (0, vue_exports.computed)(() => form.data().type === "link");
		function submit() {
			if (form.data().type === "submenu") form.href = null;
			form.patch(route("internal.menu-items.update", props.menuItem.id));
		}
		function deleteItem() {
			if (!confirm("Delete this menu item?")) return;
			router.delete(route("internal.menu-items.destroy", props.menuItem.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({ title: "Menu Builder" }, _attrs), {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-3xl font-bold text-warm-900"${_scopeId}>Edit Menu Item</h1>`);
					else return [(0, vue_exports.createVNode)("h1", { class: "text-3xl font-bold text-warm-900" }, "Edit Menu Item")];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="max-w-2xl bg-white rounded-2xl border border-warm-200 p-8 space-y-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-2"${_scopeId}>Label *</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).label)} type="text" placeholder="e.g., Services" class="w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.label) _push(`<p class="text-red-600 text-xs mt-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.label)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-3"${_scopeId}>Type *</label><div class="flex gap-4"${_scopeId}><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).type, "link")) ? " checked" : ""} type="radio" value="link" class="w-4 h-4"${_scopeId}><span class="text-sm text-warm-700"${_scopeId}>Link</span></label><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).type, "submenu")) ? " checked" : ""} type="radio" value="submenu" class="w-4 h-4"${_scopeId}><span class="text-sm text-warm-700"${_scopeId}>Submenu Container</span></label></div></div>`);
						if (showHref.value) {
							_push(`<div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-2"${_scopeId}>URL *</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).href)} type="text" placeholder="e.g., /services or https://example.com" class="w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}>`);
							if ((0, vue_exports.unref)(form).errors.href) _push(`<p class="text-red-600 text-xs mt-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.href)}</p>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex gap-3 pt-4"${_scopeId}><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"${_scopeId}> Update Item </button><button type="button" class="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"${_scopeId}> Delete </button>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: "/internal/menu-items",
							class: "px-6 py-2.5 border-2 border-warm-200 text-warm-700 font-semibold rounded-xl hover:border-warm-300 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [(0, vue_exports.createTextVNode)(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [(0, vue_exports.createVNode)("form", {
						onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
						class: "max-w-2xl bg-white rounded-2xl border border-warm-200 p-8 space-y-6"
					}, [
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", { class: "block text-sm font-semibold text-warm-900 mb-2" }, "Label *"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).label = $event,
								type: "text",
								placeholder: "e.g., Services",
								class: "w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).label]]),
							(0, vue_exports.unref)(form).errors.label ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "text-red-600 text-xs mt-1"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.label), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]),
						(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-sm font-semibold text-warm-900 mb-3" }, "Type *"), (0, vue_exports.createVNode)("div", { class: "flex gap-4" }, [(0, vue_exports.createVNode)("label", { class: "flex items-center gap-2 cursor-pointer" }, [(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).type = $event,
							type: "radio",
							value: "link",
							class: "w-4 h-4"
						}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelRadio, (0, vue_exports.unref)(form).type]]), (0, vue_exports.createVNode)("span", { class: "text-sm text-warm-700" }, "Link")]), (0, vue_exports.createVNode)("label", { class: "flex items-center gap-2 cursor-pointer" }, [(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).type = $event,
							type: "radio",
							value: "submenu",
							class: "w-4 h-4"
						}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelRadio, (0, vue_exports.unref)(form).type]]), (0, vue_exports.createVNode)("span", { class: "text-sm text-warm-700" }, "Submenu Container")])])]),
						showHref.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", { key: 0 }, [
							(0, vue_exports.createVNode)("label", { class: "block text-sm font-semibold text-warm-900 mb-2" }, "URL *"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).href = $event,
								type: "text",
								placeholder: "e.g., /services or https://example.com",
								class: "w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).href]]),
							(0, vue_exports.unref)(form).errors.href ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "text-red-600 text-xs mt-1"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.href), 1)) : (0, vue_exports.createCommentVNode)("", true)
						])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", { class: "flex gap-3 pt-4" }, [
							(0, vue_exports.createVNode)("button", {
								type: "submit",
								disabled: (0, vue_exports.unref)(form).processing,
								class: "px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"
							}, " Update Item ", 8, ["disabled"]),
							(0, vue_exports.createVNode)("button", {
								type: "button",
								onClick: deleteItem,
								class: "px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
							}, " Delete "),
							(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
								href: "/internal/menu-items",
								class: "px-6 py-2.5 border-2 border-warm-200 text-warm-700 font-semibold rounded-xl hover:border-warm-300 transition-colors"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Cancel ")]),
								_: 1
							})
						])
					], 32)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/MenuItem/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
