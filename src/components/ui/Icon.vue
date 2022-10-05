<template>
	<span v-if="icon">
		<fontAwesomeIcon :icon="icon"></fontAwesomeIcon>
	</span>
</template>

<script lang="ts" setup>
defineProps<{
	icon: string;
}>();
</script>
