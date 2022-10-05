<template>
  <div class="color">
    <div
      class="color__block"
      :style="
        '--ds-bg: ' +
        props.hexa +
        ';--ds-color:' +
        getCorrectTextColor(props.hexa) +
        ';'
      "
    >
      {{ props.hexa }}
    </div>
    <div>
      <div class="color__row color-row">
        <span class="color-row__label">RGB</span
        ><span class="color-row__value">{{ props.rgb }}</span>
      </div>
      <div class="color__row color-row">
        <span class="color-row__label">HSL</span
        ><span class="color-row__value">{{ props.hsl }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const getCorrectTextColor = (hex: any) => {
  /*
			From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast

			Color brightness is determined by the following formula:
			((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000

      I know this could be more compact, but I think this is easier to read/explain.

			*/

  const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  function hexToR(h: any) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }
  function hexToG(h: any) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }
  function hexToB(h: any) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }
  function cutHex(h: string) {
    return h.charAt(0) == '#' ? h.substring(1, 7) : h;
  }

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return '#3A4374';
  } else {
    return '#ffffff';
  }
};

const props = withDefaults(
  defineProps<{
    hexa: string;
    rgb: string;
    hsl: string;
  }>(),
  {
    hexa: '#000000',
    rgb: '0, 0, 0',
    hsl: '0, 0%, 0%',
  },
);
</script>

<style lang="scss" scoped>
.color {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 250px;
  &__block {
    padding: 1rem;
    height: 100px;
    border-radius: 10px;
    background-color: var(--ds-bg);
    color: var(--ds-color);
    border: 1px solid var(--ds-color);
  }
}
.color-row {
  display: flex;
  gap: 2rem;
  &__value {
    font-weight: bold;
  }
}
</style>
