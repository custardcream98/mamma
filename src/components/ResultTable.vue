<script lang="ts" setup>
import { useRestaurantMetaData } from "@/composables";
import { numberToFormattedString } from "@/utils/format";
import { withDefaultString } from "@/utils/string";

const { restaurantMetaData } = useRestaurantMetaData();
</script>

<template>
  <table mt-16px v-if="restaurantMetaData">
    <tr>
      <th>카테고리</th>
      <td>{{ withDefaultString(restaurantMetaData.type, "-") }}</td>
    </tr>
    <tr>
      <th>대표메뉴</th>
      <td>{{ withDefaultString(restaurantMetaData.menu, "-") }}</td>
    </tr>
    <tr>
      <th>가격</th>
      <td>
        {{
          restaurantMetaData.price
            ? `인당 약 ${numberToFormattedString(restaurantMetaData.price)}원`
            : "-"
        }}
      </td>
    </tr>
    <tr>
      <th>위치</th>
      <td>{{ withDefaultString(restaurantMetaData.location, "-") }}</td>
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
