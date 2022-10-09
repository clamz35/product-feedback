<template>
	<UiCard>
		<h1 class="text-xxl mb-10 font-bold text-primary-600">
			Create New Feedback
		</h1>

		<FeedbackFormGroup
			title="Feedback Title"
			detail="Add a short, descriptive headline"
		>
			<UiFormInputText v-model="form.title"></UiFormInputText>
		</FeedbackFormGroup>

		<FeedbackFormGroup
			title="Category"
			detail="Choose a category for your feedback"
		>
			<UiFormDropdown v-model="form.title"></UiFormDropdown>
		</FeedbackFormGroup>

		<FeedbackFormGroup
			title="Feedback Detail"
			detail="Include any specific comments on what should be improved, added, etc."
		>
			<UiFormTextarea v-model="form.title"></UiFormTextarea>
		</FeedbackFormGroup>
	</UiCard>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const form: Ref<{
	title: string;
	category: number | null;
	detail: string;
}> = ref({ title: '', category: null, detail: '' });
</script>
