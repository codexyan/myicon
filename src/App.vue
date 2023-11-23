<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/layouts/Navbar.vue';
</script>

<template>
  <header>
      <nav>
        <Navbar />
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
