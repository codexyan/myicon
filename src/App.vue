<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/layouts/Navbar.vue';
// import Footer from './components/layouts/Footer.vue';
</script>

<template>
  <header>
    <nav class="relative">
      <Navbar />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped></style>
