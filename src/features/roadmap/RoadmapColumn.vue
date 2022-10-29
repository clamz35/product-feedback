<template>
	<div>
		<div class="text-l font-bold text-primary-600" ref="el">
			<span class="inline-block first-letter:uppercase">{{ title }}</span> ({{
				feedbacks?.length ?? 0
			}})
		</div>

		<div class="flex flex-col gap-6 mt-8">
			<div v-for="feedback in feedbacks" :key="feedback.id">
				<RoadmapItem class="block" :feedback="feedback"></RoadmapItem>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Position, useDraggable } from '@vueuse/core';
import { FeedbackInterface } from '~~/models/feedback.model';

defineProps<{
	title: string;
	feedbacks: FeedbackInterface[] | null;
}>();
const el = ref<HTMLElement | null>(null);
const startDrag = (evt: DragEvent, item: FeedbackInterface): void => {
	if (!evt.dataTransfer) return;
	evt.dataTransfer.dropEffect = 'move';
	evt.dataTransfer.effectAllowed = 'move';
	if (item.id) {
		evt.dataTransfer.setData('itemID', item.id.toString());
	}
	console.log(item);
};

const onDrop = (evt: DragEvent): void => {
	if (!evt.dataTransfer) return;
	const itemID = evt.dataTransfer.getData('itemID');
	console.log('drop : ', { event: evt, itemID });
};

const { x, y, style } = useDraggable(el, {
	onMove: (position: Position, event: PointerEvent) => {
		console.log({ position, event });
	},
});
</script>
