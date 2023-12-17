<script setup>
import Hero from '@/components/weddingpage/hero/Hero.vue';
import Breadcumb from '@/components/weddingpage/breadcumb/Breadcumb.vue';
import Services from '@/components/weddingpage/menu/Services.vue';
import Gallery from '@/components/weddingpage/gallery/Gallery.vue';
import Faq from '@/components/weddingpage/askquestion/Faq.vue';
// import Footer from '@/components/layouts/Footer.vue';
</script>

<template>
    <Breadcumb />
    <main class="md:w-[72rem] w-full mx-auto px-4 flex flex-col gap-6">
        <Hero />
        <Services />
        <Gallery />
        <Faq />
        <!-- <Footer /> -->
    </main>
</template>