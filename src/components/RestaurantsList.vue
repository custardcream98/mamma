<script setup lang="ts">
import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { routeResolver } from "@/utils/route";
import { RouterLink, useRouter } from "vue-router";
import { modalInject } from "./Modal";
import { RoundedBadgeItem, RoundedBadgeWrapper } from "./RoundedBadge";

const { data } = useGetRestaurantsDataQuery();
const { closeModal } = modalInject();
const router = useRouter();

const handleRouterLinkClick = (id: string) => {
  closeModal();
  router.push(routeResolver(ROUTE_NAME.RESULT, id));
};
</script>

<template>
  <ul w-full v-if="data">
    <li
      v-for="{ meta } of data"
      px-10px
      py-20px
      flex
      flex-col
      items-start
      b-b-1
      last:b-none
      last:pb-0
      first:pt-0
      transition-colors
      hover:bg-wavveBlue_100
      cursor-pointer
      @click="handleRouterLinkClick(meta.id.toString())"
    >
      <span>{{ meta.name }}</span>
      <RoundedBadgeWrapper as="ul">
        <RoundedBadgeItem>
          {{ meta.type }}
        </RoundedBadgeItem>
        <RoundedBadgeItem v-for="tag of meta.tags">
          {{ tag }}
        </RoundedBadgeItem>
      </RoundedBadgeWrapper>
      <RouterLink
        sr-only
        @click="closeModal"
        :to="routeResolver(ROUTE_NAME.RESULT, meta.id.toString())"
        >레스토랑 정보 보기</RouterLink
      >
    </li>
  </ul>
</template>
