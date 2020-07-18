<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Хуейшн</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$auth.loggedIn">

      <v-btn depressed @click="logOut">
        <v-avatar  size="26" left>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar> выход
        <v-icon right>mdi-export</v-icon>
      </v-btn>
    </template>

    <template v-else>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        @click="$store.dispatch('authentication/authenticationWindow')"
      >
        вход
        <v-icon right dark>mdi-login</v-icon>
      </v-btn>

    </template>

  </v-app-bar>
</template>

<script>

  export default {

    data() {
      return {

      }


    },
    methods: {
      logOut(){
        this.$auth.logout()
      }
    }
  }
</script>

<style scoped>

</style>
