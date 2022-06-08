<template>
  <div class="container-fluid font-prompt" style="padding-top: 60px">
    <Navbar />
    <div v-if="process">
      <Loading />
    </div>
    <b-row v-else class="">
      <b-col class="col-12">
        <b-row class="row p-2">
          <b-col class="col-4 table-responsive">
            <b-table-simple striped hover outlined no-border-collapse>
              <b-thead class="bg-primary text-light">
                <b-tr>
                  <b-th scope="col">ลำดับ</b-th>
                  <b-th scope="col">Product</b-th>
                  <b-th scope="col">เวลา</b-th>
                  <b-th scope="col">ตัน</b-th>
                  <b-th scope="col"></b-th>
                </b-tr>
              </b-thead>
              <draggable v-model="listA" v-bind="dragOptions" tag="b-tbody">
                <b-tr v-for="value, index in listA" :value="value" :key="index">
                  <b-td scope="row">{{ index+1 }}</b-td>
                  <b-td>{{ value.product }}</b-td>
                  <b-td>{{ value.timestamp }}</b-td>
                  <b-td>{{ value.weight }}</b-td>
                  <b-td><span class="px-3" @click="listA.splice(index, 1);">X</span></b-td>
                </b-tr>
              </draggable>
            </b-table-simple>
            {{listA}}
          </b-col>
          <b-col class="col-4 table-responsive">
            <b-table-simple striped hover outlined no-border-collapse>
              <b-thead class="bg-success text-light">
                <b-tr>
                  <b-th scope="col">ลำดับ</b-th>
                  <b-th scope="col">Product</b-th>
                  <b-th scope="col">เวลา</b-th>
                  <b-th scope="col">ตัน</b-th>
                  <b-th scope="col"></b-th>
                </b-tr>
              </b-thead>
              <draggable v-model="listB" v-bind="dragOptions" tag="b-tbody">
                <b-tr v-for="value, index in listB" :value="value" :key="index">
                  <b-td scope="row">{{ index+1 }}</b-td>
                  <b-td>{{ value.product }}</b-td>
                  <b-td>{{ value.timestamp }}</b-td>
                  <b-td>{{ value.weight }}</b-td>
                  <b-td><span class="px-3" @click="listB.splice(index, 1);">X</span></b-td>
                </b-tr>
              </draggable>
            </b-table-simple>
            {{listB}}
          </b-col>
          <b-col class="col-4 table-responsive">
            <b-table-simple striped hover outlined no-border-collapse>
              <b-thead class="bg-danger text-light">
                <b-tr>
                  <b-th scope="col">ลำดับ</b-th>
                  <b-th scope="col">Product</b-th>
                  <b-th scope="col">เวลา</b-th>
                  <b-th scope="col">ตัน</b-th>
                  <b-th scope="col"></b-th>
                </b-tr>
              </b-thead>
              <draggable v-model="listC" v-bind="dragOptions" tag="b-tbody">
                <b-tr v-for="value, index in listC" :value="value" :key="index">
                  <b-td scope="row">{{ index+1 }}</b-td>
                  <b-td>{{ value.product }}</b-td>
                  <b-td>{{ value.timestamp }}</b-td>
                  <b-td>{{ value.weight }}</b-td>
                  <b-td><span class="px-3" @click="listC.splice(index, 1);">X</span></b-td>
                </b-tr>
              </draggable>
            </b-table-simple>
            {{listB}}
          </b-col>

          <!-- <rawDisplayer class="col-3" :value="listA" title="List" />
          <rawDisplayer class="col-3" :value="listB" title="List" /> -->
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
  import draggable from "vuedraggable";

  export default {
    name: "Home",
    components: {
      Loading,
      Navbar,
      Totop,
      Footer,
      draggable
    },
    data() {
      return {
        process: false,
        totop: false,
        lasted: '-',
        listA: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        listB: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        listC: [
          { id: 1, product: "aaa", timestamp: "00:00", weight: "10" },
          { id: 2, product: "bbb", timestamp: "01:00", weight: "20" },
          { id: 3, product: "ccc", timestamp: "02:00", weight: "30" },
          { id: 4, product: "ddd", timestamp: "03:00", weight: "40" }
        ],
        dragging: false
      };
    },
    methods: {
      processData(process) {
        this.process = process
      },
      alertResult(title, body, variant) {
        this.$bvToast.toast(body, {
          title: title,
          autoHideDelay: 5000,
          appendToast: false,
          variant: variant,
          toaster: 'b-toaster-bottom-right',
          solid: true
        })
      },
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          ghostClass: "ghost"
        };
      },
    }
  };
</script>
<style scoped>
  @import "../assets/css/Button.css";
  @import "../assets/css/Style.css";
  @import "../assets/css/Background.css";
  @import "../assets/css/Font.css";
  @import "../assets/css/Text.css";
</style>