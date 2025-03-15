<script setup>
import { defineProps } from "vue";
defineProps({
  project: Object,
});
// Function to get the correct image path
const getImagePath = (imageName) => {
  if (!imageName) {
    return require("../assets/img/am-logo-blue.svg");
  }

  try {
    // Use require for webpack
    return require(`../assets/img/${imageName}`);
  } catch (error) {
    console.error("Error loading image:", error);
    return require("../assets/img/am-logo-blue.svg");
  }
};
</script>
<template>
  <!-- Customizing layout of listing -->
  <div
    class="w-full max-w-6xl h-auto min-h-[350px] md:h-[400px] mx-auto bg-[#F8E3D3] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start h-full">
      <!-- Logo -->
      <div class="w-full md:w-1/3 flex justify-center items-center">
        <img
          :src="
            project.logo.includes('/')
              ? project.logo
              : getImagePath(project.logo)
          "
          :alt="project.name"
          class="object-contain w-40 md:w-64 max-w-full md:max-w-md pt-16"
        />
      </div>
      <div class="w-full md:w-2/3 p-8 flex flex-col h-full">
        <div class="flex-grow">
          <h2
            class="text-xl md:text-4xl font-title font-bold text-[#0A2463] tracking-wide mb-2 text-center md:text-left"
          >
            {{ project.name }}
          </h2>
          <p
            class="text-base md:text-xl font-body font-light text-black/70 mb-8 text-center md:text-left"
          >
            {{ project.info }}
          </p>
          <p
            class="text-base md:text-xl font-body text-black text-center md:text-left"
          >
            {{ project.description }}
          </p>
        </div>
        <!-- "Button" -->
        <div class="pt-4 mx-auto md:mx-0">
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
