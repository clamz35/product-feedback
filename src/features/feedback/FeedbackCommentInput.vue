<template>
	<form
		:class="{
			'flex gap-4': isInline,
		}"
	>
		<label
			v-if="labelIsDisplay"
			for="comment-input"
			class="text-l text-primary-600 font-bold block mb-6"
			>Add a comment</label
		>
		<InputWrapper
			component="textarea"
			title="Add a comment"
			v-model="value"
			:disabled="disabled"
			:maxlength="maxlength"
			placeholder="Type your comment here"
		></InputWrapper>
	</form>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		labelIsDisplay?: boolean;
		isInline?: boolean;
		maxlength?: number;
		modelValue?: unknown;
		disabled?: boolean;
	}>(),
	{
		labelIsDisplay: true,
		isInline: false,
		disabled: false,
	},
);
const emit = defineEmits(['update:modelValue']);

const value = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});
</script>
