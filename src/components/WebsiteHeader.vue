<script setup>
import { RouterLink, useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path === "/");

const scrollToTop = async () => {
  if (isHomePage.value) {
    //If the current site is the homepage, scroll to the top of it
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const toHome = async () => {
  try {
    if (isHomePage.value) {
      // If already on home page, just scroll to top
      scrollToTop();
    } else {
      // If not, navigate to home page.
      router.push("/");
    }
  } catch (error) {
    console.error("Navigation error:", error);
  }
};
</script>

<template>
  <header class="flex justify-center p-4">
    <router-link to="/">
      <img
        src="../assets/img/am-logo-blue.svg"
        alt="Logo"
        class="w-20 sm:w-24 md:w-32 cursor-pointer"
        @click.prevent="toHome"
      />
    </router-link>
  </header>
</template>
