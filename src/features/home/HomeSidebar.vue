<template>
	<div>
		<UiCard class="plop text-white flex flex-col justify-end">
			<h1 class="text-xl font-bold">Frontend mentor</h1>
			<h2 class="font-medium">Feedback board</h2>
		</UiCard>

		<CategoriesList></CategoriesList>
		<UiCard class="flex flex-col gap-6">
			<div class="flex justify-between">
				<span class="font-bold text-l">Roadmap</span>
				<NuxtLink to="/roadmap">View</NuxtLink>
			</div>
			<div>
				<div>
					<ProductState
						:state="PRODUCT_STATE[PRODUCT_STATE_ENUM.PLANNED]"
					></ProductState>
					<ProductState
						:state="PRODUCT_STATE[PRODUCT_STATE_ENUM.IN_PROGRESS]"
					></ProductState>
					<ProductState
						:state="PRODUCT_STATE[PRODUCT_STATE_ENUM.LIVE]"
					></ProductState>
				</div>
			</div>
		</UiCard>
	</div>
</template>

<script setup lang="ts">
import { PRODUCT_STATE } from '~/constants/product-state.constants';
import { PRODUCT_STATE_ENUM } from '~/enums/product-state.enum';
</script>

<style lang="scss" scoped>
.plop {
	background: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
	height: 150px;
}
</style>
