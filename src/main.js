import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  // theme: {
  //   primary: "#f44336",
  //   secondary: "#9575CD",
  //   accent: "#9c27b0",
  //   error: "#f44336",
  //   warning: "#3949AB",
  //   info: "#2196f3",
  //   success: "#4caf50"
  // }
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
