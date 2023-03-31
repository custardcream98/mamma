<script setup lang="ts">
import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { routeResolver } from "@/utils/route";
import LogoutButton from "./LogoutButton.vue";
import { modalInject } from "./Modal";
import { TableData, TableHeader, TableRow, TableWrapper } from "./Table";

const { data } = useGetRestaurantsDataQuery();
const { closeModal } = modalInject();
</script>

<template>
  <LogoutButton />
  <TableWrapper v-if="data">
    <TableRow v-for="{ meta } of data">
      <TableHeader>{{ meta.name }}</TableHeader>
      <TableData hover:text-wavveBlue @click="closeModal"
        ><RouterLink :to="routeResolver(ROUTE_NAME.RESULT, meta.id.toString())"
          >링크</RouterLink
        ></TableData
      >
    </TableRow>
  </TableWrapper>
</template>
