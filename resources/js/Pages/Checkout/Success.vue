<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const page = usePage();
const navLinks = page.props.site.nav_links;

defineProps({
    sessionId: { type: String, default: null },
});
</script>

<template>
    <Head title="Thank you — Acme Coffee Roasters" />

    <div class="font-sans antialiased text-warm-800 bg-white min-h-screen flex flex-col">
        <Header :navLinks="navLinks" />

        <section class="flex-1 flex items-center justify-center px-4 py-20 bg-warm-50">
            <div class="w-full max-w-lg text-center bg-white border border-warm-200 rounded-2xl shadow-sm p-10">
                <div class="mx-auto w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h1 class="font-display text-2xl font-extrabold text-warm-900 mb-3">Thank you for your order!</h1>
                <p class="text-warm-500 leading-relaxed mb-8">
                    Your payment was successful and a confirmation is on its way to your inbox.
                    We'll get your coffee roasted and on its way to you shortly. ☕
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <Link href="/shop"
                          class="px-6 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm"
                          style="background: linear-gradient(135deg, #6f4422, #2a190e)">
                        Continue shopping
                    </Link>
                    <Link v-if="page.props.auth?.user" :href="route('account.billing')"
                          class="px-6 py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors">
                        View my billing
                    </Link>
                    <Link v-else href="/"
                          class="px-6 py-3 rounded-xl text-sm font-bold border-2 border-warm-200 text-warm-600 hover:border-brand-300 transition-colors">
                        Back to home
                    </Link>
                </div>
            </div>
        </section>

        <Footer :navLinks="navLinks" />
    </div>
</template>
