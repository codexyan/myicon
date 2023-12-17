<script setup>
import Hero from '@/components/homepage/hero/Hero.vue';
import Solution from '@/components/homepage/solution/Solution.vue';
import Portofolio from '@/components/homepage/portofolio/Portofolio.vue';
import Testimony from '@/components/homepage/testimony/Testimony.vue';
import Footer from '../components/layouts/Footer.vue';

</script>

<template>
    <main class="absolute top-0 left-0 right-0 -z-50 bg-amber-100/10">
        <Hero />
        <Solution />
        <Portofolio />
        <Testimony />
        <Footer />
    </main>
</template>