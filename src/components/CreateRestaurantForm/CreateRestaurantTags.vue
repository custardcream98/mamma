<script setup lang="ts">
import {
  RoundedBadgeCheckbox,
  RoundedBadgeRadioButton,
  RoundedBadgeWrapper,
} from "@/components";
import { RESTAURANT_TAGS, RESTAURANT_TYPES } from "@/constants/data";
</script>

<template>
  <RoundedBadgeWrapper as="fieldset">
    <legend mb-10px>카테고리</legend>
    <RoundedBadgeRadioButton
      v-for="type of RESTAURANT_TYPES"
      :key="type"
      name="type"
      :value="type"
      required
      >{{ type }}</RoundedBadgeRadioButton
    >
  </RoundedBadgeWrapper>
  <RoundedBadgeWrapper mt-16px as="fieldset">
    <legend mb-10px>태그</legend>
    <RoundedBadgeCheckbox
      v-for="tag of RESTAURANT_TAGS"
      :key="tag"
      :value="tag"
      name="tags"
      >{{ tag }}</RoundedBadgeCheckbox
    >
  </RoundedBadgeWrapper>
</template>
