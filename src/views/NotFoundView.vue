<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="text-center flex flex-col justify-center items-center min-h-screen"
  >
    <h1 class="text-9xl font-bold mb-4 font-title text-[#0A2463]">
      404 Not Found
    </h1>
    <p class="text-4xl mb-5 font-body">This page does not exist</p>
    <RouterLink
      to="/"
      class="text-white bg-[#0A2463] hover:bg-blue-900 rounded-md px-3 py-2 mt-4"
      >Go Back</RouterLink
    >
  </section>
</template>
