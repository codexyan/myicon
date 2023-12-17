<script setup>
import { ref } from "vue";

const accordionItems = ref([
    {
        id: 1,
        title: "Apa saja jenis layanan dokumentasi pernikahan yang biasanya ditawarkan oleh iCon?",
        content: "iCon menawarkan layanan pemotretan acara pernikahan, pembuatan album foto, dan pembuatan video highlight kebutuhan social media serta video cinematic pernikahan.",
        isOpen: false,
    },
    {
        id: 2,
        title: "Apa yang sebaiknya saya persiapkan sebelum sesi produksi?",
        content: "Persiapkan konsep, lokasi, dan busana yang akan digunakan. Komunikasikan ide-ide Anda kepada kami untuk memastikan visi bersama.",
        isOpen: false,
    },
    {
        id: 3,
        title: "Apakah saya bisa memberikan referensi atau ide spesifik untuk dokumentasi pernikahan saya?",
        content: "Ya, kami akan senang menerima referensi atau ide spesifik. Ini membantu kami memahami ekspektasi Anda dan memberikan hasil yang sesuai.",
        isOpen: false,
    },
    {
        id: 4,
        title: "Berapa lama waktu yang dibutuhkan untuk menerima hasil akhir foto dan video pernikahan?",
        content: "Waktu pengolahan bisa bervariasi, tetapi umumnya antara 1-2 minggu. Pastikan untuk menanyakan perkiraan waktu pengiriman kepada kami.",
        isOpen: false,
    },
    {
        id: 5,
        title: "Apakah ada biaya tambahan yang perlu diperhatikan?",
        content: "Pastikan untuk memahami dengan jelas biaya dasar dan apakah ada biaya tambahan seperti biaya perjalanan, biaya pengolahan tambahan seperti add-ons layanan, atau biaya lainnya.",
        isOpen: false,
    },
    {
        id: 6,
        title: "Bagaimana proses kontrak dan pembayaran?",
        content: "Biasanya, Anda akan diminta untuk menandatangani kontrak yang merinci layanan, biaya, dan syarat-syarat lainnya. Pembayaran biasanya dibagi menjadi beberapa tahap, dengan pembayaran akhir setelah penerimaan hasil akhir.",
        isOpen: false,
    },
]);

const toggleAccordion = (index) => {
    accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
};
</script>

<template>
    <div class="my-12">
        <div class="title text-center mb-8">
            <p class="text-amber-500 font-spectral text-lg italic">#FAQ</p>
            <h1 class="md:text-2xl text-xl font-bold text-slate-700 font-open">
                Pertanyaan Seputar Jasa Dokumentasi Pernikahan
            </h1>
        </div>

        <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item mb-3 shadow-md shadow-slate-100/75">
            <div class="accordion-header md:px-8 px-5 py-2 gap-3 flex flex-row items-center justify-between cursor-pointer border-b-2 border-slate-100/50"
                @click="toggleAccordion(index)">
                <span class="accordion-title font-semibold text-sm md:text-base">{{ item.title }}</span>
                <span class="accordion-icon" :class="{ open: item.isOpen }">
                    {{ item.isOpen ? "-" : "+" }}
                </span>
            </div>
            <div v-show="item.isOpen" class="accordion-content" :key="index">
                <p class="md:px-8 px-5 py-5 text-sm text-slate-600">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-item {
    border: 1px solid #ddd;
    border-radius: 8px;
}

.accordion-title {
    flex: 1;
}

.accordion-icon {
    font-size: 1.5em;
    transition: transform 0.3s;
}

.open {
    transform: rotate(180deg);
}

.open + .accordion-content {
    display: block;
}
</style>
