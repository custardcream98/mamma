<script setup lang="ts">
import { ROUTE_NAME } from "@/constants/route";

import { routeResolver } from "@/utils/route";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { modalInject } from "../Modal";

const props = defineProps<{
  searchTarget: string;
  restaurantId: number;
  restaurantName: string;
  restarurantRating: string;
}>();

const { closeModal } = modalInject();
const matchResult = computed(() => {
  const match = props.restaurantName.split(props.searchTarget);
  return { prefix: match[0], match: props.searchTarget, suffix: match[1] };
});
</script>

<template>
  <RouterLink
    flex
    justify-between
    @click="closeModal"
    :to="routeResolver(ROUTE_NAME.RESULT, restaurantId.toString())"
  >
    <strong font-300>
      <span>{{ matchResult.prefix }}</span>
      <span font-500>{{ matchResult.match }}</span>
      <span>{{ matchResult.suffix }}</span>
    </strong>
    <strong font-500>
      <span>{{ restarurantRating }}</span>
      <span text-wavveGray> / 5</span>
    </strong>
  </RouterLink>
</template>
