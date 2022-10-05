<template>
	<span
		class="hover:text-accent-primary-500 transition-colors flex justify-between items-center w-full"
	>
		<slot></slot>
		<Icon
			v-if="props.isActive"
			icon="fa-brand fa-check"
			class="text-accent-primary-500"
		/>
	</span>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';
const props = withDefaults(
	defineProps<{
		isActive?: boolean;
	}>(),
	{
		isActive: false,
	},
);
</script>
