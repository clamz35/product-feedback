<template>
	<Tag @click="addVote()">
		<span class="flex flex-col gap-2 items-center">
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
	}>(),
	{
		initialNbVotes: 0,
	},
);

let nbVotes = ref(props.initialNbVotes);

const addVote = () => {
	nbVotes.value = nbVotes.value + 1;
};
</script>
