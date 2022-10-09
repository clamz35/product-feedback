<template>
	<div v-if="feedbacks">
		<div v-if="feedbacks.length > 0">
			<UiCard
				v-for="feedback in feedbacks"
				class="flex gap-10 items-start my-6"
			>
				<UiUpvote class="flex-grow-0"></UiUpvote>
				<div class="flex-1">
					<div class="text-l font-bold">{{ feedback.name }}</div>
					<div>{{ feedback.detail }}</div>
					<UiTag class="mt-4 inline-block">{{ feedback.state }}</UiTag>
				</div>
				<div class="self-center"><UiIcon icon="fa-brand fa-comment" /> 2</div>
			</UiCard>
		</div>
		<FeedbackEmpty v-else />
	</div>
</template>

<script setup lang="ts">
const { feedbacks } = useFeedback();
</script>
