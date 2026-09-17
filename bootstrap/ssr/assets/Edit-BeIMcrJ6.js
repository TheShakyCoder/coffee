import { i as useForm, n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/Meetings/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		meeting: {
			type: Object,
			required: true
		},
		activities: {
			type: Array,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		function toLocalInput(iso) {
			if (!iso) return "";
			return new Date(iso).toISOString().slice(0, 16);
		}
		const form = useForm({
			title: props.meeting.title,
			activity_id: props.meeting.activity_id ?? "",
			starts_at: toLocalInput(props.meeting.starts_at),
			ends_at: toLocalInput(props.meeting.ends_at),
			location: props.meeting.location ?? "",
			description: props.meeting.description ?? "",
			recurrence: props.meeting.recurrence ?? "",
			recurrence_ends_at: props.meeting.recurrence_ends_at ?? ""
		});
		function submit() {
			form.transform((data) => ({
				...data,
				activity_id: data.activity_id || null,
				recurrence: data.recurrence || null,
				recurrence_ends_at: data.recurrence_ends_at || null,
				ends_at: data.ends_at || null
			})).put(route("internal.meetings.update", props.meeting.id));
		}
		function destroy() {
			if (confirm("Delete this meeting?")) router.delete(route("internal.meetings.destroy", props.meeting.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: `Edit: ${__props.meeting.title}` }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("internal.meetings.index"),
							class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg>`);
								else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M15 19l-7-7 7-7"
								})]))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Edit Meeting</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.meeting.title)}</p></div></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-3" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
						href: _ctx.route("internal.meetings.index"),
						class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
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
							d: "M15 19l-7-7 7-7"
						})]))]),
						_: 1
					}, 8, ["href"]), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Edit Meeting"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, (0, vue_exports.toDisplayString)(__props.meeting.title), 1)])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="max-w-2xl"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Title</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).title)} type="text" required class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.title ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.title) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.title)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Activity (optional)</label><select class="w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"${_scopeId}><option value=""${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).activity_id) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).activity_id, "") : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).activity_id, "")) ? " selected" : ""}${_scopeId}>None</option><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(__props.activities, (a) => {
							_push(`<option${(0, server_renderer_exports.ssrRenderAttr)("value", a.id)}${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).activity_id) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).activity_id, a.id) : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).activity_id, a.id)) ? " selected" : ""}${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(a.title)}</option>`);
						});
						_push(`<!--]--></select></div><p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2"${_scopeId}>All times are in UTC, not British Summer Time (BST). During BST, subtract one hour from local time.</p><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Starts at (UTC)</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).starts_at)} type="datetime-local" required class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.starts_at ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.starts_at) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.starts_at)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Ends at (UTC, optional)</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).ends_at)} type="datetime-local" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.ends_at ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if ((0, vue_exports.unref)(form).errors.ends_at) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).errors.ends_at)}</p>`);
						else _push(`<!---->`);
						_push(`</div></div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Location (optional)</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).location)} type="text" placeholder="e.g. Main Hall" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.location ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Description (optional)</label><textarea rows="3" class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(form).errors.description ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).description)}</textarea></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Recurrence (optional)</label><select class="w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"${_scopeId}><option value=""${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).recurrence) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).recurrence, "") : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).recurrence, "")) ? " selected" : ""}${_scopeId}>None</option><option value="weekly"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).recurrence) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).recurrence, "weekly") : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).recurrence, "weekly")) ? " selected" : ""}${_scopeId}>Weekly</option><option value="fortnightly"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).recurrence) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).recurrence, "fortnightly") : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).recurrence, "fortnightly")) ? " selected" : ""}${_scopeId}>Fortnightly</option><option value="monthly"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(Array.isArray((0, vue_exports.unref)(form).recurrence) ? (0, server_renderer_exports.ssrLooseContain)((0, vue_exports.unref)(form).recurrence, "monthly") : (0, server_renderer_exports.ssrLooseEqual)((0, vue_exports.unref)(form).recurrence, "monthly")) ? " selected" : ""}${_scopeId}>Monthly</option></select></div>`);
						if ((0, vue_exports.unref)(form).recurrence) _push(`<div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Recurrence ends</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).recurrence_ends_at)} type="date" class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}></div>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex gap-3 pt-2"${_scopeId}><button type="submit"${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save Changes")}</button>`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							href: _ctx.route("internal.meetings.index"),
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [(0, vue_exports.createTextVNode)(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<button type="button" class="px-6 py-2.5 text-sm font-medium text-rose-600 border border-rose-200 rounded-xl hover:bg-rose-50 transition-colors ml-auto"${_scopeId}> Delete </button></div></div></form>`);
					} else return [(0, vue_exports.createVNode)("form", {
						onSubmit: (0, vue_exports.withModifiers)(submit, ["prevent"]),
						class: "max-w-2xl"
					}, [(0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5" }, [
						(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Title"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).title = $event,
								type: "text",
								required: "",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", (0, vue_exports.unref)(form).errors.title ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).title]]),
							(0, vue_exports.unref)(form).errors.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.title), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]),
						(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Activity (optional)"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("select", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).activity_id = $event,
							class: "w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"
						}, [(0, vue_exports.createVNode)("option", { value: "" }, "None"), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.activities, (a) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("option", {
								key: a.id,
								value: a.id
							}, (0, vue_exports.toDisplayString)(a.title), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vue_exports.vModelSelect, (0, vue_exports.unref)(form).activity_id]])]),
						(0, vue_exports.createVNode)("p", { class: "text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2" }, "All times are in UTC, not British Summer Time (BST). During BST, subtract one hour from local time."),
						(0, vue_exports.createVNode)("div", { class: "grid grid-cols-2 gap-4" }, [(0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Starts at (UTC)"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).starts_at = $event,
								type: "datetime-local",
								required: "",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", (0, vue_exports.unref)(form).errors.starts_at ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).starts_at]]),
							(0, vue_exports.unref)(form).errors.starts_at ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.starts_at), 1)) : (0, vue_exports.createCommentVNode)("", true)
						]), (0, vue_exports.createVNode)("div", null, [
							(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Ends at (UTC, optional)"),
							(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).ends_at = $event,
								type: "datetime-local",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", (0, vue_exports.unref)(form).errors.ends_at ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).ends_at]]),
							(0, vue_exports.unref)(form).errors.ends_at ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).errors.ends_at), 1)) : (0, vue_exports.createCommentVNode)("", true)
						])]),
						(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Location (optional)"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).location = $event,
							type: "text",
							placeholder: "e.g. Main Hall",
							class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", (0, vue_exports.unref)(form).errors.location ? "border-rose-300" : "border-warm-200"]
						}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).location]])]),
						(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Description (optional)"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("textarea", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).description = $event,
							rows: "3",
							class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", (0, vue_exports.unref)(form).errors.description ? "border-rose-300" : "border-warm-200"]
						}, null, 10, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).description]])]),
						(0, vue_exports.createVNode)("div", { class: "grid grid-cols-2 gap-4" }, [(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Recurrence (optional)"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("select", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).recurrence = $event,
							class: "w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"
						}, [
							(0, vue_exports.createVNode)("option", { value: "" }, "None"),
							(0, vue_exports.createVNode)("option", { value: "weekly" }, "Weekly"),
							(0, vue_exports.createVNode)("option", { value: "fortnightly" }, "Fortnightly"),
							(0, vue_exports.createVNode)("option", { value: "monthly" }, "Monthly")
						], 8, ["onUpdate:modelValue"]), [[vue_exports.vModelSelect, (0, vue_exports.unref)(form).recurrence]])]), (0, vue_exports.unref)(form).recurrence ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", { key: 0 }, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Recurrence ends"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
							"onUpdate:modelValue": ($event) => (0, vue_exports.unref)(form).recurrence_ends_at = $event,
							type: "date",
							class: "w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
						}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, (0, vue_exports.unref)(form).recurrence_ends_at]])])) : (0, vue_exports.createCommentVNode)("", true)]),
						(0, vue_exports.createVNode)("div", { class: "flex gap-3 pt-2" }, [
							(0, vue_exports.createVNode)("button", {
								type: "submit",
								disabled: (0, vue_exports.unref)(form).processing,
								class: "px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
							}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(form).processing ? "Saving…" : "Save Changes"), 9, ["disabled"]),
							(0, vue_exports.createVNode)((0, vue_exports.unref)(link_default), {
								href: _ctx.route("internal.meetings.index"),
								class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Cancel ")]),
								_: 1
							}, 8, ["href"]),
							(0, vue_exports.createVNode)("button", {
								type: "button",
								onClick: destroy,
								class: "px-6 py-2.5 text-sm font-medium text-rose-600 border border-rose-200 rounded-xl hover:bg-rose-50 transition-colors ml-auto"
							}, " Delete ")
						])
					])], 32)];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Meetings/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
