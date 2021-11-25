<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout </router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    // computed : {
    //   data(){
    //     return this.$store.state.mockAccount
    //   }
    // }, 
    data() {
      return {
        authenticated: false,
           mockAccount: {
             username: "admin",
             password: "password"}
        // mockAccount: [
        //   {username: "admin",password: "password"},
        //   {username: "userone",password: "pass"},
        //   {username: "usertwo",password: "pass2"}
        // ]
      }
    },
    mounted() {
      if(!this.authenticated) {
        this.$router.replace({ name: "login" });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
</script>

<style>
body {
  background-color: rgb(53, 14, 14);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17d0dd;
  width: 1350px;
  margin-top: auto;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #094218;
}
</style>
