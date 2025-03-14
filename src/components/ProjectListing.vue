<script setup>
import { defineProps } from "vue";
defineProps({
  project: Object,
});
// Function to get the correct image path
const getImagePath = (imageName) => {
  try {
    return new URL(`@/assets/img/${imageName}`, import.meta.url).href;
  } catch (error) {
    return "@/assets/img/default-project.png";
  }
};
</script>
<template>
  <!-- Customizing layout of listing -->
  <div
    class="w-full max-w-6xl h-[350px] mx-auto bg-[#F8E3D3] rounded-2xl shadow-xl overflow-hidden"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start h-full">
      <!-- Logo -->
      <div class="w-full md:w-1/3 flex justify-center p-12 items-center">
        <img
          :src="
            project.logo.includes('/')
              ? project.logo
              : getImagePath(project.logo)
          "
          :alt="project.name"
          class="w-64 h-64 object-contain"
        />
      </div>
      <div class="w-full md:w-2/3 p-8 flex flex-col h-full">
        <div class="flex-grow">
          <h2
            class="text-4xl font-title font-bold text-[#0A2463] tracking-wide mb-2"
          >
            {{ project.name }}
          </h2>
          <p class="font-body font-light text-black/70 mb-8">
            {{ project.info }}
          </p>
          <p class="font-body text-black">
            {{ project.description }}
          </p>
        </div>
        <!-- "Button" -->
        <div class="pt-4">
          <a
            :href="project.link"
            target="_blank"
            class="inline-block bg-[#0A2463] hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
