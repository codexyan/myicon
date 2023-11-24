<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router";

// navbar toogle
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

// navbar blur scrolling
window.onscroll = function () {
    const header = document.querySelector("#header")
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}
</script>

<template>
    <nav id="header" class="py-5 right-0 left-0 bg-transparent">
        <div class="container md:w-[72rem] mx-auto w-full">
            <div class="wrap px-3 flex flex-row flex-wrap items-center justify-between">
                <!-- Logo -->
                <RouterLink to="/">
                    <img src="@/assets/img/logo/logo-gold.png" alt="logo" class="h-11 drop-shadow-lg" />
                </RouterLink>

                <!-- Navigation Link -->
                <div :class="{ 'block':mobileMenuOpen, 'hidden': !mobileMenuOpen }" class="items-center justify-between sm:hidden w-full md:flex md:w-auto order-4 md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pl-3 pr-4 text-gray-600 font-light border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                                aria-current="page">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pl-3 pr-4 text-gray-600 font-light border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0">
                                Layanan</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pl-3 pr-4 text-gray-600 font-light border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0">
                                Portfolio</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pl-3 pr-4 text-gray-600 font-light border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0">
                                Tentang Kami</RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Toggle -->
                <button @click="toggleMobileMenu" class="sm:hidden order-3 border-2 border-slate-500/40 py-1 px-1 rounded-md shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-gray-600 cursor-pointer">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Button -->
                <div class="hidden sm:block md:order-2">
                    <RouterLink to="/"
                        class="text-white bg-gradient-to-r from-yellow-500 via-amber-500 to-amber-500 text-base py-3 px-8 rounded-sm font-medium">
                        Consultation
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-fixed {
    position: fixed;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
}
</style>