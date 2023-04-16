<script lang="ts" setup>
import MammaLogo from "@/assets/svgs/MammaLogo.vue";
import LoginLogoutBar from "@/components/LoginLogoutBar.vue";
import { ROUTE } from "@/constants/route";
</script>

<template>
  <header flex justify-between items-center>
    <h1>
      <RouterLink :to="ROUTE.HOME">
        <MammaLogo />
      </RouterLink>
    </h1>
    <LoginLogoutBar />
  </header>
</template>
