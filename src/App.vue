<script setup>
import WebsiteFooter from "@/components/WebsiteFooter.vue"; // My websites footer
import WebsiteHeader from "@/components/WebsiteHeader.vue"; //my websites header
import WebsiteBackground from "@/components/WebsiteBackground.vue"; // Background for website

import { RouterView } from "vue-router";
</script>

<template>
  <WebsiteBackground>
    <WebsiteHeader />
    <RouterView />
    <WebsiteFooter />
  </WebsiteBackground>
</template>
