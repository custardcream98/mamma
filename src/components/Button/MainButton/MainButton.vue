<template>
  <button
    class="text-left text-36px font-300 mt-50px mb-16px w-full hover:bg-wavveBlue_100 rounded-2xl hover:px-10px hover:ml-[-10px] box-content"
  >
    <span block>
      <slot name="first-line" />
    </span>
    <span block>
      <slot name="second-line" />
    </span>
  </button>
</template>

<style scoped>
button :deep(.hoverblue) {
  transition: all 0.3s ease-in-out;
}

button:hover :deep(.hoverblue) {
  color: #0050ff;
}
</style>
