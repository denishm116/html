export const state = () => ({
  authenticationWindow: false
})

export const mutations = {
  authenticationWindow(state) {
    state.authenticationWindow = !state.authenticationWindow
  }

}


export const actions = {
  authenticationWindow({commit, dispatch}) {
   commit('authenticationWindow')
  },
  requestUrl(){

  }
  // intended({commit, dispatch}, url) {
  //   console.log(this.$auth.loggedIn, url)
  //   if(this.$auth.state.loggedIn) {
  //     return  this.$router.push(url)
  //   } else {
  //     dispatch('authenticationWindow')
  //   }
  // }
}


export const getters = {
  authenticationWindow: state => state.authenticationWindow,
}

/*
intended({commit, dispatch}, url) {
  console.log(this.$auth.loggedIn, url)
  if(this.$auth.state.loggedIn) {

    return  this.$router.push(url)
  } else {
    dispatch('authenticationWindow')
  }
}

*/
/*

  actualLink() {
    if(this.$auth.loggedIn) {
      return  this.$router.push('/profile/')
    } else {
      this.$store.dispatch('authentication/authenticationWindow')
    }
  }
 */
