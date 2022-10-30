<template>
	<input ref="textField" type="text" v-model="value" />
</template>
<script lang="ts" setup>
const props = defineProps<{
	errorMessage?: string;
	modelValue: string;
	focus?: boolean;
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

const textField = ref<HTMLInputElement>();
if (props.focus) {
	nextTick(() => textField.value?.focus());
}

onMounted(() => {
	if (props.focus) {
		nextTick(() => textField.value?.focus());
	}
});
</script>

<style lang="scss" scoped>
.input {
	background: none;
}
</style>
