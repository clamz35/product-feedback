<template>
	<UiCard v-if="feedback">
		<p class="text-l font-bold mb-7">{{ getNbComments(feedback) }} comments</p>
		<FeedbackComment
			v-for="comment in feedback.comments"
			:key="comment.id"
			:comment="comment"
			class="py-8 border-[#8C92B340] border-solid border-b"
		>
		</FeedbackComment>
	</UiCard>
</template>

<script setup lang="ts">
const { feedback, getNbComments } = useFeedback();
</script>
