<template>
  <button id="toTop" v-show="totop" @click="scrollTop"><b-icon icon="arrow-up" font-scale="2"></b-icon></button>
</template>

<script>
export default {
  data() {
    return {
      totop: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  created() {
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener () {
      this.totop = window.scrollY > 150
    }
  }
}
</script>

<style scoped>
#toTop {
  display: block;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background: #4ef1bb;
  padding: 5px;
  border-radius: 5px;
}
</style>