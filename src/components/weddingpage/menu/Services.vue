<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const cardServices = ref({
    Documentation: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random?wedding",
            title: "Paket Foto Pernikahan",
            price: "1800",
            description:
                "Cocok untuk kamu yang ingin tampil simpel dan elegan dengan dokumentasi foto saja",
            features: [
                "Unlimited Photos Session",
                "Printed 50 lbr 4R",
                "Printed 12RW x 2 and Frame",
                "Free Album Magnetic",
                "Free Transport Yogyakarta Area",
            ],
            addons: [
                "Cetak Tambahan Foto",
                "Bingkai Foto",
                "Foto Edit",
                "Transport Luar Jogja"
            ],
        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random?graduation",
            title: "Paket Video Pernikahan",
            price: "2000",
            description:
                "Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.",
            features: [
                "1-3 Minutes Cinematic Videos",
                "Free Transport Yogyakarta Area",
            ],
            addons: [
                "Format Videos",
                "Transport Luar Jogja"
            ],
        },
        {
            id: 3,
            thumbnail: "https://source.unsplash.com/random?event",
            title: "Paket Bundling",
            price: "3000",
            description:
                "Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.",
            features: [
                "Unlimited Photos Session",
                "1-3 Minutes Cinematic Videos",
                "Printed 50 lbr 4R",
                "Printed 12RW x 2 and Frame",
                "Free Album Magnetic",
                "Free Transport Yogyakarta Area",
            ],
            addons: [
                "Cetak Tambahan Foto",
                "Bingkai Foto",
                "Foto Edit",
                "Transport Luar Jogja"
            ],
        },
    ],
});
</script>

<template>
    <div class="md:mt-20">
        <div class="title text-center mb-8">
            <p class="text-amber-500 font-spectral text-lg italic">#What We do</p>
            <h1 class="md:text-2xl text-xl font-bold text-slate-700 font-open">
                Pilih Layanan Dokumentasi
            </h1>
        </div>

        <!-- Card -->
        <div class="row-card grid md:grid-cols-3 gap-6">
            <div v-for="cardService in cardServices.Documentation" :key="cardService.id"
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
                            <p class="text-slate-400 text-sm line-through">IDR 2000 K</p>
                            <p class="text-amber-800 bg-amber-200/100 py-1 text-sm px-3 rounded-full font-semibold">
                                Diskon 60%
                            </p>
                        </div>
                        <div class="price flex flex-row items-end justify-center gap-1">
                            <p class="text-sm pb-1">IDR</p>
                            <p class="text-3xl font-bold text-slate-800">{{ cardService.price }}K</p>
                            <p class="text-sm pb-1">/event</p>
                        </div>
                    </div>
                    <RouterLink to="/"
                        class="cta mt-2 justify-center border text-center py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition ease-in-out delay-100 duration-150">
                        Pilih Paket
                    </RouterLink>
                    <div id="features" class="border-t-2 border-slate-100 mt-3 flex flex-col gap-3">
                        <h1 class="mt-4 text-base font-semibold">Detail layanan</h1>
                        <ul class="flex flex-col gap-3">
                            <li v-for="feature in cardService.features" :key="feature"
                                class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="orange"
                                    class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">{{ feature }}</p>
                            </li>
                        </ul>
                    </div>
                    <div id="addons" class="border-t-2 border-slate-100 flex flex-col gap-3">
                        <h1 class="mt-4 text-base font-semibold">Layanan Tambahan</h1>
                        <ul class="flex flex-col gap-3">
                            <li v-for="addon in cardService.addons" :key="addon" class="flex flex-row items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                                        clip-rule="evenodd" />
                                </svg>
                                <p class="text-sm font-normal text-slate-600">{{ addon }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="cta-ask"
            class="border w-max mx-auto flex flex-row gap-3 items-center py-3 px-5 rounded-full text-center mt-10 mb-12">
            <p class="text-slate-600 md:text-base text-xs">Punya kebutuhan lain ?</p>
            <p class="text-amber-600 font-semibold md:text-base text-xs">
                Konsultasikan!
            </p>
        </div>
    </div>
</template>
