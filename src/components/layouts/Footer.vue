<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <footer>
        <div class="container md:w-[72rem] mx-auto w-full flex flex-col text-center justify-center gap-4 py-6 border-t-2 border-slate-500/10">
            <RouterLink to="/">
                <img src="@/assets/img/logo/logo-gold.png" alt="logo" class="h-8 drop-shadow-lg mx-auto" />
            </RouterLink>

            <p class="text-xs sm:text-sm font-extralight text-gray-500">
                © 2023 ian Creative Production Corp. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<style scoped></style>