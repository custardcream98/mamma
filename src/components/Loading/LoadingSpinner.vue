<script setup lang="ts">
defineProps<{
  warning?: boolean;
  blue?: boolean;
}>();
</script>

<template>
  <div
    class="lds-ring"
    :class="{
      warningRing: warning,
      blue,
    }"
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 4px;
  width: 21px;
  height: 21px;
  margin: 4px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.warningRing {
  width: 20px;
  height: 20px;
}
.warningRing div {
  border-color: rgb(248, 113, 113) transparent transparent transparent;
  width: 20px;
  height: 20px;
  margin: 0;
  top: 0;
}

.blue {
  width: 16px;
  height: 16px;
}
.blue div {
  border-color: rgb(0, 80, 255) transparent transparent transparent;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -8px;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
