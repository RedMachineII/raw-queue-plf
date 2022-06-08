<template>
  <div class="container-fluid font-prompt" style="padding-top: 60px">
    <Navbar />
    <div v-if="process">
      <Loading />
    </div>
    <b-row v-else class="">
      <b-col class="col-12">
        <b-row class="row p-1">
          <b-col class="col-12">
            <b-tabs
              v-model="tabIndex"
              content-class="mt-3"
            >
              <b-tab title="นำเข้าแผน" :title-link-class="linkClass(0)">
                <b-row class="row p-1">
                  <b-col class="col-12">
                    <Importplan />
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="แก้ไขแผน" :title-link-class="linkClass(1)">
                <b-row class="row p-1">
                  <b-col class="col-12">
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="รายงานแผน" :title-link-class="linkClass(2)" disabled>
                <b-row class="row p-1">
                  <b-col class="col-12">
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- {{bin_pk}}
    <br>
    {{bin_lo}} -->
    <Totop />
    <Footer />
  </div>
</template>

<script>
  import Loading from "@/components/Loading.vue";
  import Navbar from "@/components/Navbar.vue";
  import Totop from "@/components/Totop.vue";
  import Footer from "@/components/Footer.vue";
  import Importplan from '../components/Manageplan/Importplan.vue';
  // import draggable from "vuedraggable";

  export default {
    name: "Manageplan",
    components: {
      Loading,
      Navbar,
      Totop,
      Footer,
      Importplan
      // draggable
    },
    data() {
      return {
        process: false,
        totop: false,
        tabIndex: 0,
        listA_default: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        listB_default: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        listC_default: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        listA: [],
        listB: [],
        listC: [],
        dragging: false
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      processData(process) {
        this.process = process
      },
      getData() {
        this.listA = this.listA_default
        this.listB = this.listB_default
        this.listC = this.listC_default
      },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['text-success']
        } else {
          return ['text-dark']
        }
      },
    },
    computed: {
      // dragOptions() {
      //   return {
      //     animation: 0,
      //     group: "description",
      //     ghostClass: "bg-main"
      //   };
      // },
    }
  };
</script>
<style scoped>
  @import "../assets/css/Button.css";
  @import "../assets/css/Style.css";
  @import "../assets/css/Background.css";
  @import "../assets/css/Font.css";
  @import "../assets/css/Text.css";

  tr:hover {
    cursor: pointer;
  }
</style>