<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const cardServices = ref({
    Documentation: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random?wedding",
            title: "Paket Foto Pernikahan",
            description:
                "Cocok untuk kamu yang pengen tampil simpel dan elegan dengan dokumentasi foto saja",
        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random?graduation",
            title: "Paket Video Pernikahan",
            description:
                "Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.",
        },
        {
            id: 3,
            thumbnail: "https://source.unsplash.com/random?event",
            title: "Paket Bundling",
            description:
                "Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.",
        },
    ],
});
</script>

<template>
    <div class="sm:my-0 my-12">
        <div class="title text-center mb-8">
            <p class="text-amber-500 font-spectral text-lg italic">What We do</p>
            <h1 class="text-2xl font-bold text-slate-700 font-open">
                Pilih Layanan Dokumentasi
            </h1>
        </div>

        <!-- Card -->
        <div class="row-card grid md:grid-cols-3 gap-6">
            <div v-for="cardService in cardServices.Documentation" :key="key"
                class="container rounded-lg hover:shadow-lg shadow-sm border border-slate-100/100 transition ease-in-out delay-150 duration-100">
                <div class="h-40">
                    <img :src="cardService.thumbnail" alt="img.jpg" class="h-full w-full object-cover rounded-sm" />
                </div>
                <div class="col flex flex-col gap-3 py-5 px-6">
                    <div class="text-card text-center flex flex-col gap-3">
                        <h1 class="text-base font-bold">{{ cardService.title }}</h1>
                        <p class="text-xs text-slate-500 leading-5">
                            {{ cardService.description }}
                        </p>
                        <div class="discount flex flex-row justify-center gap-2 items-center">
                            <p class="text-slate-400 text-sm line-through">IDR 2000K</p>
                            <p class="text-amber-800 bg-amber-200/100 py-1 text-sm px-3 rounded-full font-semibold">
                                Diskon 60%
                            </p>
                        </div>
                        <div class="price flex flex-row items-end justify-center gap-1">
                            <p class="text-sm pb-1">IDR</p>
                            <p class="text-3xl font-bold text-slate-800">1500K</p>
                            <p class="text-sm pb-1">/bulan</p>
                        </div>
                    </div>
                    <RouterLink to="/" class="cta mt-2 justify-center border text-center py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition ease-in-out delay-100 duration-150">
                        Pilih Paket
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
