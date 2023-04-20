<script lang="ts" setup>
import type { RestaurantType } from "@/types/data";
import { numberToFormattedString } from "@/utils/format";

defineProps<{
  type?: RestaurantType;
  menu?: string;
  price?: number;
  location?: string;
}>();
</script>

<template>
  <table>
    <tr>
      <th>카테고리</th>
      <td>{{ type ?? "-" }}</td>
    </tr>
    <tr>
      <th>대표메뉴</th>
      <td>{{ menu ?? "-" }}</td>
    </tr>
    <tr>
      <th>가격</th>
      <td>
        {{ price ? `인당 약 ${numberToFormattedString(price)}원` : "-" }}
      </td>
    </tr>
    <tr>
      <th>위치</th>
      <td>{{ location ?? "-" }}</td>
    </tr>
  </table>
</template>

<style scoped>
table th {
  text-align: start;
  padding-right: 15px;
  color: #717171;
  font-weight: 500;
}
</style>
