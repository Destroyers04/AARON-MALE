<template>
  <div
    class="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start"
  >
    <!-- Profile image -->
    <div class="md:w-1/2 flex mx-8 justify-center">
      <img
        src="@/assets/img/ProfilePicture.svg"
        alt="Picture of Aaron"
        class="object-cover w-1/2 md:w-auto max-w-full md:max-w-md pt-4"
      />
    </div>

    <!-- Text content Title, Bio, Activity status -->
    <div class="flex flex-col md:w-1/2 mx-8">
      <div class="flex-1 mt-12 md:mt-28">
        <h1
          class="md:text-7xl text-4xl font-title font-bold text-[#0A2463] tracking-wide text-center md:text-left"
        >
          AARON MALE
        </h1>
        <p
          class="md:text-xl text-m font-body font-light mt-2 text-black/50 text-center md:text-left"
        >
          Developer & Designer based in Bergen, Norway
        </p>

        <p
          class="md:text-xl text-m font-body text-black mt-12 overflow-hidden text-center md:text-left"
        >
          Aaron Male is a bachelor student at the University of Bergen. He is
          currently working on projects he finds engaging while developing his
          programming skills simultaneously. Aaron has experience with UX/UI
          design, machine learning, and Python, but is currently expanding his
          knowledge by learning HTML and related technologies. This website
          serves as a platform where he can share his projects with friends and
          others interested in his work.
        </p>
      </div>
      <!-- Activity status section still under development, unsure how to fetch data from discord atm -->
      <!-- <div class="flex flex-col flex-1 mt-12 gap-4 mx-auto md:mx-0">
        <div class="">
          <h1 class="text-xl font-title font-bold text-[#0A2463] tracking-wide">
            Activity Status:
          </h1>
        </div>
        <div class="flex flex-row gap-4">
          <div class="mx-4">
            <img
              src="@/assets/img/am-logo-white.svg"
              alt="logo"
              class="size-12"
            />
          </div>
          <div class="font-body text-black">
            <p>Currently offline</p>
            <p>Blank</p>
          </div>
          <div class="mx-8">
            <img
              src="@/assets/img/am-logo-blue.svg"
              alt="logo"
              class="size-12"
            />
          </div>
        </div>
        <div class="font-body text-black flex gap-24">
          <p>time elapsed: 00:00</p>
          <p>Probably sleeping</p>
        </div>
      </div> -->
    </div>
  </div>
  <!-- Pulsing Down Arrow -->
  <div class="flex justify-center w-full mt-12">
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
      class="animate-bounce-pulse"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
</template>
