<template>
	<UiCard v-if="feedback">
		<p class="text-l font-bold mb-7">{{ getNbComments(feedback) }} comments</p>
		<div v-for="comment in feedback.comments">
			<div class="flex gap-8 items-start">
				<img
					v-if="comment.account"
					:src="comment.account?.avatarUrl"
					class="rounded-[50%] w-10 aspect-square"
				/>
				<div>
					<div v-if="comment.account">
						<p class="font-bold text-xs text-primary-600">
							{{ comment.account.firstname }} {{ comment.account.lastname }}
						</p>
						<p class="text-primary-500 text-xs">
							@{{ comment.account.firstname }}
						</p>
					</div>
					<p class="mt-4">{{ comment.message }}</p>
				</div>
			</div>
		</div>
	</UiCard>
</template>

<script setup lang="ts">
const { feedback, getNbComments } = useFeedback();
</script>
