<template>
	<div class="grid grid-cols-3 gap-4">
		<RoadmapColumn
			title="planned"
			:feedbacks="getPlannedFeedbacks()"
		></RoadmapColumn>
		<RoadmapColumn
			title="In progress"
			:feedbacks="getInProgressFeedbacks()"
		></RoadmapColumn>
		<RoadmapColumn title="Live" :feedbacks="getLiveFeedbacks()"></RoadmapColumn>
	</div>
</template>

<script setup lang="ts">
const { getPlannedFeedbacks, getInProgressFeedbacks, getLiveFeedbacks } =
	useFeedback();
</script>
