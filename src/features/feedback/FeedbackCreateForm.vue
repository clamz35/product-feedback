<template>
	<UiCard>
		<h1 class="text-xxl mb-10 font-bold text-primary-600">
			Create New Feedback
		</h1>

		<div class="flex flex-col gap-6">
			<FeedbackFormGroup
				title="Feedback Title"
				detail="Add a short, descriptive headline"
			>
				<InputWrapper
					component="text"
					type="text"
					title="Feedback Title"
					v-model="form.title"
				></InputWrapper>
			</FeedbackFormGroup>
			<FeedbackFormGroup
				title="Category"
				detail="Choose a category for your feedback"
			>
				<InputWrapper
					component="dropdown"
					title="Category"
					v-model="form.category"
					:options="categoriesOptions"
				></InputWrapper>
			</FeedbackFormGroup>
			<FeedbackFormGroup
				title="Feedback Detail"
				detail="Include any specific comments on what should be improved, added, etc."
			>
				<InputWrapper
					component="textarea"
					title="Feedback Detail"
					v-model="form.detail"
				></InputWrapper>
			</FeedbackFormGroup>
		</div>
	</UiCard>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Category } from '~~/models/category.model';
import { FieldOptions } from '~~/models/field-options.model';

const form: Ref<{
	title: string;
	category: Category | null;
	detail: string;
}> = ref({ title: '', category: null, detail: '' });

const { categories } = useCategory();

const mapCategoriesToFieldOptions = (
	category: Category,
): FieldOptions<Category> => {
	return {
		label: category.name,
		value: category,
	};
};

const categoriesOptions = computed((): FieldOptions<Category | null>[] => {
	const categoriesOptions =
		categories.value?.map((category): FieldOptions<Category> => {
			return mapCategoriesToFieldOptions(category);
		}) ?? [];

	return [
		{
			label: 'All',
			value: null,
		},
		...categoriesOptions,
	];
});
</script>
