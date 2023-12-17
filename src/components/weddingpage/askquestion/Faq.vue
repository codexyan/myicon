<script setup>
import { ref } from "vue";

const accordionItems = ref([
    {
        id: 1,
        title: "Section 1",
        content: "Content for Section 1",
        isOpen: false,
    },
    {
        id: 2,
        title: "Section 2",
        content: "Content for Section 2",
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
            <p class="text-amber-500 font-spectral text-lg italic">FAQ</p>
            <h1 class="md:text-2xl text-xl font-bold text-slate-700 font-open">
                Pertanyaan Seputar Jasa Dokumentasi Pernikahan
            </h1>
        </div>

        <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item mb-3 shadow-md shadow-slate-100/75">
            <div class="accordion-header md:px-8 px-5 py-2 flex flex-row items-center justify-between cursor-pointer border-b-2 border-slate-100/50"
                @click="toggleAccordion(index)">
                <span class="accordion-title font-semibold text-base">{{ item.title }}</span>
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
