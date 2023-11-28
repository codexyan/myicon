<script setup>
import { ref } from "vue"

const portofolio = ref({
    Portofolios: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random/400x300?wedding",
            categories: "Documentation",
            title: "Vodjo Client Review"
        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random/400x300?film",
            categories: "Documentation",
            title: "Short Movie"
        },
        {
            id: 3,
            thumbnail: "https://source.unsplash.com/random/400x300?baby",
            categories: "Documentation",
            title: "Short Movie"
        },
        {
            id: 4,
            thumbnail: "https://source.unsplash.com/random/400x300?happy",
            categories: "Documentation",
            title: "Short Movie"
        },
    ]
})
</script>

<template>
    <div id="portofolio" class="bg-slate-100">
        <div class="md:w-[72rem] w-full mx-auto py-20 sm:py-24">
            <div class="mx-auto">

                <!-- Title Section -->
                <div class="max-w-full text-center">
                    <h2 class="text-3xl font-bold tracking-tighter text-gray-900 sm:text-3xl">Portofolio</h2>
                    <p class="mt-1 text-base font-light leading-8 text-gray-600">Beberapa contoh hasil pekerjaan yang telah
                        kami lakukan sebelumnya.</p>
                </div>

                <!-- Card Section -->
                <div id="card-list" class="grid gap-6 px-4 mt-8 sm:grid-cols-2 md:grid-cols-4">
                    <div v-for="post in portofolio.Portofolios" :key="post.id" id="card-item" class="container-card">
                        <div class="flex flex-col gap-2">
                            <div
                                class="rounded-md shadow-lg image-container outline outline-white outline-offset-0 outline-6">
                                <img :src="post.thumbnail" alt="container-card">
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-sm font-light text-slate-700">{{ post.categories }}</h3>
                                <h1 class="text-base">{{ post.title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div id="cta-more" class="max-w-full text-center mt-9 ">
                    <a href="/" class="text-base font-normal text-amber-600">Lihat Semuanya</a>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.image-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.image-container:hover img {
    transform: scale(1.2);
}

.image-container img {
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: auto;
    display: block;
}
</style>
