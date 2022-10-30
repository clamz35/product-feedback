<template>
	<Tag @click.prevent="addVote()">
		<span
			class="flex gap-2 items-center w-8"
			:class="{
				'flex-col': !isInline,
			}"
		>
			<Icon icon="fa-brand fa-chevron-up" class="leading-none" /><span
				class="leading-none"
				>{{ nbVotes }}</span
			>
		</span>
	</Tag>
</template>

<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/shared';
import Icon from './Icon.vue';
import Tag from './Tag.vue';

const props = withDefaults(
	defineProps<{
		initialNbVotes?: number;
		isInline?: boolean;
	}>(),
	{
		initialNbVotes: 0,
		isInline: false,
	},
);

const emits = defineEmits<{
	(e: 'addVote', nbVotes: number): void;
}>();

let nbVotes = ref(props.initialNbVotes);

const addVoteDebounced = useDebounceFn(
	() => {
		emits('addVote', nbVotes.value);
	},
	500,
	{ maxWait: 5000 },
);

const addVote = (): void => {
	nbVotes.value = nbVotes.value + 1;

	addVoteDebounced();
};
</script>
