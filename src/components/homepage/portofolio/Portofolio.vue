<script setup>
import { ref } from "vue";

const portofolio = ref({
  Portofolios: [
    {
      id: 1,
      thumbnail: "https://source.unsplash.com/random/400x300?client",
      categories: "Creative Production",
      title: "Wedding Iqbal & Eki",
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random/400x300?film",
      categories: "Creative Production",
      title: "Wedding Ikhwan & Akhwat",
    },
    {
      id: 3,
      thumbnail: "https://source.unsplash.com/random/400x300?baby",
      categories: "Documentation",
      title: "Short Movie",
    },
    {
      id: 4,
      thumbnail: "https://source.unsplash.com/random/400x300?happy",
      categories: "Documentation",
      title: "Short Movie",
    },
    {
      id: 5,
      thumbnail: "https://source.unsplash.com/random/400x300?trip",
      categories: "Documentation",
      title: "Traveling Documentation",
    },
    {
      id: 6,
      thumbnail: "https://source.unsplash.com/random/400x300?wedding",
      categories: "Documentation",
      title: "Wedding Photography",
    },
    {
      id: 7,
      thumbnail: "https://source.unsplash.com/random/400x300?design",
      categories: "Documentation",
      title: "Visual Design",
    },
    {
      id: 8,
      thumbnail: "https://source.unsplash.com/random/400x300?startup",
      categories: "Documentation",
      title: "Video Company Profile",
    },
  ],
});
</script>

<template>
  <div id="portofolio" class="bg-slate-100">
    <div class="md:w-[72rem] w-full mx-auto py-20 sm:py-24">
      <div class="mx-auto">
        <!-- Title Section -->
        <div class="max-w-full text-center">
          <h2 class="text-3xl font-bold tracking-tighter text-gray-900 sm:text-3xl">
            Portofolio
          </h2>
          <p class="mt-1 text-base font-light leading-8 text-gray-600">
            Beberapa contoh hasil pekerjaan yang telah kami kerjakan.
          </p>
        </div>

        <!-- Card Section -->
        <div id="card-list" class="grid gap-6 px-4 mt-8 sm:grid-cols-2 md:grid-cols-4">
          <div v-for="post in portofolio.Portofolios" :key="post.id" id="card-item" class="container-card"
            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="800">
            <div class="flex flex-col gap-2">
              <div class="rounded-md shadow-lg image-container outline outline-white outline-offset-0 outline-6">
                <img :src="post.thumbnail" alt="container-card" />
              </div>
              <div class="flex flex-col gap-1 mt-2">
                <h3
                  class="px-5 py-1 text-xs font-medium rounded-full text-slate-500 bg-gradient-to-r from-slate-200 to-slate-50 shadow-sm w-fit">
                  {{ post.categories }}
                </h3>
                <h1 class="text-base text-slate-800">{{ post.title }}</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div id="cta-more" class="max-w-full text-center mt-9">
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
