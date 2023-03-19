<template>
  <details>
    <summary cursor-pointer font-500>
      <slot name="summary" />
    </summary>
    <p><slot name="detail" /></p>
  </details>
</template>

<style scoped>
p {
  transition: all 0.3s ease-in-out;
}
details p {
  margin-top: -15px;
  opacity: 0;
}
details[open] p {
  margin-top: 0;
  opacity: 1;
}
</style>
