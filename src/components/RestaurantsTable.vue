<script setup lang="ts">
import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { routeResolver } from "@/utils/route";
import { modalInject } from "./Modal";
import { RoundedBadgeItem, RoundedBadgeWrapper } from "./RoundedBadge";

const { data } = useGetRestaurantsDataQuery();
const { closeModal } = modalInject();
</script>

<template>
  <table w-full v-if="data">
    <tr
      v-for="{ meta } of data"
      py-20px
      flex
      justify-between
      items-center
      b-b-1
      last:b-none
      last:pb-0
      first:pt-0
    >
      <th flex flex-col items-start>
        <span>{{ meta.name }}</span>
        <RoundedBadgeWrapper as="ul">
          <RoundedBadgeItem>
            {{ meta.type }}
          </RoundedBadgeItem>
          <RoundedBadgeItem v-for="tag of meta.tags">
            {{ tag }}
          </RoundedBadgeItem>
        </RoundedBadgeWrapper>
      </th>
      <td>
        <RouterLink
          :to="routeResolver(ROUTE_NAME.RESULT, meta.id.toString())"
          font-500
          transition-color
          hover:text-wavveBlue
          break-keep
          @click="closeModal"
        >
          링크
        </RouterLink>
      </td>
    </tr>
  </table>
</template>
