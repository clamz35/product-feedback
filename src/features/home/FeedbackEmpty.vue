<template>
	<UiCard class="mt-6 py-28">
		<div class="flex flex-col gap-14 mx-auto max-w-[410px]">
			<img
				src="/assets/images/empty-icon.svg"
				alt="empty-icon"
				class="w-32 mx-auto"
				aria-hidden="false"
			/>
			<div class="text-center">
				<h2 class="mb-4 text-xxl font-bold tracking-[-0.33px]">
					There is no feedback yet.
				</h2>
				<p>
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
				<AddFeedbackBtn class="mt-12" />
			</div>
		</div>
	</UiCard>
</template>
