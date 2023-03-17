<template>
  <details>
    <summary cursor-pointer>
      <slot name="summary" />
    </summary>
    <p><slot name="detail" /></p>
  </details>
</template>

<script lang="ts" setup></script>
