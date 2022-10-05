<template>
  <div class="relative">
    <InputWrapper
      class="cursor-pointer"
      :component="myComp"
      :errorMessage="props.errorMessage"
      @click="toggleOpen()"
    ></InputWrapper>
    <OverlayMenu
      v-if="isOpen"
      @click="toggleOpen()"
      class="absolute top-0 z-10"
    >
      <OverlayMenuItem>
        <SelectableItem>Feature</SelectableItem>
      </OverlayMenuItem>
      <OverlayMenuItem><SelectableItem>UX</SelectableItem></OverlayMenuItem>
    </OverlayMenu>
  </div>
</template>
<script lang="ts" setup>
import OverlayMenu from '../OverlayMenu.vue';
import OverlayMenuItem from '../OverlayMenuItem.vue';
import SelectableItem from '../SelectableItem.vue';
import InputWrapper from './InputWrapper.vue';

const props = defineProps<{ errorMessage?: string }>();
const myComp = resolveComponent('ui/form/DropdownInput');

const isOpen = ref(false);

const toggleOpen = () => (isOpen.value = !isOpen.value);
</script>

<style lang="scss" scoped>
.input {
  background: none;
}
</style>
