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
    <div class="md:mt-20">
        <div class="title text-center mb-8">
            <p class="text-amber-500 font-spectral text-lg italic">What We do</p>
            <h1 class="md:text-2xl text-xl font-bold text-slate-700 font-open">
                Pilih Layanan Dokumentasi
            </h1>
        </div>

        <!-- Card -->
        <div class="row-card grid md:grid-cols-3 gap-6">
            <div v-for="cardService in cardServices.Documentation"
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
                            <p class="text-sm pb-1">/event</p>
                        </div>
                    </div>
                    <RouterLink to="/"
                        class="cta mt-2 justify-center border text-center py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition ease-in-out delay-100 duration-150">
                        Pilih Paket
                    </RouterLink>
                    <div class="fitures border-t-2 border-slate-100 my-3 flex flex-col gap-3">
                        <h1 class="mt-4 text-base font-semibold">Detail layanan</h1>
                        <ul class="flex flex-col gap-3">
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    <span class="font-semibold">Unlimitied</span>
                                    Photos Full Day
                                </p>
                            </li>
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    <span class="font-semibold">1-3 Minutes</span>
                                    Cinematic Videos
                                </p>
                            </li>
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    Cetak
                                    <span class="font-semibold">30 lbr</span>
                                    ukuran 4R
                                </p>
                            </li>
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    Cetak 2 lbr
                                    <span class="font-semibold">Ukuran 12RW</span>
                                    <span class="font-bold"> + Frame</span>
                                </p>
                            </li>
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    <span class="font-semibold">Free</span>
                                    Album Magnetic
                                </p>
                            </li>
                            <li class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{2}"
                                    stroke="orange" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">
                                    <span class="font-semibold">Free</span>
                                    Transport daerah Yogyakarta
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="cta-ask"
            class="border w-max mx-auto flex flex-row gap-3 items-center py-3 px-5 rounded-full text-center mt-12">
            <p class="text-slate-600">Punya kebutuhan lain ?</p>
        <p class="text-amber-600 font-semibold">Konsultasikan !</p>
    </div>
</div></template>
