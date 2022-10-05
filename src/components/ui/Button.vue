<template>
  <div>
    <button
      type="button"
      class="rounded py-4 px-10 text-white transition-all leading-none"
      :class="{
        'bg-accent-primary-500 hover:bg-accent-primary-400': isPrimary,
        'bg-accent-secondary-500 hover:bg-accent-secondary-400': isSecondary,
        'bg-primary-600': isThird || isLinkButton,
        'hover:bg-primary-400': isThird,
        'bg-error-500 hover:bg-error-400': isError,
        'text-primary-500': isLink,
        'hover:underline': isLink || isLinkButton,
      }"
    >
      <span v-if="icon" class="mr-4">
        <Icon icon="fa-brand fa-chevron-left" />
      </span>
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Icon from './Icon.vue';
const props = withDefaults(
  defineProps<{
    theme?: 'primary' | 'secondary' | 'third' | 'error' | 'link' | 'linkButton';
    icon?: string;
  }>(),
  {
    theme: 'primary',
  },
);

const isPrimary = computed(() => {
  return props.theme === 'primary';
});
const isSecondary = computed(() => props.theme === 'secondary');
const isThird = computed(() => props.theme === 'third');
const isError = computed(() => props.theme === 'error');
const isLink = computed(() => props.theme === 'link');
const isLinkButton = computed(() => props.theme === 'linkButton');
</script>

<style lang="postcss">
@import '@fortawesome/fontawesome-svg-core/styles.css';
</style>
