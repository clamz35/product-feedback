<template>
	<section class="min-w-[1110px] flex flex-col gap-6">
		<GoBackButton />
		<FeedbackCard :feedback="feedback"></FeedbackCard>
	</section>
</template>

<script setup lang="ts">
import { PRODUCT_STATE_ENUM } from '~~/enums/product-state.enum';
import { Feedback } from '~~/models/feedback.model';

const feedback = new Feedback({
	name: 'test',
	detail: 'ded',
	state: PRODUCT_STATE_ENUM.IN_PROGRESS,
});
</script>
