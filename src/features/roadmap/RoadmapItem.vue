<template>
	<UiCard class="item" :class="`${PRODUCT_STATE[feedback.state].shadowColor}`">
		<ProductState :state="PRODUCT_STATE[feedback.state]"></ProductState>
		<NuxtLink class="block mt-2" :to="`/feedback/${feedback.id}`">
			<div
				class="text-l font-bold text-primary-600 transition-colors hover:text-accent-secondary-500"
			>
				{{ feedback.name }}
			</div>
		</NuxtLink>
		<p>{{ feedback.detail }}</p>
		<UiTag class="mt-4 inline-block">{{ feedback.state }}</UiTag>
		<UiUpvote class="block mt-4" :isInline="true"></UiUpvote>
	</UiCard>
</template>

<script setup lang="ts">
import { PRODUCT_STATE } from '~~/constants/product-state.constants';
import { FeedbackInterface } from '~~/models/feedback.model';

defineProps<{
	feedback: FeedbackInterface;
}>();
</script>

<style lang="scss">
.item {
	box-shadow: inset 0 34px 0px -26px var(--tw-shadow-color);
}
</style>
