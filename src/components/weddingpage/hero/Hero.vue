<script>
import { RouterLink } from "vue-router";
</script>

<template>
    <div id="hero-banner">
        <section class="bg-white sm:h-[400px] my-9">
            <div class="grid items-center h-full gap-12 mx-auto md:gap-20 md:py-16 md:grid-cols-12">
                <div class="h-full mr-auto place-self-center md:col-span-6 flex md:flex-row">
                    <div class="text-description flex flex-col gap-3.5">
                        <div class="title flex-col gap-1 flex">
                            <p class="text-amber-600 font-spectral italic text-normal">
                                # Deliver Your Timeless Moments
                            </p>
                            <h1
                                class="max-w-2xl mb-4 text-xl font-bold leading-none tracking-tight text-slate-700 md:text-3xl">
                                Abadikan Moment Spesialmu
                            </h1>
                        </div>
                        <div
                            class="max-w-2xl mb-3 text-sm leading-relaxed md:leading-7 font-normal text-slate-500 lg:mb-8 md:text-base flex flex-col gap-3">
                            <p id="text">
                                Layanan Dokumentasi Pernikahan mulai dari Photoshoot, Cinematic
                                Videos dan juga menyediakan kebutuhan seperti bucket, hantaran, MUA
                                dll. Didukungan peralatan, model, dan tim yang profesional.
                            </p>
                            <p id="text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, consectetur.
                            </p>
                            <p id="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus cupiditate, dicta
                                soluta accusantium quidem.
                            </p>
                        </div>
                        <RouterLink to="/"
                            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center transition duration-200 ease-in-out delay-100 border rounded-md text-amber-600 hover:bg-amber-800 focus:ring-4 focus:ring-primary-300 border-amber-600 hover:text-white md:w-1/3">
                            Pesan Jadwal
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </RouterLink>
                    </div>
                </div>
                <div class="rounded-sm md:mt-0 md:col-span-6 w-full">
                    <img src="../../../assets/img/banner/banner.png" alt="mockup" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
