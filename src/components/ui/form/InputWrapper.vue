<template>
	<span class="flex flex-col gap-1">
		<component
			:is="comp"
			class="rounded bg-secondary-400 py-3 px-6 text-s min-w-[200px] min-h-[46px] focus-visible:outline-accent-secondary-500 resize-none"
			:class="{
				'outline-error-500 outline-2 outline': !!props.errorMessage,
			}"
			:context="props"
			:options="options"
			:disabled="disabled"
			:maxlength="maxlength"
			:placeholder="placeholder"
			v-model="value"
		></component>
		<span
			class="transition-opacity text-error-500"
			:class="{
				'opacity-0': !props.errorMessage,
				'opacity-100': !!props.errorMessage,
			}"
		>
			{{ errorMessage }}
		</span>
	</span>
</template>

<script lang="ts" setup>
import { ConcreteComponent } from 'vue';
import { FieldOptions } from '~~/models/field-options.model';

type ComponentsMap = Record<
	string,
	{
		component: string;
	}
>;

const props = defineProps<{
	component: string;
	options?: FieldOptions<unknown>[];
	disabled?: boolean;
	errorMessage?: string;
	maxlength?: number;
	placeholder?: string;
	modelValue?: unknown;
}>();

const components: ComponentsMap = {
	text: {
		component: 'InputTextField',
	},
	dropdown: {
		component: 'Dropdown',
	},
	textarea: {
		component: 'Textarea',
	},
};

const emit = defineEmits(['update:modelValue']);

const value = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});

let comp: string | ConcreteComponent | null = null;
if (components[props.component]) {
	comp = resolveComponent(components[props.component].component);
}
</script>
