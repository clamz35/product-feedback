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
const route = useRoute();

// Categories
const { fetchCategories } = useCategory();
await useAsyncData('categories', () => {
	return fetchCategories();
});

//  Feedbacks
const { fetchFeedbacks } = useFeedback();

const categoryQuery = computed((): number | null => {
	const category = route.query.category;
	if (category && typeof category !== 'string') {
		throw new Error('Category query must be a string or null');
	}

	return category ? Number(category) : null;
});

const { refresh } = await useAsyncData('feedbacks', () => {
	return fetchFeedbacks({ category: categoryQuery.value });
});

watch(categoryQuery, () => {
	refresh();
});
</script>
