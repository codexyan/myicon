<script setup>
import { ref } from "vue";

const steps = ref({
    process: [
        {
            id: 1,
            title: "Pilih Paket",
            description: "Tentukan paket yang sesuai dengan kebutuhan Anda."
        },
        {
            id: 2,
            title: "Proses Briefing",
            description: "Jelaskan keinginan kepada tim agar hasil maksimal."
        },
        {
            id: 3,
            title: "Proses Produksi",
            description: "Kami akan memproses produksi produk dengan profesional."
        },
        {
            id: 4,
            title: "Finalisasi",
            description: "Dapatkan hasil yang terbaik bersama kami."
        },
        {
            id: 5,
            title: "Terima Hasil",
            description: "Hanya hasil terbaik yang akan dikirimkan."
        }
    ]
})
</script>

<template>
  <div>
    <section id="featured">
      <div class="title text-center mb-8">
        <p class="text-amber-500 font-spectral text-lg italic">
          The Production Process
        </p>
        <h1 class="text-2xl font-bold text-slate-700 font-open">
          Langkah Pengerjaan
        </h1>
      </div>

      <ol class="items-center flex flex-col sm:flex-row gap-4">
        <li v-for="step in steps.process" class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-8 h-8 bg-amber-500 rounded-full ring-0 sm:ring-8 ring-gray-100 shrink-0"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div class="mt-3 flex flex-col gap-2">
            <h1 class="text-lg font-semibold">{{ step.title }}</h1>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>
