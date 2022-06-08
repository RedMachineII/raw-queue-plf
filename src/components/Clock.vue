<template>
  <span class="text-admin font-weight-bold d-block d-md-inline">
    คณะเกษตรศาสตร์ มหาวิทยาลัยขอนแก่น {{ clock }}
  </span>
</template>

<script>
// import axios from 'axios'


export default {
  name: "Chart",
  data() { 
    return {
      clock: ''
    }
  },
  mounted() {
    setInterval(this.fn_clock, 1000);
    if (this.$route.params.name == "redirect") {
      location.reload();
    }

    // if(localStorage.getItem('farm_id') === null || localStorage.getItem('email') === null) {
    //   window.location = url + "/portal/#/"
    // }
  },
  methods: {
    fn_clock() {
      let format = new Date();
      let time =
        ("0" + format.getHours()).slice(-2) +
        ":" +
        ("0" + format.getMinutes()).slice(-2) +
        ":" +
        ("0" + format.getSeconds()).slice(-2);
      let date =
        ("0" + format.getDate()).slice(-2) +
        "-" +
        ("0" + (format.getMonth() + 1)).slice(-2) +
        "-" +
        format.getFullYear();
      this.clock = date + " " + time;
    },
  },
}
</script>

<style>
</style>