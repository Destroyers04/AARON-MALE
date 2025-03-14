<script setup>
import ProjectListing from "./ProjectListing.vue";
import projectData from "@/projects.json";
import { ref } from "vue";

const projects = ref(projectData.projects);
</script>
<template>
    <!-- For each project create a listing for it -->
  <div class="container-xl lg:container m-auto mt-20">
    <div class="grid grid-cols-1 gap-6 space-y-12 mb-12">
      <ProjectListing
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
