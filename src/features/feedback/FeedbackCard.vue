<template>
	<UiCard class="flex gap-10 items-start">
		<UiUpvote
			class="flex-grow-0"
			:initialNbVotes="feedback.nbVotes ?? 0"
			@addVote="addVote($event)"
		></UiUpvote>
		<div class="flex-1">
			<div class="text-l font-bold">{{ feedback.name }}</div>
			<div>{{ feedback.detail }}</div>
			<UiTag class="mt-4 inline-block">{{ feedback.state }}</UiTag>
		</div>
		<div class="self-center flex gap-2">
			<UiIcon icon="fa-brand fa-comment" />{{ getNbComments(feedback) }}
		</div>
	</UiCard>
</template>

<script setup lang="ts">
import { FeedbackInterface } from '~~/models/feedback.model';

const props = defineProps<{ feedback: FeedbackInterface }>();

const { getNbComments, addUpVote } = useFeedback();

const addVote = (nbVotes: number): void => {
	if (!props.feedback.id) {
		throw new Error('feedback.id is undefined or null');
	}

	addUpVote(props.feedback.id, nbVotes);
};
</script>
