<template>
  <v-app app>
<div>

  <transition name="slide-fade" mode="out-in">
    <auth v-if="$store.getters['authentication/authenticationWindow']"></auth>
  </transition>
</div>

   <navbar></navbar>


    <sidebar></sidebar>
    <v-main app>
      <nuxt/>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>


  </v-app>

</template>
<script>
  import Navbar from "@/components/extranet/Navbar";
  import Sidebar from "../components/extranet/Sidebar";
  import Auth from "../components/auth/Auth";

  export default {

    data() {
      return {
        login: false,
        drawer: true
      }
    },
    created() {
      // this.$vuetify.theme.dark = true
    },
    components: {
      Navbar, Sidebar, Auth
    },


  }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-100px);
opacity: 0;
  }
</style>
