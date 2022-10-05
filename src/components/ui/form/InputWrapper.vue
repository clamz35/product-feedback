<template>
	<span class="flex flex-col gap-1">
		<component
			:is="props.component"
			class="rounded bg-secondary-400 py-3 px-6 text-s focus-visible:outline-accent-secondary-500"
			:class="{
				'outline-error-500 outline-2 outline': !!props.errorMessage,
			}"
		></component>
		<span
			class="transition-opacity text-error-500"
			:class="{
				'opacity-0': !props.errorMessage,
				'opacity-100': !!props.errorMessage,
			}"
		>
			{{ errorMessage }}
		</span>
	</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
	component: unknown;
	errorMessage?: string;
}>();
</script>
