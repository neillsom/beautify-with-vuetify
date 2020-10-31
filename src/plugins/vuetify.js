import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import themes from './themes';

Vue.use(Vuetify);

console.log(themes);

export default new Vuetify({
  
	theme: {
    options: { customProperties: true },
	// 	themes: {
  //     light: themes.tumblr,
  //     dark: themes.tumblr,
	// 	},
	},
});
