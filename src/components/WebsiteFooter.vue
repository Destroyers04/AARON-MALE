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
  <footer class="mt-auto py-6 bg-[#F8E3D3]">
    <div class="container mx-auto px-4">
      <!-- Mobile layout -->
      <div class="sm:hidden flex flex-col items-center gap-6">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="../assets/img/am-logo-blue.svg"
            alt="Logo"
            class="w-16 cursor-pointer"
            @click.prevent="toHome"
          />
        </router-link>

        <!-- Contact info -->
        <div class="flex items-center gap-3">
          <img src="../assets/img/Phone.svg" alt="PhoneIcon" class="w-6 h-6" />
          <p class="text-sm text-gray-700 font-body">+47 97 91 2321</p>
        </div>

        <div class="flex items-center gap-3">
          <img src="../assets/img/Mail.svg" alt="MailIcon" class="w-6 h-6" />
          <p class="text-sm text-gray-700 font-body">aaronmale429@gmail.com</p>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-gray-600 font-body mt-4">© 2025 Aaron Male</p>
      </div>

      <!-- Desktop layout (hidden on mobile) -->
      <div class="hidden sm:block">
        <!-- First row: Images -->
        <div class="grid grid-cols-3 items-center">
          <div class="flex justify-center">
            <img
              src="../assets/img/Phone.svg"
              alt="PhoneIcon"
              class="w-8 h-8"
            />
          </div>
          <!-- Makes it so that when you click the logo it takes you back to the top of the page -->
          <div class="flex justify-center">
            <router-link to="/">
              <img
                src="../assets/img/am-logo-blue.svg"
                alt="Logo"
                class="w-16 cursor-pointer"
                @click.prevent="toHome"
              />
            </router-link>
          </div>
          <div class="flex justify-center">
            <img src="../assets/img/Mail.svg" alt="MailIcon" class="w-8 h-8" />
          </div>
        </div>

        <!-- Second row: Text -->
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="text-center">
            <p class="text-sm text-gray-700 font-body">+47 97 91 23 21</p>
          </div>
          <div class="text-center">
            <!-- Empty middle cell in second row -->
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-700 font-body">
              aaronmale429@gmail.com
            </p>
          </div>
        </div>

        <!-- Third row: Copyright -->
        <div class="grid grid-cols-3 gap-4 mt-6">
          <div></div>
          <div class="text-center">
            <p class="text-sm text-gray-600 font-body">© 2025 Aaron Male</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </footer>
</template>
