<template>
	<UiCard>
		<FeedbackCommentInput v-model="comment" :maxlength="commentMaxChar" />
		<div class="flex justify-between items-center m-4">
			<span>{{ commentCharLeft }} characters left</span>
			<UiButton @click="addComment({ message: comment })"
				>Post a comment</UiButton
			>
		</div>
	</UiCard>
</template>

<script setup lang="ts">
const comment = ref('');

const commentMaxChar = 250;

const commentCharLeft = computed(() => commentMaxChar - comment.value.length);

const { addComment } = useFeedback();
</script>
