<template>
	<span
		class="rounded px-4 py-1.5 w-fit font-semibold hover:text-accent-secondary-500 hover:bg-secondary-600 cursor-pointer transition-colors select-none"
		:class="{
			'bg-secondary-500 text-accent-secondary-500': !props.isActive,
			'bg-accent-secondary-500 text-white': props.isActive,
		}"
	>
		<slot></slot>
	</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ isActive?: boolean }>(), {
	isActive: false,
});
</script>

<style lang="scss" scoped></style>
