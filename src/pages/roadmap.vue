<template>
	<div class="w-[1110px] max-w-full">
		<RoadmapHeader></RoadmapHeader>
		<RoadmapBody class="mt-12"></RoadmapBody>
	</div>
</template>

<script setup lang="ts">
const { fetchFeedbacks } = useFeedback();

useAsyncData('feedbacks', () => fetchFeedbacks());
</script>
