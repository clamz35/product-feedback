<template>
	<div class="relative h-max">
		<div
			class="bg-primary-700 py-6 px-4 rounded inline-flex items-center gap-2.5 text-secondary-500 cursor-pointer select-none"
			@click="toggleMenu()"
		>
			<div>
				<span>Sort by: </span>
				<span class="font-bold">{{ sortBy }}</span>
			</div>
			<Icon :icon="`fa-brand ${menuIcon}`" />
		</div>

		<OverlayMenu
			class="sub-menu absolute opacity-0 transition-opacity w-[255px] pointer-events-none"
			:class="{
				'opacity-100 pointer-events-auto': menuIsOpen,
			}"
		>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.MOST_UPVOTES"
				:is-active="sortBy === VOTE_SORT.MOST_UPVOTES"
				@select="sortBy = $event"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.LEAST_UPVOTES"
				:is-active="sortBy === VOTE_SORT.LEAST_UPVOTES"
				@select="sortBy = $event"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.MOST_COMMENTS"
				:is-active="sortBy === VOTE_SORT.MOST_COMMENTS"
				@select="sortBy = $event"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.LEAST_COMMENTS"
				:is-active="sortBy === VOTE_SORT.LEAST_COMMENTS"
				@select="sortBy = $event"
			/>
		</OverlayMenu>
	</div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { VOTE_SORT } from '~~/enums/vote-sort.enum';
import Icon from './Icon.vue';
import OverlayMenu from './OverlayMenu.vue';
import VoteSortSubmenuItem from './VoteSortSubmenuItem.vue';

let sortBy: Ref<VOTE_SORT> = ref(VOTE_SORT.MOST_UPVOTES);

let menuIsOpen = ref(false);

const toggleMenu = () => {
	menuIsOpen.value = !menuIsOpen.value;
};

const menuIcon = computed(() =>
	menuIsOpen.value ? 'fa-chevron-down' : 'fa-chevron-up',
);
</script>

<style scoped lang="scss">
.sub-menu {
	top: calc(100% + 1rem);
}
</style>
