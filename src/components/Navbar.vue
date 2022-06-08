<template>
<div>
    <b-navbar toggleable="xl" fixed="top" class="px-2 py-0 bg-main">
      <b-navbar-brand class="d-flex align-middle p-0">
        <img
          src="../assets/icon/cpf.png"
          class="align-center mr-2"
          style="width:40px"
        />
        <p class="line-height-80 m-0 p-0 align-self-center">
          <span class="ml-2 text-light">RM Sequencing</span>
        </p>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon class="text-light" v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon class="text-light" v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="py-1" :class="$route.name == 'Manageplan' ? 'bg-navbar-active' : 'text-light'">
            <router-link 
              :to="{ name: 'Manageplan' }"
              :disable="false"
              class="text-decoration-none text-light"
            >
              <span class="px-2">
                <font-awesome-icon :icon="['fas', 'tasks']" />
                <span class="pl-1">นำเข้าแผน</span>
              </span>
            </router-link>
          </b-nav-item>
          <b-nav-item class="py-1" :class="$route.name == 'Sequencing' ? 'bg-navbar-active' : 'text-light'">
            <router-link 
              :to="{ name: 'Sequencing' }"
              :disable="false"
              class="text-decoration-none text-light"
            >
              <span class="px-2">
                <font-awesome-icon :icon="['fab', 'codepen']" />
                <span class="pl-1">จัดคิวอัตโนมัติ</span>
              </span>
            </router-link>
          </b-nav-item>
          <b-nav-item class="py-1" :class="$route.name == 'Reportdata' ? 'bg-navbar-active' : 'text-light'">
            <router-link 
              :to="{ name: 'Reportdata' }"
              :disable="false"
              class="text-decoration-none text-light"
            >
              <span class="px-2">
                <font-awesome-icon :icon="['fas', 'file-alt']" />
                <span class="pl-1">รายงานการส่งข้อมูลคิว</span>
              </span>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="py-1 ml-auto" :class="$route.name == 'Setting' ? 'bg-navbar-active' : 'text-light'">
          <b-nav-item>
            <router-link 
              :to="{ name: 'Setting' }"
              :disable="false"
              class="text-decoration-none text-light"
            >
              <span class="px-2">
                <font-awesome-icon :icon="['fas', 'cog']" />
                <span class="pl-1">ตั้งค่า</span>
              </span>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import ModalNavigation from './Modal-Navigation.vue';

export default {
  name: "Navbar",
  components: {
    // ModalNavigation
  },
  data() {
    return {
      lang: localStorage.getItem('lang') === "" ? "TH" : localStorage.getItem('lang'),
      topic_en: localStorage.getItem('topic_en') === "" ? "Dashboard" : localStorage.getItem('topic_en'),
      topic_th: localStorage.getItem('topic_th') === "" ? "แดชบอร์ด" : localStorage.getItem('topic_th'),
      role: localStorage.getItem('role'),
      farm_id: localStorage.getItem('farm_id'),
      firstname: localStorage.getItem('firstname'),
      // sidebarwidth: document.getElementById("sidebarwidth").clientWidth
    };
  },
  mounted() {
    // if(this.$route.params.name == "redirect") {
    //   location.reload()
    // }
    
    // this.$refs.information.getHouse(this.farm_id, this.house)
    // this.$refs.chartEnvironment.getHouse(this.farm_id, this.house)
    // this.$refs.environment.getHouse(this.farm_id, this.house)
    // this.$refs.standard.getHouse(this.farm_id, this.house)
  },
  created() {
    setInterval(() => {
      this.lang = localStorage.getItem('lang')
      this.topic_en = localStorage.getItem('topic_en')
      this.topi_thc_th = localStorage.getItem('topic_th')
    }, 100); 
  },
  computed: {
    // lang(lang) {
    //   localStorage.setItem('lang', lang)
    //   // this.lang = lang
    //   // console.log(this.lang)
    //   // this.$refs.toBarNavigation.setLanguage(lang)
    //   return this.lang
    // }
  },
  methods: {
    setLanguage(lang) {
      localStorage.setItem('lang', lang)
    },
    toPage(name_en, name_th) {
      this.$router.push({ name: name_en }).catch(() => { window.location.reload() })
      localStorage.setItem('topic_en', name_en)
      localStorage.setItem('topic_th', name_th)
    },
    logout() {
      this.$nextTick(() => {
        this.$router.push({
          name: "Logout"
        })
        .catch(() => {  });
      });
    }
  }
};
</script>