<template>
	<Tag @click="addVote()">
		<span
			class="flex gap-2 items-center"
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

let nbVotes = ref(props.initialNbVotes);

const addVote = (): void => {
	nbVotes.value = nbVotes.value + 1;
};
</script>
