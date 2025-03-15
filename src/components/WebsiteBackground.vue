<template>
  <div class="min-h-screen bg-[#DF8B4D] texture-overlay">
    <slot></slot>
  </div>
</template>

<style>
.texture-overlay {
  position: relative;
}
.texture-overlay::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 2px
    ),
    radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 10px 10px, 20px 20px;
  pointer-events: none;
  z-index: 1;
}
.texture-overlay > * {
  position: relative;
  z-index: 2;
}
</style>
