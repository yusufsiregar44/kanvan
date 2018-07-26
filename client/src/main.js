import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import store from './store'

Vue.use(Buefy, {
    defaultIconPack: 'fas',
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    count: '',
  },
  render: h => h(App)
}).$mount('#app')
