<template>

  <v-navigation-drawer

    app
    clipped
  >
    <v-list dense>
<div @click="actualLink">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</div>
      <v-list-item  link to="/extranet/">
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Extranet</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
  export default {
    data() {
      return {
      link: ''
      }
    },
    methods: {

      actualLink() {

        // return  this.$router.push('/profile/')
        /*
                console.log('click')
        if(this.$auth.loggedIn) {


        } else {
          this.$store.dispatch('authentication/authenticationWindow')
        }
        * */

      }
    }
  }
</script>

<style scoped>

</style>
