<script setup lang="ts">
defineProps<{
  isLoading: boolean;
  warning?: boolean;
}>();
</script>

<template>
  <button>
    <slot v-if="!isLoading"></slot>
    <div
      class="lds-ring"
      :class="{
        warning,
      }"
      v-else
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </button>
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

.warning div {
  border: 4px solid rgb(248, 113, 113);
  border-color: rgb(248, 113, 113) transparent transparent transparent;
  width: 20px;
  height: 20px;
  top: -4px;
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
