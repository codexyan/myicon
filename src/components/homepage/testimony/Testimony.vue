<script setup>
import { ref } from "vue"

const review = ref({
    main: [
        {
            id: 1,
            name: "Sony Rachmadi Purnomo",
            role: "CEO RUN System - PT. Global Sukes Solusi Tbk",
            company: "PT Global Sukses Solusi, Tbk",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Kami di Essenza sangat senang berkonsultasi dan bekerjasama dengan iCon."
        },
    ],
    left: [
        {
            id: 1,
            name: "M Fakhrian",
            role: "CEO & Founder",
            company: "PT Ian Creative Production",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Kami di Essenza sangat senang berkonsultasi dan bekerjasama dengan iCon."
        },
    ],
    right: [
        {
            id: 1,
            name: "Sandiaga Salahudin Uno",
            role: "CEO & Founder",
            company: "PT Saratoga Nusantara, Tbk",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Kami di Essenza sangat senang berkonsultasi dan bekerjasama dengan iCon."
        },
    ]
})
</script>

<template>
    <div id="testimony">
        <div class="container md:w-[72rem] w-full mx-auto py-20 sm:py-24">
            <div class="px-4 mx-auto">
                <!-- Title -->
                <div id="title" class="w-3/5 mb-6">
                    <h1 class="text-xl md:text-3xl">
                        Relied On By Brand, Trusted By Personal, And Loved By Small-Medium
                        Enterprise, Everywhere!
                    </h1>
                </div>

                <!-- Card-List -->
                <div id="card-list" class="grid gap-4 py-4 md:grid-cols-3">
                    <!-- Left -->
                    <div v-for="side in review.left" :key="side.id"
                        class="flex flex-col gap-5 p-5 rounded-md shadow-sm card-item bg-slate-100">
                        <div class="flex flex-row icon">
                            <div v-for="index in 5" :key="index" class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="item-message">
                            <p class="text-sm font-light text-slate-600">
                                {{ side.message }}
                            </p>
                        </div>
                        <div id="auth-item" class="flex flex-row items-center justify-start gap-3">
                            <img src="https://source.unsplash.com/random/42x42?man" alt="item-profile"
                                class="rounded-full" />
                            <div>
                                <h1 class="text-base text-slate-600">{{ side.name }}</h1>
                                <p class="text-xs italic font-thin text-slate-400">
                                    {{ side.role }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Main -->
                    <div v-for="main in review.main" :key="main.id"
                        class="flex flex-col gap-5 p-5 rounded-md shadow-sm card-item bg-amber-700">
                        <div class="flex flex-row icon">
                            <div v-for="index in 5" :key="index" class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="item-message">
                            <p class="text-sm font-light text-white">
                                {{ main.message }}
                            </p>
                        </div>
                        <div id="auth-item" class="flex flex-row items-center justify-start gap-3">
                            <img src="https://source.unsplash.com/random/42x42?man" alt="item-profile"
                                class="rounded-full" />
                            <div>
                                <h1 class="text-base text-white">{{ main.name }}</h1>
                                <p class="text-xs italic font-thin text-slate-100">
                                    {{ main.role }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Right -->
                    <div v-for="side in review.right" :key="side.id"
                        class="flex flex-col gap-5 p-5 rounded-md shadow-sm card-item bg-slate-100">
                        <div class="flex flex-row icon">
                            <div v-for="index in 5" :key="index" class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="item-message">
                            <p class="text-sm font-light text-slate-600">
                                {{ side.message }}
                            </p>
                        </div>
                        <div id="auth-item" class="flex flex-row items-center justify-start gap-3">
                            <img src="https://source.unsplash.com/random/42x42?man" alt="item-profile"
                                class="rounded-full" />
                            <div>
                                <h1 class="text-base text-slate-600">{{ side.name }}</h1>
                                <p class="text-xs italic font-thin text-slate-400">
                                    {{ side.role }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
