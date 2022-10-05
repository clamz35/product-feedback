<template>
	<ul class="overlay-menu rounded shadow-xl bg-white w-[255px]">
		<slot></slot>
	</ul>
</template>

<style lang="scss">
.overlay-menu {
	> * + * {
		border-top: 1px solid #97979715;
	}
}
</style>
