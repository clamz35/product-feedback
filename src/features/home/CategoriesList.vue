<template>
	<UiCard class="flex flex-wrap gap-x-2 gap-y-3">
		<NuxtLink to="/">
			<UiTag
				:is-active="categorySelected === null"
				@click="selectCategory(null)"
			>
				All
			</UiTag>
		</NuxtLink>
		<NuxtLink
			:to="{ path: '/', query: { category: category.id } }"
			v-for="category in categories"
		>
			<UiTag :is-active="categorySelected === category">{{
				category.name
			}}</UiTag>
		</NuxtLink>
	</UiCard>
</template>

<script setup lang="ts">
const { categories } = useCategory();

const { categorySelected, selectCategory } = useFeedback();
</script>
