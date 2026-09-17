<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const page = usePage();
const navLinks = page.props.site.nav_links;

defineProps({
    plans:       { type: Array, default: () => [] },
    subscribed:  { type: Boolean, default: false },
    currentPlan: { type: String, default: null },
    canLogin:    { type: Boolean },
    canRegister: { type: Boolean },
});
</script>

<template>
    <Head title="Coffee Subscriptions — Acme Coffee Roasters" />

    <div class="font-sans antialiased text-warm-800 bg-white">
        <Header :navLinks="navLinks" :canLogin="canLogin" :canRegister="canRegister" />

        <!-- Hero band -->
        <section class="relative overflow-hidden text-white"
            style="background: linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%);">
            <div class="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
                <span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border border-white/20 uppercase tracking-widest">
                    Our best value
                </span>
                <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Coffee subscriptions</h1>
                <p class="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
                    Freshly roasted coffee on your schedule. Choose a plan, and we'll roast to order and post it to
                    your door — pause, swap or cancel any time.
                </p>
            </div>
            <div class="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                    <path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"/>
                </svg>
            </div>
        </section>

        <section class="py-16 lg:py-20 bg-white">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <!-- Flash messages -->
                <div v-if="page.props.flash?.error"
                     class="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {{ page.props.flash.error }}
                </div>
                <div v-if="subscribed"
                     class="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-center justify-between gap-4">
                    <span>You have an active subscription. 🎉</span>
                    <Link :href="route('account.billing')" class="font-semibold underline underline-offset-2 shrink-0">Manage billing</Link>
                </div>

                <div class="grid gap-6 md:grid-cols-3 items-stretch">
                    <div v-for="plan in plans" :key="plan.id"
                         class="relative flex flex-col rounded-2xl border-2 p-7 transition-all"
                         :class="plan.featured ? 'border-brand-500 shadow-xl shadow-brand-500/10' : 'border-warm-200'">

                        <span v-if="plan.featured"
                              class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                              style="background: linear-gradient(135deg, #6f4422, #2a190e)">
                            Most popular
                        </span>

                        <h2 class="font-display text-xl font-bold text-warm-900">{{ plan.name }}</h2>
                        <p class="mt-2 flex items-baseline gap-1">
                            <span class="font-display text-3xl font-extrabold text-warm-900">{{ plan.price }}</span>
                            <span class="text-sm text-warm-400">/ {{ plan.interval }}</span>
                        </p>
                        <p class="mt-3 text-sm text-warm-500 leading-relaxed">{{ plan.description }}</p>

                        <ul class="mt-5 space-y-2.5 flex-1">
                            <li v-for="feature in plan.features" :key="feature"
                                class="flex items-start gap-2 text-sm text-warm-700">
                                <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ feature }}
                            </li>
                        </ul>

                        <div class="mt-7">
                            <!-- Current plan -->
                            <Link v-if="subscribed && currentPlan === plan.id" :href="route('account.billing')"
                                  class="block text-center py-3 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                                ✓ Your current plan
                            </Link>
                            <!-- Subscribed to a different plan -->
                            <Link v-else-if="subscribed" :href="route('account.billing')"
                                  class="block text-center py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors">
                                Manage in billing
                            </Link>
                            <!-- Not available yet -->
                            <button v-else-if="!plan.available" type="button" disabled
                                    class="w-full py-3 rounded-xl text-sm font-semibold bg-warm-100 text-warm-400 cursor-not-allowed">
                                Coming soon
                            </button>
                            <!-- Logged in → subscribe -->
                            <form v-else-if="page.props.auth?.user" :action="route('subscriptions.checkout')" method="POST">
                                <input type="hidden" name="_token" :value="page.props.csrf_token" />
                                <input type="hidden" name="plan" :value="plan.id" />
                                <button type="submit"
                                        class="w-full py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm"
                                        :style="plan.featured
                                            ? 'background: linear-gradient(135deg, #6f4422, #2a190e)'
                                            : ''"
                                        :class="plan.featured ? '' : 'bg-brand-600 hover:bg-brand-700'">
                                    Subscribe
                                </button>
                            </form>
                            <!-- Guest → log in -->
                            <Link v-else :href="route('login')"
                                  class="block text-center py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                                Log in to subscribe
                            </Link>
                        </div>
                    </div>
                </div>

                <p class="text-center text-xs text-warm-400 mt-10">
                    Prices include free UK delivery. You can manage or cancel your subscription at any time.
                </p>
            </div>
        </section>

        <Footer :navLinks="navLinks" />
    </div>
</template>
