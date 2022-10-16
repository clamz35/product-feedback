<template>
	<textarea
		class="textarea"
		v-model="value"
		:disabled="disabled"
		:maxlength="maxlength"
		:placeholder="placeholder"
	></textarea>
</template>
<script lang="ts" setup>
const props = defineProps<{
	modelValue: string;
	disabled?: boolean;
	maxlength?: number;
	placeholder?: string;
}>();

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

<style scoped lang="scss">
.textarea {
	resize: none;
	min-height: 6.25rem;
}
</style>
