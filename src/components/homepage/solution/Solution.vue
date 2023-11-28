<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
    Documentation: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random/400x300?graduation",
            title: "Graduation Packages",
            service_one: "Unlimitied Photoshot",
            service_two: "Cinematic Videos",
            service_three: "Album Photos",
            service_fourth: "Printed Photos and Framed",
            service_five: "All File on GD",
        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random/400x300?wedding",
            title: "Wedding Packages",
            service_one: "Unlimitied Photoshot",
            service_two: "Cinematic Videos",
            service_three: "Album Photos",
            service_fourth: "Printed Photos and Framed",
            service_five: "All File on GD/FD",
        },
        {
            id: 3,
            thumbnail: "https://source.unsplash.com/random/400x300?travel",
            title: "Enterprise Packages",
            service_one: "Company Profiles",
            service_two: "Tour & Travel",
            service_three: "Photo Product",
            service_fourth: "Event Documentation",
            service_five: "Live Streaming",
        },
    ],
    SMM: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random/400x300?socialmedia",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",
        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random/400x300?socialmedia",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",
        },
        {
            id: 3,
            thumbnail: "https://source.unsplash.com/random/400x300?socialmedia",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",
        },
    ],
    Invitation: [
        {
            id: 1,
            thumbnail: "https://source.unsplash.com/random/400x300?invitation",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",

        },
        {
            id: 2,
            thumbnail: "https://source.unsplash.com/random/400x300?invitation",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",

        },
        {
            id:3,
            thumbnail: "https://source.unsplash.com/random/400x300?invitation",
            title: "Coming Soon",
            service_one: "Soon",
            service_two: "Soon",
            service_three: "Soon",
            service_fourth: "Soon",
            service_five: "Soon",

        },
    ],
});
</script>

<template>
    <div id="solution" class="md:w-[72rem] mx-auto w-full my-24">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Solution
            </h2>
            <p class="mt-3 text-lg leading-8 text-gray-600">
                We are provide what you need
            </p>
        </div>

        <!-- Tabs -->
        <div class="w-full max-w-5xl px-2 py-8 mx-auto sm:px-0">
            <TabGroup>
                <TabList class="flex max-w-md p-1 mx-auto space-x-1 rounded-xl bg-amber-200/20">
                    <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                        <button :class="[
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'ring-white/60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white text-amber-700 shadow'
                                : 'text-slate-500/50 hover:bg-white/[0.12] hover:text-amber-500',
                        ]">
                            {{ category }}
                        </button>
                    </Tab>
                </TabList>

                <TabPanels class="mt-2 rounded-md shadow-md">
                    <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
                        'rounded-xl bg-white p-3',
                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    ]">
                        <ul class="flex flex-col md:flex-row">
                            <li v-for="post in posts" :key="post.id"
                                class="relative flex flex-col gap-4 p-3 md:flex-nowrap">
                                <div class="thumb-solution md:basis-3/5">
                                    <a :href="'/post/' + post.id">
                                        <!-- <img :src="`/src/assets${post.thumbnail}`" :alt="post.title" class="rounded-md"/> -->
                                        <!-- <img :src="require(`@/assets${post.thumbnail}`)" :alt="post.title" class="rounded-md" /> -->
                                        <img :src="post.thumbnail" :alt="post.title" class="rounded-md" />
                                    </a>
                                </div>

                                <ul
                                    class="flex flex-col w-full gap-4 mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500 md:basis-2/5">
                                    <li class="text-base font-normal leading-5">
                                        {{ post.title }}
                                    </li>

                                    <ul id="service-list" class="flex flex-col gap-2">
                                        <li class="flex items-center justify-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"
                                                class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-sm font-light text-slate-600/60">
                                                {{ post.service_one }}
                                            </p>
                                        </li>
                                        <li class="flex items-center justify-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"
                                                class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-sm font-light text-slate-600/60">
                                                {{ post.service_two }}
                                            </p>
                                        </li>
                                        <li class="flex items-center justify-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"
                                                class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-sm font-light text-slate-600/60">
                                                {{ post.service_three }}
                                            </p>
                                        </li>
                                        <li class="flex items-center justify-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"
                                                class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-sm font-light text-slate-600/60">
                                                {{ post.service_fourth }}
                                            </p>
                                        </li>
                                        <li class="flex items-center justify-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"
                                                class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-sm font-light text-slate-600/60">
                                                {{ post.service_five }}
                                            </p>
                                        </li>
                                    </ul>

                                    <li class="mt-4">
                                        <a href="/" class="text-sm text-slate-400 hover:text-amber-500">Selengkapnya »</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>

<style scoped></style>
