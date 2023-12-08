<script>
import { RouterLink } from 'vue-router';    
</script>

<template>
    <div id="hero-banner">
        <section class="bg-white sm:h-[400px]">
            <div class="grid items-center h-full max-w-screen-lg gap-8 px-4 mx-auto lg:gap-12 lg:py-16 lg:grid-cols-12">
                <div class="rounded-sm lg:mt-0 lg:col-span-5">
                    <img src="../../../assets/img/banner/banner.png" alt="mockup" />
                </div>
                <div class="h-full mr-auto place-self-center lg:col-span-7">
                    <p class="text-amber-600">Deliver Your Timeless Moments</p>
                    <h1
                        class="max-w-2xl mb-4 text-xl font-extrabold leading-none tracking-tight text-slate-700 md:text-4xl">
                        Jasa Dokumentasi Pernikahan
                    </h1>
                    <p class="max-w-2xl mb-6 text-sm font-light leading-6 text-slate-500 lg:mb-8 md:text-base">
                        Layanan Dokuemntasi Pernikahan mulai dari Photoshoot, Cinmatic Videos dan juga menyediakan kebutuhan seperti bucket, hantaran, MUA dll. Didukungan peralatan, model, dan tim yang profesional.
                    </p>
                    <RouterLink to="/"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center transition duration-200 ease-in-out delay-100 border rounded-md text-amber-600 hover:bg-amber-800 focus:ring-4 focus:ring-primary-300 border-amber-600 hover:text-white">
                        Pesan Jadwal
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </RouterLink>
                    <!-- <a href="#"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center transition duration-200 ease-in-out delay-100 border rounded-md text-amber-600 hover:bg-amber-800 focus:ring-4 focus:ring-primary-300 border-amber-600 hover:text-white">
                        Pesan Jadwal
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a> -->
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
