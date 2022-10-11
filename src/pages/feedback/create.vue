<template>
	<div class="max-w-[540px] flex flex-col gap-16">
		<GoBackButton />
		<FeedbackCreateForm />
	</div>
</template>

<script setup lang="ts">
// Categories
const { fetchCategories } = useCategory();
fetchCategories();
</script>
