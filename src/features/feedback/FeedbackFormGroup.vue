<template>
	<div>
		<div class="text-xs font-bold tracking-[-0.19px] text-primary-600">
			{{ title }}
		</div>
		<div class="text-xs mb-4">{{ detail }}</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string; detail: string }>();
</script>
