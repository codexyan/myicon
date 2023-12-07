<script setup>
import { ref } from "vue"

const review = ref({
    main: [
        {
            id: 1,
            name: "Anindha Mahiswari",
            role: "HCM PT. Global Karya Solusi",
            company: "PT Global Sukses Solusi, Tbk",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Product BroadwaysHR kami sangat senang bekerjasama dengan iCon."
        },
        {
            id: 2,
            name: "Muhammad Firdaus",
            role: "Sr. Digital Marketing Vodjo ",
            company: "PT Global Sukses Solusi, Tbk",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Product BroadwaysHR kami sangat senang bekerjasama dengan iCon."
        },
        {
            id: 3,
            name: "Anisa Bunga Pertiwi",
            role: "Owner Hantaran Jogja ",
            company: "PT Global Sukses Solusi, Tbk",
            message: "Thank you iCon, hasil konten & jasa digital marketingnya sangat memuaskan! Product BroadwaysHR kami sangat senang bekerjasama dengan iCon."
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
                        Respon dari Mereka yang telah bekerjasama dengan Kami
                    </h1>
                </div>

                <!-- Card-List -->
                <div id="card-list" class="grid gap-4 py-4 md:grid-cols-3">
                    <!-- Main -->
                    <div v-for="main in review.main" :key="main.id"
                        class="flex flex-col gap-5 bg-transparent border rounded-md shadow-sm border-amber-200 card-item">
                        <div class="flex flex-row px-6 pt-8 icon">
                            <div v-for="index in 5" :key="index" class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="px-6 item-message">
                            <p class="text-sm font-light leading-6 text-slate-500">
                                {{ main.message }}
                            </p>
                        </div>
                        <div id="auth-item" class="flex flex-row items-center justify-start gap-3 px-6 border border-t-2 py-7 bg-amber-100/50 border-amber-100">
                            <img src="https://source.unsplash.com/random/52x52?man" alt="item-profile"
                                class="rounded-full" />
                            <div>
                                <h1 class="text-base text-slate-600">{{ main.name }}</h1>
                                <p class="text-xs italic font-thin text-slate-400">
                                    {{ main.role }}
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
