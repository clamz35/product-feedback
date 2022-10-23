<template>
	<div>
		<div class="flex gap-8 items-start mb-8">
			<img
				v-if="comment.account"
				:src="comment.account?.avatarUrl"
				class="rounded-[50%] w-10 aspect-square"
				aria-hidden="true"
			/>
			<div class="flex-1">
				<div class="flex justify-between">
					<div v-if="comment.account">
						<p class="font-bold text-xs text-primary-600">
							{{ comment.account.firstname }} {{ comment.account.lastname }}
						</p>
						<p class="text-primary-500 text-xs">
							@{{ comment.account.firstname }}
						</p>
					</div>
					<span
						class="text-accent-secondary-500 cursor-pointer underline-offset-2 hover:underline"
						@click="toggleForm()"
					>
						Reply
					</span>
				</div>
				<p class="mt-4">{{ comment.message }}</p>
			</div>
		</div>
		<div
			v-if="comment.comments"
			class="pl-8 ml-4 border-l border-solid border-[#6471961A]"
		>
			<FeedbackComment
				v-for="child in comment.comments"
				:key="child.id"
				:comment="child"
			>
			</FeedbackComment>
		</div>

		<form
			v-if="formIsDisplay"
			@submit="submitForm()"
			class="flex gap-4 items-start"
		>
			<FeedbackCommentInput
				class="flex-1"
				v-model="newComment"
				:labelIsDisplay="false"
			></FeedbackCommentInput>

			<UiButton type="submit">Post a comment</UiButton>
		</form>
	</div>
</template>

<script setup lang="ts">
import { CommentInterface } from '~~/models/comment.model';

const props = defineProps<{ comment: CommentInterface }>();

const { addReply } = useFeedback();

const newComment = ref('');

const formIsDisplay = ref(false);
const toggleForm = (): boolean => (formIsDisplay.value = !formIsDisplay.value);
const closeForm = (): boolean => (formIsDisplay.value = false);
const submitForm = (): void => {
	addReply(props.comment, { message: newComment.value });
	closeForm();
};
</script>
