<template>
  <router-view />
  <!-- <router-view v-bind:style="{ backgroundColor: backgroundColor}" /> -->
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      // backgroundColor: "#f5f5f5",
    }
  },
  created() { 
    // this.$watch(
    //   () => this.$route.name,() => {
    //     this.checkStore()
    //   }
    // )
    // setInterval(() => {
    //   this.checkStore()
    // }, 5000); 
  },
  mounted() {
    // localStorage.setItem('farm_id', 2)
    // localStorage.setItem('account_id', 15)
    // localStorage.setItem('role', 2)
    // this.checkCache()
    // setInterval(this.checkStore, 5000);
    // this.checkStore()
  },
  computed: {
    // Authenticated() {
    //   console.log(this.$auth.isAuthenticated)
    //   console.log(this.$auth.user.email)
    //   if(this.$auth.isAuthenticated === true && this.$auth.user.email !== undefined) {
    //     // this.loading = false
    //     // this.email = this.$auth.user.email
    //     // this.login(this.$auth.user.email)
    //     window.location = "https://www.cpf-feed.com/farm/portal/#/redirect/?email=" + this.$auth.user.email
    //   }
    //   return this.$auth.isAuthenticated
    // }
  },
  methods: {
    checkStore() {
      // console.log(this.$store.getters.loggedIn)
      // console.log(this.$route.name)
      // console.log(localStorage.getItem('account_id'));
      // console.log(localStorage.getItem('firstname'));
      // console.log(localStorage.getItem('role'));
      // console.log(localStorage.getItem('token'));
      // console.log(localStorage.getItem('customer'));

      if(this.$store.getters.loggedIn && this.$store.state.customer == "imanage") {
        // console.log(this.$store.state.account_id)
        // console.log(this.$store.state.token)
        // console.log(this.$store.state.role)
        if(this.$store.state.account_id === null || this.$store.state.token === null || this.$store.state.role === null) {
          this.$nextTick(() => {
            this.$router.push({
              name: "Logout"
            })
            .catch(() => {  });
          });
        }
        else {
          if(this.$route.name == "Login") {
            this.$nextTick(() => {
              this.$router.push({
                name: "Dashboard"
              })
              .catch(() => {  });
            });
          }
        }
      }
      else {
        // this.$store.dispatch('destroyToken')
        if(this.$route.name != "Login") {
          this.$nextTick(() => {
            this.$router.push({
              name: "Login"
            })
            .catch(() => {  });
          });
        }
        // this.$nextTick(() => {
        //   this.$router.push({
        //     name: "Logout"
        //   })
        //   .catch(() => {  });
        // });
      }
    }
    // checkCache() {
    //   if(this.$store.getters.loggedIn && localStorage.getItem('customer') == "layer") {
        
    //     let farm_id = localStorage.getItem('farm_id')
    //     let name_th = localStorage.getItem('name_th')
    //     let name_en = localStorage.getItem('name_en')
    //     let role = localStorage.getItem('role')

    //     if(farm_id === null || name_th === null || name_en === null || role === null) {
    //       if(localStorage.getItem('customer') == "layer") {
    //         localStorage.removeItem('customer')
    //         localStorage.removeItem('farm_id')
    //         localStorage.removeItem('name_th')
    //         localStorage.removeItem('name_en')
    //         localStorage.removeItem('role')
    //       }
    //       window.location = "../portal";
    //     }
    //   }
    //   else {
    //     if(localStorage.getItem('customer') == "layer") {
    //       localStorage.removeItem('customer')
    //       localStorage.removeItem('farm_id')
    //       localStorage.removeItem('name_th')
    //       localStorage.removeItem('name_en')
    //       localStorage.removeItem('role')
    //     }
    //     window.location = "../portal";
    //   }
    // }
    // login(email) {
    //   console.log(email)
    //   this.$store.dispatch('login', {
    //     email: email
    //   })
    //   .then(response => {
    //     console.log(response.data)
    //     // if(response.data.status == 1) {
    //     // }
    //   })
    // },
  }
}
</script>

<style>
  .table td, .table th {
    font-weight: normal;
    white-space: nowrap;
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 10px;
  }
  html, body {
    font-size: 1rem;
    line-height: 120%;
    font-weight: normal;
    /* height: 100%; */
    background-color: #f5f5f5;
  }

/* @import "assets/css/Style-1.css";
@import "assets/css/Background-1.css";
@import "assets/css/Font.css"; */
</style>