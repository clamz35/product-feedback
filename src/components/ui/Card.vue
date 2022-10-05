<template>
	<div
		class="rounded bg-white p-6"
		:class="{
			'py-0': noPaddingBlock,
		}"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	noPaddingBlock?: boolean;
}>();
</script>
