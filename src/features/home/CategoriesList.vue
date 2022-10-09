<template>
	<UiCard class="flex flex-wrap gap-x-2 gap-y-3">
		<UiTag :is-active="categorySelected === null" @click="selectCategory(null)"
			>All</UiTag
		>
		<UiTag
			v-for="category in categories"
			@click="selectCategory(category)"
			:is-active="categorySelected === category"
			>{{ category.name }}</UiTag
		>
	</UiCard>
</template>

<script setup lang="ts">
const { categories } = useCategory();

const { categorySelected, selectCategory } = useFeedback();
</script>
