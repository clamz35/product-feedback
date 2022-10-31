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
import { FetchFeedbacksParams } from '~~/composables/useFeedback';
import { SORT_ENUM } from '~~/enums/sort.enum';

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

const sortByQuery = computed((): string | null => {
	const sortBy = route.query.sortBy;
	if (sortBy && typeof sortBy !== 'string') {
		throw new Error('sortBy query must be a string or null');
	}

	return sortBy;
});

const sortOrder = computed((): SORT_ENUM | null => {
	const sortOrder = route.query.sortOrder;
	if (sortOrder && typeof sortOrder !== 'string') {
		throw new Error('sortOrder query must be a string or null');
	}

	return sortOrder === 'asc' ? SORT_ENUM.ASC : SORT_ENUM.DESC;
});

const { refresh } = await useAsyncData('feedbacks', () => {
	const params: FetchFeedbacksParams = {
		category: categoryQuery.value,
	};

	if (sortByQuery.value) {
		params['sort'] = {
			name: sortByQuery.value,
			direction: sortOrder.value ? sortOrder.value : null,
		};
	}
	return fetchFeedbacks(params);
});

watch([categoryQuery, sortByQuery, sortOrder], () => {
	refresh();
});
</script>
