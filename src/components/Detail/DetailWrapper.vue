<template>
  <details>
    <summary cursor-pointer font-500>
      <slot name="summary" />
    </summary>
    <p><slot name="detail" /></p>
  </details>
</template>

<script lang="ts" setup></script>
