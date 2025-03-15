<script setup>
import ProjectListing from "./ProjectListing.vue";
import projectData from "@/projects.json";
import { ref } from "vue";

const projects = ref(projectData.projects);
</script>
<template>
  <!-- For each project create a listing for it -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <div class="grid grid-cols-1 gap-12 mb-12">
      <ProjectListing
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
