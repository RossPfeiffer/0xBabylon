// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Icon from './components/Icon.vue'
Vue.component('icon',Icon);

import Drop from './components/Drop.vue'
Vue.component('drop',Drop);

import HlxButton from './components/HlxButton.vue'
Vue.component('hlx-button',HlxButton);

import NavBar from './components/NavBar.vue'
Vue.component('nav-bar',NavBar);

import AssocTopo from './components/AssocTopo.vue'
Vue.component('assoc-topo',AssocTopo);

import PathCard from './components/PathCard.vue'
Vue.component('path-card',PathCard);

//home
	import SplashSection from './components/SplashSection.vue'
	Vue.component('splash-section',SplashSection);
	
	import FeaturesSection from './components/FeaturesSection.vue'
	Vue.component('features-section',FeaturesSection);
	
	import PyramidSection from './components/PyramidSection.vue'
	Vue.component('pyramid-section',PyramidSection);

		import PyramidRoadMap from './components/ResponsiveRoadMap.vue'
		Vue.component('responsive-roadmap',PyramidRoadMap);

		import PyramidBrick from './components/PyramidBrick.vue'
		Vue.component('pyramid-brick',PyramidBrick);

	import FAQsSection from './components/FAQsSection.vue'
	Vue.component('faqs-section',FAQsSection);

	import Footer from './components/Footer.vue'
	Vue.component('footer-section',Footer);


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
