<script setup>
</script>

<template>
    <section id="subscriptions" class="relative py-24 overflow-hidden"
        style="background: linear-gradient(135deg, #6f4422 0%, #57341b 50%, #2a190e 100%);">
        <!-- Decorative blobs -->
        <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent-300/15 blur-3xl"></div>

        <!-- Floating coffee -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <span class="absolute top-[10%] left-[5%] text-7xl opacity-10 animate-float rotate-12">☕</span>
            <span class="absolute bottom-[10%] right-[8%] text-7xl opacity-10 animate-float-delayed -rotate-12">🫘</span>
            <span class="absolute top-[50%] left-[50%] text-9xl opacity-[0.05] animate-scale-pulse">📦</span>
        </div>

        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white/90 mb-6 border border-white/20 uppercase tracking-widest">
                Coffee Subscriptions
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Never run out of <span class="text-accent-300">fresh coffee</span>
            </h2>
            <p class="text-white/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Pick your beans, grind and delivery schedule, and we'll roast to order and post it to
                your door. It's our best value way to drink great coffee — and you can pause, swap or
                cancel any time.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/subscriptions"
                    class="group px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl hover:bg-accent-300 hover:text-brand-900 transition-all duration-200 shadow-xl shadow-black/10 text-sm inline-flex items-center gap-2">
                    Start a Subscription
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
                <a href="/shop"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/25 text-sm">
                    ☕ Shop One-Off Bags
                </a>
            </div>
        </div>
    </section>
</template>
