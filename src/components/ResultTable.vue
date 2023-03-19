<template>
  <table mt-16px>
    <tr>
      <th>카테코리</th>
      <td>{{ type }}</td>
    </tr>
    <tr>
      <th>대표메뉴</th>
      <td>{{ menu }}</td>
    </tr>
    <tr>
      <th>가격</th>
      <td>{{ price }}</td>
    </tr>
    <tr>
      <th>위치</th>
      <td>{{ location }}</td>
    </tr>
  </table>
</template>

<style scoped>
table th {
  text-align: start;
  padding-right: 10px;
  color: #717171;
  font-weight: 500;
}
</style>

<script lang="ts" setup>
import type { RestaurantMetaData } from "@/types/data";

type ResultTableProps = {
  type: RestaurantMetaData["type"];
  price: RestaurantMetaData["price"];
  menu: RestaurantMetaData["menu"];
  location: RestaurantMetaData["location"];
};
defineProps<ResultTableProps>();
</script>
