<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const page = usePage();
const navLinks = page.props.site.nav_links;

defineProps({
    products:    { type: Array, default: () => [] },
    canLogin:    { type: Boolean },
    canRegister: { type: Boolean },
});
</script>

<template>
    <Head title="Shop Coffee — Acme Coffee Roasters" />

    <div class="font-sans antialiased text-warm-800 bg-white">
        <Header :navLinks="navLinks" :canLogin="canLogin" :canRegister="canRegister" />

        <!-- Hero band -->
        <section class="relative overflow-hidden text-white"
            style="background: linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%);">
            <div class="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <nav class="flex items-center gap-2 text-white/50 text-xs mb-5">
                    <Link href="/" class="hover:text-white transition-colors">Home</Link>
                    <span>›</span>
                    <span class="text-white/80">Shop</span>
                </nav>
                <span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border border-white/20 uppercase tracking-widest">
                    Freshly roasted to order
                </span>
                <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Shop our coffee</h1>
                <p class="text-white/75 text-lg max-w-xl leading-relaxed">
                    Single-origin beans and signature blends, roasted in small batches and shipped at their freshest.
                    Or <Link href="/subscriptions" class="underline underline-offset-2 hover:text-white">save with a subscription</Link>.
                </p>
            </div>
            <div class="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                    <path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"/>
                </svg>
            </div>
        </section>

        <section class="py-16 lg:py-20 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <!-- Flash error -->
                <div v-if="page.props.flash?.error"
                     class="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {{ page.props.flash.error }}
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="product in products" :key="product.id"
                         class="group flex flex-col border border-warm-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-lg transition-all duration-200">

                        <!-- Visual -->
                        <div class="aspect-[4/3] bg-gradient-to-br from-brand-50 to-warm-100 flex items-center justify-center">
                            <span class="text-7xl group-hover:scale-110 transition-transform duration-300">🫘</span>
                        </div>

                        <div class="p-6 flex flex-col flex-1 gap-3">
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">{{ product.origin }}</span>
                                <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">{{ product.roast }}</span>
                            </div>

                            <h2 class="font-display font-semibold text-warm-900 leading-snug">{{ product.name }}</h2>
                            <p class="text-xs font-medium text-brand-600">{{ product.tasting }}</p>
                            <p class="text-sm text-warm-500 leading-relaxed flex-1">{{ product.description }}</p>

                            <div class="flex items-baseline justify-between pt-1">
                                <p class="font-display text-xl font-bold text-warm-900">{{ product.price }}</p>
                                <p class="text-xs text-warm-400">{{ product.weight }}</p>
                            </div>

                            <!-- Buy form (full-page POST → Stripe Checkout) -->
                            <form v-if="product.available" :action="route('shop.checkout')" method="POST" class="mt-2 flex gap-2">
                                <input type="hidden" name="_token" :value="page.props.csrf_token" />
                                <input type="hidden" name="product" :value="product.id" />
                                <select name="quantity"
                                        class="w-16 px-2 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400">
                                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                                </select>
                                <button type="submit"
                                        class="flex-1 py-2.5 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-sm"
                                        style="background: linear-gradient(135deg, #6f4422, #2a190e)">
                                    Buy now
                                </button>
                            </form>
                            <button v-else type="button" disabled
                                    class="mt-2 w-full py-2.5 text-sm font-semibold rounded-xl bg-warm-100 text-warm-400 cursor-not-allowed">
                                Coming soon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer :navLinks="navLinks" />
    </div>
</template>
