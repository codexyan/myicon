<template>
    <div class="w-full bg-slate-100/50 md:py-12 py-5 bg-[url('/src/assets/img/banner/bg-white.png')] bg-cover bg-center bg-no-repeat">
        <div id="head-breadcumb" class="container flex flex-col gap-3 mx-auto text-center md:w-[72rem] w-full">
            <h1 class="md:text-4xl text-xl font-bold text-slate-700">Jasa Dokumentasi Pernikahan</h1>
            <p class="text-sm">Berbagai layanan branding produk hingga corporate branding mulai yang lengkap.</p>
        </div>

        <!-- Breadcrumb -->
        <nav class="flex mx-auto px-5 py-3 md:mx-auto mt-4 rounded-lg text-slate-700 max-w-fit"
            aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-xs md:text-sm font-medium text-gray-400 hover:text-amber-600">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="block w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="text-xs md:text-sm font-medium text-gray-400 ms-1 hover:text-amber-600 md:ms-2 ">Layanan</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="text-xs md:text-sm font-medium text-gray-400 ms-1 md:ms-2 hover:text-amber-600 cursor-pointer">Wedding</span>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>
