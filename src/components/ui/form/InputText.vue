<template>
	<InputWrapper
		component="input"
		type="text"
		title="input TTTEEXXT"
		:errorMessage="props.errorMessage"
	></InputWrapper>
</template>
<script lang="ts" setup>
import InputWrapper from './InputWrapper.vue';

const props = defineProps<{ errorMessage?: string }>();
</script>

<style lang="scss" scoped>
.input {
	background: none;
}
</style>
