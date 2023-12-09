<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { RouterLink } from "vue-router";

const categories = ref({
  "Creative Production": [
    {
      id: 1,
      thumbnail: "https://source.unsplash.com/random?wedding",
      url: "/wedding",
      title: "Dokumentasi Pernikahan",
      description: "Layanan kami :",
      services: [
        "Photoshoot Documentary",
        "Cinematic Videos",
        "Album Photos",
        "Make-Up Artist",
      ],
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random?graduation",
      title: "Dokumentasi Wisuda",
      description: "Layanan yang kami sediakan :",
      services: [
        "Photoshoot Documentary",
        "Cinematic Videos",
        "Album Photos",
        "Make-Up Artist",
      ],
    },
    {
      id: 3,
      thumbnail: "https://source.unsplash.com/random?decoration",
      title: "Wedding Decoration",
      description: "Layanan yang kami :",
      services: [
        "Indoor",
        "Outdoor",
        "Minimalist",
        "Traditional",
      ],
    },
  ],
  "Multimedia & Design": [
    {
      id: 1,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
    {
      id: 3,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
  ],
  "Website Solution": [
    {
      id: 1,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
    {
      id: 3,
      thumbnail: "https://source.unsplash.com/random",
      title: "Coming Soon",
      description: "Soon",
    },
  ],
});
</script>

<template>
  <div id="solution" class="md:w-[72rem] mx-auto w-full my-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl sm:text-4xl">
        Pilih Solusi Kebutuhan Anda
      </h2>
      <p class="mt-1 text-sm font-light leading-5 text-gray-600 md:mt-3">
        Kami siap membantu melayanani kebutuhan Anda
      </p>
    </div>

    <!-- Tabs -->
    <div class="w-full max-w-5xl px-2 py-3 mx-auto md:py-8 sm:px-0">
      <TabGroup>
        <TabList class="flex max-w-lg gap-3 p-1 mx-auto space-x-1 rounded-xl bg-amber-200/20">
          <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
            <button :class="[
              'w-full rounded-lg py-2.5 text-xs md:text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-amber-700 shadow'
                : 'text-slate-500/50 hover:bg-white/[0.12] hover:text-amber-500',
            ]">
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-8">
          <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx">
            <ul class="grid gap-5 mt-5 md:grid-cols-3">
              <li v-for="post in posts" :key="post.id" class="relative h-96">
                <!-- Card -->
                <div :style="{ backgroundImage: `url(${post.thumbnail})` }" :alt="post.title" data-aos="fade-in"
                  class="w-full h-full mb-5 duration-300 ease-in-out delay-100 bg-center bg-cover rounded-md hover:shadow-lg md:hover:scale-105 trasition">
                  <ul
                    class="absolute inset-x-0 bottom-0 flex flex-col justify-end h-full gap-2 px-5 text-xs font-normal leading-4 rounded-md pb-7 bg-gradient-to-t from-slate-900 text-slate-200">
                    <li class="flex flex-col">
                      <p class="text-lg font-normal text-white">
                        {{ post.title }}
                      </p>
                      <p class="text-sm font-extralight text-slate-200">
                        {{ post.description }}
                      </p>
                    </li>
                    <li>
                      <ul class="flex flex-col gap-2 mt-2 text-slate-500">
                        <li v-for="service in post.services" :key="service" class="flex flex-row items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-5 h-5">
                            <path fill-rule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clip-rule="evenodd" />
                          </svg>
                          <p class="text-sm text-slate-50">{{ service }}</p>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-4">
                      <RouterLink to="/wedding"
                        class="px-5 py-2 text-sm font-normal transition duration-200 ease-in-out delay-75 border rounded-sm hover:scale-110 hover:translate-y-1 text-amber-300 border-amber-300 hover:border-none hover:bg-slate-50 hover:text-amber-600">Lihat
                        Layanan</RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<style scoped></style>
