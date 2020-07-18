import Vue from 'vue';

import {mapGetters} from 'vuex';

const Validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          errors: 'authentication/validation/errors',
        }),
      }
    })
  }
}
Vue.use(Validation)
