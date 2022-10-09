<template>
	<input type="text" v-model="value" />
</template>
<script lang="ts" setup>
const props = defineProps<{ errorMessage?: string; modelValue: string }>();

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

<style lang="scss" scoped>
.input {
	background: none;
}
</style>
