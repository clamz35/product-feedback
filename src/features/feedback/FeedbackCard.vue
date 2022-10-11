<template>
	<UiCard class="flex gap-10 items-start">
		<UiUpvote class="flex-grow-0"></UiUpvote>
		<div class="flex-1">
			<div class="text-l font-bold">{{ feedback.name }}</div>
			<div>{{ feedback.detail }}</div>
			<UiTag class="mt-4 inline-block">{{ feedback.state }}</UiTag>
		</div>
		<div class="self-center"><UiIcon icon="fa-brand fa-comment" /> 2</div>
	</UiCard>
</template>

<script setup lang="ts">
import { FeedbackInterface } from '~~/models/feedback.model';

defineProps<{ feedback: FeedbackInterface }>();
</script>
