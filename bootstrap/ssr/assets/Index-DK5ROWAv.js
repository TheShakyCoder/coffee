import { a as usePage, c as axios, n as head_default, o as vue_exports, r as link_default, s as router, t as server_renderer_exports } from "../ssr.js";
import { t as _sfc_main$1 } from "./Index-CyNGjHk2.js";
//#region resources/js/Pages/Internal/Media/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		media: {
			type: Object,
			required: true
		},
		search: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const uploading = (0, vue_exports.ref)(false);
		const uploadQueue = (0, vue_exports.ref)([]);
		const dropActive = (0, vue_exports.ref)(false);
		function onFilePick(e) {
			uploadFiles([...e.target.files]);
			e.target.value = "";
		}
		function onDrop(e) {
			dropActive.value = false;
			uploadFiles([...e.dataTransfer.files]);
		}
		async function uploadFiles(files) {
			uploading.value = true;
			uploadQueue.value = files.map((f) => ({
				name: f.name,
				progress: 0,
				error: null
			}));
			const formData = new FormData();
			files.forEach((f) => formData.append("files[]", f));
			try {
				await axios.post("/internal/media", formData, {
					headers: { "Content-Type": "multipart/form-data" },
					onUploadProgress: (e) => {
						const pct = Math.round(e.loaded / e.total * 100);
						uploadQueue.value.forEach((q) => q.progress = pct);
					}
				});
				router.reload({ only: ["media"] });
			} catch (err) {
				console.error("Upload failed:", err);
				const errors = err.response?.data?.errors?.["files.0"] ?? ["Upload failed"];
				uploadQueue.value.forEach((q) => q.error = errors[0]);
			} finally {
				uploading.value = false;
				setTimeout(() => uploadQueue.value = [], 2e3);
			}
		}
		const selected = (0, vue_exports.ref)(null);
		const altDraft = (0, vue_exports.ref)("");
		function select(item) {
			selected.value = item;
			altDraft.value = item.alt ?? "";
		}
		function deselect() {
			selected.value = null;
		}
		async function saveAlt() {
			await axios.patch(`/internal/media/${selected.value.id}`, { alt: altDraft.value });
			selected.value.alt = altDraft.value;
		}
		function confirmDelete(item) {
			if (!confirm(`Delete "${item.filename}"? This cannot be undone.`)) return;
			router.delete(`/internal/media/${item.id}`, { onSuccess: () => {
				selected.value = null;
			} });
		}
		const searchQuery = (0, vue_exports.ref)(props.search);
		function doSearch() {
			router.get("/internal/media", { search: searchQuery.value }, {
				preserveState: true,
				replace: true
			});
		}
		function isImage(mime) {
			return mime?.startsWith("image/");
		}
		function fileSize(bytes) {
			if (bytes < 1024) return bytes + " B";
			if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
			return (bytes / 1048576).toFixed(1) + " MB";
		}
		function copyUrl(url) {
			navigator.clipboard.writeText(url);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: "Media Library" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { title: "Media Library" }, {
				header: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Media Library</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.media.total)} file${(0, server_renderer_exports.ssrInterpolate)(__props.media.total !== 1 ? "s" : "")}</p></div><label class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm cursor-pointer"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"${_scopeId}></path></svg> Upload <input type="file" multiple accept="image/*,.pdf" class="sr-only"${_scopeId}></label></div>`);
					else return [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Media Library"), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500 mt-0.5" }, (0, vue_exports.toDisplayString)(__props.media.total) + " file" + (0, vue_exports.toDisplayString)(__props.media.total !== 1 ? "s" : ""), 1)]), (0, vue_exports.createVNode)("label", { class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm cursor-pointer" }, [
						((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: "w-4 h-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
						})])),
						(0, vue_exports.createTextVNode)(" Upload "),
						(0, vue_exports.createVNode)("input", {
							type: "file",
							multiple: "",
							accept: "image/*,.pdf",
							class: "sr-only",
							onChange: onFilePick
						}, null, 32)
					])])];
				}),
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (uploadQueue.value.length) {
							_push(`<div class="mb-6 space-y-2"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(uploadQueue.value, (q) => {
								_push(`<div class="flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm"${_scopeId}><svg class="w-4 h-4 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg><span class="flex-1 truncate text-warm-700"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(q.name)}</span>`);
								if (q.error) _push(`<span class="text-rose-600 text-xs"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(q.error)}</span>`);
								else _push(`<div class="w-32 h-1.5 bg-warm-100 rounded-full overflow-hidden"${_scopeId}><div class="h-full bg-brand-500 transition-all duration-300" style="${(0, server_renderer_exports.ssrRenderStyle)({ width: q.progress + "%" })}"${_scopeId}></div></div>`);
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex gap-6 items-start"${_scopeId}><div class="flex-1 min-w-0"${_scopeId}><div class="mb-4 flex gap-2"${_scopeId}><input${(0, server_renderer_exports.ssrRenderAttr)("value", searchQuery.value)} type="search" placeholder="Search by filename…" class="flex-1 px-4 py-2 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"${_scopeId}><button class="px-4 py-2 text-sm font-medium bg-white border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors text-warm-600"${_scopeId}> Search </button></div><div class="relative"${_scopeId}>`);
						if (dropActive.value) _push(`<div class="absolute inset-0 z-10 flex items-center justify-center bg-brand-50/90 border-2 border-dashed border-brand-400 rounded-2xl"${_scopeId}><p class="text-brand-600 font-semibold text-sm"${_scopeId}>Drop files to upload</p></div>`);
						else _push(`<!---->`);
						if (!__props.media.data.length) _push(`<div class="flex flex-col items-center justify-center py-24 bg-warm-50 rounded-2xl border border-warm-200 text-center"${_scopeId}><svg class="w-12 h-12 text-warm-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg><p class="text-sm text-warm-500"${_scopeId}>No files yet. Upload or drag &amp; drop.</p></div>`);
						else {
							_push(`<div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.media.data, (item) => {
								_push(`<button type="button" class="${(0, server_renderer_exports.ssrRenderClass)([selected.value?.id === item.id ? "border-brand-500 shadow-md" : "border-warm-200 hover:border-brand-300", "group relative aspect-square rounded-xl overflow-hidden border-2 transition-all"])}"${_scopeId}>`);
								if (isImage(item.mime_type)) _push(`<img${(0, server_renderer_exports.ssrRenderAttr)("src", item.url)}${(0, server_renderer_exports.ssrRenderAttr)("alt", item.alt ?? item.filename)} class="w-full h-full object-cover" loading="lazy"${_scopeId}>`);
								else _push(`<div class="w-full h-full bg-warm-100 flex flex-col items-center justify-center gap-1 p-2"${_scopeId}><svg class="w-8 h-8 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><span class="text-xs text-warm-500 truncate w-full text-center"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.filename)}</span></div>`);
								if (selected.value?.id === item.id) _push(`<div class="absolute top-1.5 right-1.5 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center"${_scopeId}><svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"${_scopeId}></path></svg></div>`);
								else _push(`<!---->`);
								_push(`</button>`);
							});
							_push(`<!--]--></div>`);
						}
						_push(`</div>`);
						if (__props.media.last_page > 1) {
							_push(`<div class="mt-6 flex items-center justify-center gap-2"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.media.links, (link) => {
								_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
									key: link.label,
									href: link.url ?? "#",
									class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 pointer-events-none"]
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (selected.value) {
							_push(`<aside class="w-64 shrink-0 space-y-4"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="aspect-video bg-warm-100 flex items-center justify-center"${_scopeId}>`);
							if (isImage(selected.value.mime_type)) _push(`<img${(0, server_renderer_exports.ssrRenderAttr)("src", selected.value.url)}${(0, server_renderer_exports.ssrRenderAttr)("alt", selected.value.alt ?? selected.value.filename)} class="max-w-full max-h-full object-contain"${_scopeId}>`);
							else _push(`<svg class="w-12 h-12 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg>`);
							_push(`</div><div class="p-4 space-y-3"${_scopeId}><p class="text-xs font-medium text-warm-900 break-all"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(selected.value.filename)}</p><div class="text-xs text-warm-500 space-y-1"${_scopeId}><p${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(fileSize(selected.value.size))}</p><p${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(selected.value.mime_type)}</p></div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1"${_scopeId}>Alt text</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", altDraft.value)} type="text" placeholder="Describe this image…" class="w-full px-3 py-1.5 text-xs border border-warm-200 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}></div><button class="w-full px-3 py-1.5 text-xs font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"${_scopeId}> Save alt text </button><button class="w-full px-3 py-1.5 text-xs font-medium border border-warm-200 text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"${_scopeId}> Copy URL </button><button class="w-full px-3 py-1.5 text-xs font-medium border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"${_scopeId}> Delete file </button></div></div><button class="text-xs text-warm-400 hover:text-warm-600 transition-colors"${_scopeId}> ← Deselect </button></aside>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [
						(0, vue_exports.unref)(page).props.flash.success ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"
						}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: "w-4 h-4 shrink-0",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						})])), (0, vue_exports.createTextVNode)(" " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).props.flash.success), 1)])) : (0, vue_exports.createCommentVNode)("", true),
						uploadQueue.value.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 1,
							class: "mb-6 space-y-2"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(uploadQueue.value, (q) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: q.name,
								class: "flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm"
							}, [
								((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-4 h-4 text-warm-400 shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								})])),
								(0, vue_exports.createVNode)("span", { class: "flex-1 truncate text-warm-700" }, (0, vue_exports.toDisplayString)(q.name), 1),
								q.error ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 0,
									class: "text-rose-600 text-xs"
								}, (0, vue_exports.toDisplayString)(q.error), 1)) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									class: "w-32 h-1.5 bg-warm-100 rounded-full overflow-hidden"
								}, [(0, vue_exports.createVNode)("div", {
									class: "h-full bg-brand-500 transition-all duration-300",
									style: { width: q.progress + "%" }
								}, null, 4)]))
							]);
						}), 128))])) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", { class: "flex gap-6 items-start" }, [(0, vue_exports.createVNode)("div", { class: "flex-1 min-w-0" }, [
							(0, vue_exports.createVNode)("div", { class: "mb-4 flex gap-2" }, [(0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
								"onUpdate:modelValue": ($event) => searchQuery.value = $event,
								onKeydown: (0, vue_exports.withKeys)(doSearch, ["enter"]),
								type: "search",
								placeholder: "Search by filename…",
								class: "flex-1 px-4 py-2 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"
							}, null, 40, ["onUpdate:modelValue"]), [[vue_exports.vModelText, searchQuery.value]]), (0, vue_exports.createVNode)("button", {
								onClick: doSearch,
								class: "px-4 py-2 text-sm font-medium bg-white border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors text-warm-600"
							}, " Search ")]),
							(0, vue_exports.createVNode)("div", {
								class: "relative",
								onDragover: (0, vue_exports.withModifiers)(($event) => dropActive.value = true, ["prevent"]),
								onDragleave: (0, vue_exports.withModifiers)(($event) => dropActive.value = false, ["prevent"]),
								onDrop: (0, vue_exports.withModifiers)(onDrop, ["prevent"])
							}, [dropActive.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								class: "absolute inset-0 z-10 flex items-center justify-center bg-brand-50/90 border-2 border-dashed border-brand-400 rounded-2xl"
							}, [(0, vue_exports.createVNode)("p", { class: "text-brand-600 font-semibold text-sm" }, "Drop files to upload")])) : (0, vue_exports.createCommentVNode)("", true), !__props.media.data.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 1,
								class: "flex flex-col items-center justify-center py-24 bg-warm-50 rounded-2xl border border-warm-200 text-center"
							}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
								class: "w-12 h-12 text-warm-300 mb-3",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [(0, vue_exports.createVNode)("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "1.5",
								d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							})])), (0, vue_exports.createVNode)("p", { class: "text-sm text-warm-500" }, "No files yet. Upload or drag & drop.")])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								class: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
							}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.media.data, (item) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("button", {
									key: item.id,
									type: "button",
									onClick: ($event) => select(item),
									class: ["group relative aspect-square rounded-xl overflow-hidden border-2 transition-all", selected.value?.id === item.id ? "border-brand-500 shadow-md" : "border-warm-200 hover:border-brand-300"]
								}, [isImage(item.mime_type) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("img", {
									key: 0,
									src: item.url,
									alt: item.alt ?? item.filename,
									class: "w-full h-full object-cover",
									loading: "lazy"
								}, null, 8, ["src", "alt"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									class: "w-full h-full bg-warm-100 flex flex-col items-center justify-center gap-1 p-2"
								}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-8 h-8 text-warm-400",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
									d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								})])), (0, vue_exports.createVNode)("span", { class: "text-xs text-warm-500 truncate w-full text-center" }, (0, vue_exports.toDisplayString)(item.filename), 1)])), selected.value?.id === item.id ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									class: "absolute top-1.5 right-1.5 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center"
								}, [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
									class: "w-3 h-3 text-white",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [(0, vue_exports.createVNode)("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "3",
									d: "M5 13l4 4L19 7"
								})]))])) : (0, vue_exports.createCommentVNode)("", true)], 10, ["onClick"]);
							}), 128))]))], 40, ["onDragover", "onDragleave"]),
							__props.media.last_page > 1 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								class: "mt-6 flex items-center justify-center gap-2"
							}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.media.links, (link) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(link_default), {
									key: link.label,
									href: link.url ?? "#",
									innerHTML: link.label,
									class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 pointer-events-none"]
								}, null, 8, [
									"href",
									"innerHTML",
									"class"
								]);
							}), 128))])) : (0, vue_exports.createCommentVNode)("", true)
						]), (0, vue_exports.createVNode)(vue_exports.Transition, {
							"enter-from-class": "opacity-0 translate-x-4",
							"enter-active-class": "transition duration-150",
							"leave-to-class": "opacity-0 translate-x-4",
							"leave-active-class": "transition duration-150"
						}, {
							default: (0, vue_exports.withCtx)(() => [selected.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("aside", {
								key: 0,
								class: "w-64 shrink-0 space-y-4"
							}, [(0, vue_exports.createVNode)("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [(0, vue_exports.createVNode)("div", { class: "aspect-video bg-warm-100 flex items-center justify-center" }, [isImage(selected.value.mime_type) ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("img", {
								key: 0,
								src: selected.value.url,
								alt: selected.value.alt ?? selected.value.filename,
								class: "max-w-full max-h-full object-contain"
							}, null, 8, ["src", "alt"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
								key: 1,
								class: "w-12 h-12 text-warm-300",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [(0, vue_exports.createVNode)("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "1.5",
								d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							})]))]), (0, vue_exports.createVNode)("div", { class: "p-4 space-y-3" }, [
								(0, vue_exports.createVNode)("p", { class: "text-xs font-medium text-warm-900 break-all" }, (0, vue_exports.toDisplayString)(selected.value.filename), 1),
								(0, vue_exports.createVNode)("div", { class: "text-xs text-warm-500 space-y-1" }, [(0, vue_exports.createVNode)("p", null, (0, vue_exports.toDisplayString)(fileSize(selected.value.size)), 1), (0, vue_exports.createVNode)("p", null, (0, vue_exports.toDisplayString)(selected.value.mime_type), 1)]),
								(0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("label", { class: "block text-xs font-semibold text-warm-700 mb-1" }, "Alt text"), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("input", {
									"onUpdate:modelValue": ($event) => altDraft.value = $event,
									type: "text",
									placeholder: "Describe this image…",
									class: "w-full px-3 py-1.5 text-xs border border-warm-200 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
								}, null, 8, ["onUpdate:modelValue"]), [[vue_exports.vModelText, altDraft.value]])]),
								(0, vue_exports.createVNode)("button", {
									onClick: saveAlt,
									class: "w-full px-3 py-1.5 text-xs font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
								}, " Save alt text "),
								(0, vue_exports.createVNode)("button", {
									onClick: ($event) => copyUrl(selected.value.url),
									class: "w-full px-3 py-1.5 text-xs font-medium border border-warm-200 text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"
								}, " Copy URL ", 8, ["onClick"]),
								(0, vue_exports.createVNode)("button", {
									onClick: ($event) => confirmDelete(selected.value),
									class: "w-full px-3 py-1.5 text-xs font-medium border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
								}, " Delete file ", 8, ["onClick"])
							])]), (0, vue_exports.createVNode)("button", {
								onClick: deselect,
								class: "text-xs text-warm-400 hover:text-warm-600 transition-colors"
							}, " ← Deselect ")])) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 1
						})])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Media/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
