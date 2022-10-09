<template>
	<div class="relative">
		<div class="cursor-pointer" v-bind="$attrs" @click="toggleOpen()">
			{{ value }}
		</div>
		<UiOverlayMenu
			v-if="isOpen"
			@click="toggleOpen()"
			class="absolute top-0 z-10"
		>
			<UiOverlayMenuItem v-for="option in options">
				<UiSelectableItem
					@click="select(option)"
					:isActive="value === option.label"
					>{{ option.label }}</UiSelectableItem
				>
			</UiOverlayMenuItem>
		</UiOverlayMenu>
	</div>
</template>

<script lang="ts">
export default {
	inheritAttrs: false, // to permit to do v-bind="$attrs" in template
};
</script>

<script lang="ts" setup>
import { FieldOptions } from '~~/models/field-options.model';

interface DropdownProps {
	modelValue: unknown;
	errorMessage?: string;
	options?: Array<FieldOptions<unknown>>;
}

const props = withDefaults(defineProps<DropdownProps>(), { options: () => [] });

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const toggleOpen = (): void => {
	isOpen.value = !isOpen.value;
};

const value = computed({
	get() {
		return props.options.find((option) => option.value === props.modelValue)
			?.label;
	},
	set(value: unknown) {
		emit('update:modelValue', value);
	},
});

const select = (option: FieldOptions<unknown>): void => {
	value.value = option.value;
};
</script>

<style lang="scss" scoped>
.input {
	background: none;
}
</style>
