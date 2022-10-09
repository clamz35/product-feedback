<template>
	<InputWrapper
		component="textarea"
		:errorMessage="props.errorMessage"
	></InputWrapper>
</template>
<script lang="ts" setup>
import InputWrapper from './InputWrapper.vue';

const props = defineProps<{ errorMessage?: string }>();
</script>
