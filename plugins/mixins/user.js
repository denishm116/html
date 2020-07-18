import Vue from 'vue';

import {mapGetters} from 'vuex';

const Validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          user: 'authentication/auth/user',
          authenticated: 'authentication/auth/authenticated',

        }),
      }
    })
  }
}
Vue.use(Validation)
