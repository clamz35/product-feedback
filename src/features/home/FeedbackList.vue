<template>
	<div v-if="feedbacks">
		<UiCard v-for="feedback in feedbacks" class="flex gap-10 items-start my-6">
			<UiUpvote class="flex-grow-0"></UiUpvote>
			<div class="flex-1">
				<div class="text-l font-bold">{{ feedback.attributes.name }}</div>
				<div>{{ feedback.attributes.detail }}</div>
				<UiTag class="mt-4 inline-block">{{ feedback.attributes.state }}</UiTag>
			</div>
			<div class="self-center"><UiIcon icon="fa-brand fa-comment" /> 2</div>
		</UiCard>
	</div>
</template>

<script setup lang="ts">
const { getFeedbacks } = useFeedback();
const { data: feedbacks } = await getFeedbacks();
</script>
