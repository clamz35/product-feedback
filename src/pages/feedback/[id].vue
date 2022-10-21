<template>
	<section class="max-w-full w-[730px] flex flex-col gap-6">
		<GoBackButton />
		<FeedbackCard v-if="feedback" :feedback="feedback"></FeedbackCard>
		<FeedbackComments />
		<FeedbackCommentFormCard></FeedbackCommentFormCard>
	</section>
</template>

<script setup lang="ts">
const { feedback, fetchFeedback } = useFeedback();

const route = useRoute();
const router = useRouter();
console.log(route.params.id);
fetchFeedback(Number(route.params.id));
</script>
