<template>
	<div
		class="max-w-[1100px] flex flex-col gap-7 lg:grid lg:grid-cols-suggestion"
	>
		<HomeSidebar class="flex flex-col gap-6"></HomeSidebar>
		<HomeBody></HomeBody>
		<!-- <span v-if="pending"> pending</span>
    <span v-else>
      <div v-for="feedback in feedbacks">---{{ feedback }}----</div>
    </span> -->
	</div>
</template>

<script lang="ts" setup>
// Categories
const { fetchCategories } = useCategory();
useAsyncData('categories', () => {
	return fetchCategories();
});

//  Feedbacks
const { fetchFeedbacks } = useFeedback();

useAsyncData('feedbacks', () => {
	return fetchFeedbacks();
});
</script>
