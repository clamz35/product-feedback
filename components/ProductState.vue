<template>
  <div class="flex items-center gap-2 lg:gap-4">
    <span class="h-2 aspect-square rounded-[50%]" :class="state.color"></span>
    <span>{{ state.label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ProductStateItem } from "~~/constants/product-state.constants";

const props = withDefaults(
  defineProps<{
    state: ProductStateItem;
  }>(),
  {}
);
</script>
