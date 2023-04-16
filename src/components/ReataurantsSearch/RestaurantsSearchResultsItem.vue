<script setup lang="ts">
import { ROUTE_NAME } from "@/constants/route";

import { useSearchTarget } from "@/store/use-search-target";
import { routeResolver } from "@/utils/route";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { modalInject } from "../Modal";

const props = defineProps<{
  restaurantId: number;
  restaurantName: string;
  restarurantRating: string;
}>();

const searchTarget = useSearchTarget();

const { closeModal } = modalInject();
const matchResult = computed(() => {
  const match = props.restaurantName.split(searchTarget.value);
  return { prefix: match[0], match: searchTarget.value, suffix: match[1] };
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
