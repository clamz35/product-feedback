<template>
	<form>
		<label for="comment-input">Add a comment</label>
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
		maxlength?: number;
		modelValue?: unknown;
		disabled?: boolean;
	}>(),
	{
		labelIsDisplay: true,
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
