<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
  Commercial: [
    {
      id: 1,
      thumbnail: "https://source.unsplash.com/random",
      title: "Graduation Packages",
      description: "Penerapan dari strategi pemasaran ini yaitu dengan membuat satu pesan marketing kemudian mengirimkannya kepada para konsumen melalui berbagai media.",
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random",
      title: "Wedding Packages",
      description: "Penerapan dari strategi pemasaran ini yaitu dengan membuat satu pesan marketing kemudian mengirimkannya kepada para konsumen melalui berbagai media.",
    },
    {
      id: 3,
      thumbnail: "https://source.unsplash.com/random",
      title: "Enterprise Packages",
      description: "Penerapan dari strategi pemasaran ini yaitu dengan membuat satu pesan marketing kemudian mengirimkannya kepada para konsumen melalui berbagai media.",
    },
  ],
  Visual: [
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
  Website: [
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

        <TabPanels class="mt-2">
          <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx">
            <ul class=" grid md:grid-cols-3 gap-5 mt-5">
              <li v-for="post in posts" :key="post.id" class="relative  py-3 px-4 shadow-lg rounded-md">

                <img :src="post.thumbnail" :alt="post.title" class="mb-5 rounded-full w-14 h-14 " />

                <ul class="text-xs font-normal leading-4 text-gray-500 flex flex-col gap-3  mb-4">
                  <li class="text-lg font-normal leading-5">
                    {{ post.title }}
                  </li>

                  <li>
                    <p class="text-sm font-extralight leading-6 text-slate-400">{{ post.description }}</p>
                  </li>
                </ul>

                <a href="/" class="text-sm text-amber-600 font-normal">Learn More</a>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<style scoped></style>
