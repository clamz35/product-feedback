import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faChevronLeft,
	faLightbulb,
	fas,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;
// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas);
library.add(fab);
library.add(faChevronLeft);
library.add(faLightbulb);

export default defineNuxtPlugin((nuxtApp) => {
	dom.watch();
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});

// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
// export default defineNuxtConfig({
//   css: ["@fortawesome/fontawesome-svg-core/styles.css"],
// });
