// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken1,
    secondary: colors.cyan.lighten4,
    accent: colors.indigo.base // #3F51B5
  }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBJ4bAVgMe3OmuWIKCEO5VIcxo3bcahrOI',
      authDomain: 'itc-ads-8772a.firebaseapp.com',
      databaseURL: 'https://itc-ads-8772a.firebaseio.com',
      projectId: 'itc-ads-8772a',
      storageBucket: 'itc-ads-8772a.appspot.com',
      messagingSenderId: '859337699681',
      appId: '1:859337699681:web:88f2f66d1fdd59afb45520',
      measurementId: 'G-TYYXGY6BV2'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
