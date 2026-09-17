import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Components/InputError.vue
var _sfc_main = {
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="text-sm text-red-600 dark:text-red-400">${(0, server_renderer_exports.ssrInterpolate)(__props.message)}</p></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
