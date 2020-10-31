import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAdjust)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
