<template>
  <span v-if="icon">
    <fontAwesomeIcon :icon="icon"></fontAwesomeIcon>
  </span>
</template>

<script lang="ts" setup>
const props =
  defineProps<{
    icon: string;
  }>();
</script>
