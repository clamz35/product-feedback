<template>
	<div>
		<UiCard
			class="!bg-primary-700 flex items-center gap-10"
			:no-padding-block="true"
		>
			<UiIcon icon="fa-brand fa-lightbulb" class="text-white" />
			<span class="font-bold text-white">6 suggestions</span>
			<UiVoteSortMenu class="flex-1"></UiVoteSortMenu>
			<AddFeedbackBtn class="justify-self-end"></AddFeedbackBtn>
		</UiCard>
		<FeedbackList></FeedbackList>
	</div>
</template>
