<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const page = usePage();
const navLinks = page.props.site.nav_links;

defineProps({
    hasStripe:    { type: Boolean, default: false },
    subscription: { type: Object, default: null },
});
</script>

<template>
    <Head title="Billing — Acme Coffee Roasters" />

    <div class="font-sans antialiased text-warm-800 bg-white min-h-screen flex flex-col">
        <Header :navLinks="navLinks" />

        <section class="flex-1 bg-warm-50 py-16">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 class="font-display text-2xl font-extrabold text-warm-900 mb-1">Your billing</h1>
                <p class="text-warm-500 text-sm mb-8">Manage your coffee subscription and payment details.</p>

                <div v-if="page.props.flash?.error"
                     class="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {{ page.props.flash.error }}
                </div>

                <!-- Subscription card -->
                <div class="bg-white border border-warm-200 rounded-2xl shadow-sm p-7 mb-6">
                    <h2 class="font-semibold text-warm-900 mb-4">Subscription</h2>

                    <template v-if="subscription">
                        <div class="flex flex-wrap items-center gap-3 mb-4">
                            <span v-if="subscription.active && !subscription.onGracePeriod"
                                  class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Active</span>
                            <span v-else-if="subscription.onGracePeriod"
                                  class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Cancelling</span>
                            <span v-else
                                  class="px-2.5 py-1 rounded-full text-xs font-semibold bg-warm-100 text-warm-600">Inactive</span>
                            <span v-if="subscription.plan" class="text-sm text-warm-600">
                                {{ subscription.plan.name }} — {{ subscription.plan.price }} / {{ subscription.plan.interval }}
                            </span>
                        </div>
                        <p v-if="subscription.onGracePeriod && subscription.endsAt" class="text-sm text-warm-500">
                            Your subscription is set to end on <strong>{{ subscription.endsAt }}</strong>. You'll keep
                            receiving coffee until then.
                        </p>
                    </template>

                    <div v-else class="text-sm text-warm-500">
                        <p class="mb-4">You don't have an active subscription yet.</p>
                        <Link :href="route('subscriptions.index')"
                              class="inline-block px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                            Browse subscription plans
                        </Link>
                    </div>
                </div>

                <!-- Stripe portal -->
                <div class="bg-white border border-warm-200 rounded-2xl shadow-sm p-7">
                    <h2 class="font-semibold text-warm-900 mb-2">Payment &amp; invoices</h2>
                    <p class="text-sm text-warm-500 mb-5">
                        Update your card, download invoices, or change/cancel your subscription in Stripe's secure
                        customer portal.
                    </p>
                    <!-- Full-page navigation: this route redirects out to Stripe. -->
                    <a v-if="hasStripe" :href="route('account.billing.portal')"
                       class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all shadow-sm"
                       style="background: linear-gradient(135deg, #6f4422, #2a190e)">
                        Manage billing in Stripe
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </a>
                    <p v-else class="text-sm text-warm-400">No billing history yet — it'll appear here after your first order.</p>
                </div>
            </div>
        </section>

        <Footer :navLinks="navLinks" />
    </div>
</template>
