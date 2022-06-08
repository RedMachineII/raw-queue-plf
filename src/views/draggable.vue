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
            <b-tabs content-class="mt-3">
              <b-tab title="First">
                <b-row class="row p-1">
                  <b-col class="col-12">
                    <b-button variant="transparent" class="btn-refresh mb-2" @click="getData()">
                      <font-awesome-icon :icon="['fas', 'redo-alt']" />
                      <span class="m-1">คืนค่า</span>
                    </b-button>
                  </b-col>
                  <b-col class="col-12 col-sm-6 col-md-4 col-lg-3 table-responsive">
                    <h6 class="my-1">ไม่เก็บตัวอย่าง</h6>
                    <b-table-simple hover no-border-collapse small bordered>
                      <b-thead class="bg-main text-light">
                        <b-tr>
                          <b-th width="60px">ลำดับ</b-th>
                          <b-th>Product</b-th>
                          <b-th width="100px">เวลา</b-th>
                          <b-th>ตัน</b-th>
                          <b-th width="50px"></b-th>
                        </b-tr>
                      </b-thead>
                      <draggable v-model="listA" v-bind="dragOptions" tag="b-tbody">
                        <b-tr v-for="value, index in listA" :value="value" :key="index">
                          <b-td>{{ index+1 }}</b-td>
                          <b-td>{{ value.product }}</b-td>
                          <b-td>{{ value.timestamp }}</b-td>
                          <b-td>{{ value.weight }}</b-td>
                          <b-td class="text-center"><span class="text-danger" @click="listA.splice(index, 1);"><font-awesome-icon :icon="['fas', 'times']" /></span></b-td>
                        </b-tr>
                      </draggable>
                    </b-table-simple>
                    {{listA}}
                  </b-col>
                  <b-col class="col-12 col-sm-6 col-md-4 col-lg-3 table-responsive">
                    <h6 class="my-1">Lane 1</h6>
                    <b-table-simple hover no-border-collapse small bordered>
                      <b-thead class="bg-main text-light">
                        <b-tr>
                          <b-th width="60px">ลำดับ</b-th>
                          <b-th>Product</b-th>
                          <b-th width="100px">เวลา</b-th>
                          <b-th>ตัน</b-th>
                          <b-th width="50px"></b-th>
                        </b-tr>
                      </b-thead>
                      <draggable v-model="listB" v-bind="dragOptions" tag="b-tbody">
                        <b-tr v-for="value, index in listB" :value="value" :key="index">
                          <b-td>{{ index+1 }}</b-td>
                          <b-td>{{ value.product }}</b-td>
                          <b-td>{{ value.timestamp }}</b-td>
                          <b-td>{{ value.weight }}</b-td>
                          <b-td class="text-center"><span class="text-danger" @click="listB.splice(index, 1);"><font-awesome-icon :icon="['fas', 'times']" /></span></b-td>
                        </b-tr>
                      </draggable>
                    </b-table-simple>
                    {{listB}}
                  </b-col>
                  <b-col class="col-12 col-sm-6 col-md-4 col-lg-3 table-responsive">
                    <h6 class="my-1">Lane 2</h6>
                    <b-table-simple hover no-border-collapse small bordered>
                      <b-thead class="bg-main text-light">
                        <b-tr>
                          <b-th width="60px">ลำดับ</b-th>
                          <b-th>Product</b-th>
                          <b-th width="100px">เวลา</b-th>
                          <b-th>ตัน</b-th>
                          <b-th width="50px"></b-th>
                        </b-tr>
                      </b-thead>
                      <draggable v-model="listC" v-bind="dragOptions" tag="b-tbody">
                        <b-tr v-for="value, index in listC" :value="value" :key="index">
                          <b-td>{{ index+1 }}</b-td>
                          <b-td>{{ value.product }}</b-td>
                          <b-td>{{ value.timestamp }}</b-td>
                          <b-td>{{ value.weight }}</b-td>
                          <b-td class="text-center"><span class="text-danger" @click="listC.splice(index, 1);"><font-awesome-icon :icon="['fas', 'times']" /></span></b-td>
                        </b-tr>
                      </draggable>
                    </b-table-simple>
                    {{listC}}
                  </b-col>
                  <b-col class="col-12">
                    <b-button variant="transparent" class="btn-save mb-2">
                      <font-awesome-icon :icon="['fas', 'save']" />
                      <span class="m-1">บันทึก</span>
                    </b-button>
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
  import draggable from "vuedraggable";

  export default {
    name: "rm-sequencing",
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
          // class: "text-danger"
          ghostClass: "bg-main"
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

  tr:hover {
    cursor: pointer;
  }
</style>