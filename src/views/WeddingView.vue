<script setup>
import Hero from '@/components/weddingpage/hero/Hero.vue';
import Breadcumb from '@/components/weddingpage/breadcumb/Breadcumb.vue';
import Services from '@/components/weddingpage/services/Services.vue';
import Gallery from '@/components/weddingpage/gallery/Gallery.vue';
import Featured from '@/components/weddingpage/featured/Featured.vue';
import Faq from '../components/weddingpage/faq/Faq.vue';
</script>

<template>
    <main class="md:w-[72rem] w-full mx-auto px-4 md:py-6 flex flex-col gap-6">
        <Breadcumb />
        <Hero />
        <Services />
        <Gallery />
        <Featured />
        <Faq />
    </main>
</template>