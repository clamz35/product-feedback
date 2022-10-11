<template>
	<div v-if="feedbacks">
		<div v-if="feedbacks.length > 0">
			<NuxtLink
				v-for="feedback in feedbacks"
				:key="feedback.id"
				:to="`/feedback/${feedback.id}`"
			>
				<FeedbackCard class="flex gap-10 items-start my-6" :feedback="feedback">
				</FeedbackCard>
			</NuxtLink>
		</div>
		<FeedbackEmpty v-else />
	</div>
</template>

<script setup lang="ts">
const { feedbacks } = useFeedback();
</script>
