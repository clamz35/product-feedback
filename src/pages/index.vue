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
import HomeBody from '~~/features/home/HomeBody.vue';
import HomeSidebar from '~~/features/home/HomeSidebar.vue';

// Categories
const { fetchCategories } = useCategory();
onMounted(() => fetchCategories());

//  Feedbacks
const { fetchFeedbacks } = useFeedback();

onMounted(() => fetchFeedbacks());
</script>
