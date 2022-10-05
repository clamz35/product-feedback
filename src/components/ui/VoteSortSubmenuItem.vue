<template>
	<OverlayMenuItem @click="onClick()">
		<SelectableItem :is-active="isActive">
			{{ props.voteSort }}
		</SelectableItem>
	</OverlayMenuItem>
</template>

<script lang="ts" setup>
import { VOTE_SORT } from '~~/enums/vote-sort.enum';
import OverlayMenuItem from './OverlayMenuItem.vue';
import SelectableItem from './SelectableItem.vue';

const props = withDefaults(
	defineProps<{
		voteSort: VOTE_SORT;
		isActive?: boolean;
	}>(),
	{
		isActive: false,
	},
);

const emit = defineEmits<{
	(e: 'select', voteSort: VOTE_SORT): void;
}>();

const onClick = () => {
	emit('select', props.voteSort);
};
</script>
