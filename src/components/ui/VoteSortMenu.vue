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
				@select="onSelect($event)"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.LEAST_UPVOTES"
				:is-active="sortBy === VOTE_SORT.LEAST_UPVOTES"
				@select="onSelect($event)"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.MOST_COMMENTS"
				:is-active="sortBy === VOTE_SORT.MOST_COMMENTS"
				@select="onSelect($event)"
			/>
			<VoteSortSubmenuItem
				class="sub-menu__item"
				:vote-sort="VOTE_SORT.LEAST_COMMENTS"
				:is-active="sortBy === VOTE_SORT.LEAST_COMMENTS"
				@select="onSelect($event)"
			/>
		</OverlayMenu>
	</div>
</template>

<script lang="ts" setup>
import { SORT_ENUM } from '~~/enums/sort.enum';
import { VOTE_SORT } from '~~/enums/vote-sort.enum';
import Icon from './Icon.vue';
import OverlayMenu from './OverlayMenu.vue';
import VoteSortSubmenuItem from './VoteSortSubmenuItem.vue';

const { push: navigate } = useRouter();
const route = useRoute();

const SORT_MAPPING = {
	[VOTE_SORT.MOST_UPVOTES]: {
		name: 'nbVotes',
		direction: SORT_ENUM.DESC,
	},
	[VOTE_SORT.LEAST_UPVOTES]: {
		name: 'nbVotes',
		direction: SORT_ENUM.ASC,
	},
	[VOTE_SORT.MOST_COMMENTS]: {
		name: 'comments',
		direction: SORT_ENUM.DESC,
	},
	[VOTE_SORT.LEAST_COMMENTS]: {
		name: 'comments',
		direction: SORT_ENUM.ASC,
	},
};

const sortByQuery = computed((): string | null => {
	const sortBy = route.query.sortBy;
	if (sortBy && typeof sortBy !== 'string') {
		throw new Error('sortBy query must be a string or null');
	}

	return sortBy;
});

const sortOrder = computed((): SORT_ENUM | null => {
	const sortOrder = route.query.sortOrder;
	if (sortOrder && typeof sortOrder !== 'string') {
		throw new Error('sortOrder query must be a string or null');
	}

	return sortOrder === 'asc' ? SORT_ENUM.ASC : SORT_ENUM.DESC;
});

const sortBy = computed(() => {
	if (!sortByQuery.value) {
		return VOTE_SORT.MOST_UPVOTES;
	}

	if (sortByQuery.value === 'nbVotes') {
		return sortOrder.value === SORT_ENUM.ASC
			? VOTE_SORT.LEAST_UPVOTES
			: VOTE_SORT.MOST_UPVOTES;
	}

	if (sortByQuery.value === 'comments') {
		return sortOrder.value === SORT_ENUM.ASC
			? VOTE_SORT.LEAST_COMMENTS
			: VOTE_SORT.MOST_COMMENTS;
	}
});

const onSelect = (sortBy: VOTE_SORT): void => {
	const sort = SORT_MAPPING[sortBy];
	navigate({
		path: '/',
		query: { ...route.query, sortBy: sort.name, sortOrder: sort.direction },
	});
};

let menuIsOpen = ref(false);

const toggleMenu = (): void => {
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
