<script setup></script>
<template>
  <div
    class="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16"
  >
    <!-- Profile image -->
    <div class="w-full md:w-1/2 flex">
      <img src="@/assets/img/ProfilePicture.png" alt="Picture of Aaron" />
    </div>

    <!-- Text content Title, Bio, Activity status -->
    <div class="w-full md:w-1/2 pt-24">
      <h1 class="text-7xl font-title font-bold text-[#0A2463] tracking-wide">
        AARON MALE
      </h1>
      <p class="font-body font-light mt-2 text-black/50">
        Developer & Designer based in Bergen, Norway
      </p>

      <p class="font-body text-black mt-12">
        Aaron Male is a bachelor graduate from the University of Bergen. He is
        currently working on projects he finds engaging while developing his
        programming skills simultaneously. Aaron has experience with UX/UI
        design, machine learning, and Python, but is currently expanding his
        knowledge by learning HTML and related technologies. This website serves
        as a platform where he can share his projects with friends and others
        interested in his work.
      </p>
      <!-- Activity status section still under development -->
      <!-- <div class="mt-10 pt-5">
        <p class="font-body text-black mt-8">Activity status:</p>
        <div class="flex items-center gap-6 mt-3">
          <div class="flex items-center gap-2">
            <img
              src="../assets/img/AM_Logo.png"
              alt="Headphones"
              class="w-8 h-8"
            />
            <div>
              <p class="font-body text-black mt-8">Listening to music</p>
              <p class="font-body text-black mt-8">Time Elapsed: 04:32</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-body text-black mt-8">Someone like you</p>
            <img
              src="../assets/img/AM_Logo.png"
              alt="Album"
              class="w-10 h-10"
            />
          </div>
        </div>
      </div> -->
      <!-- Pulsing Down Arrow -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A2463"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="animate-bounce"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>
