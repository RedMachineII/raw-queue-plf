<template>
  <b-row>
    <b-col class="col-12">
      <b-row class="p-1">
        <b-col class="col-12 col-sm-12 col-md-8 col-lg-6">
          <b-form inline>
            <label class="mr-sm-2">แผนวันที่</label>
            <b-form-input 
              v-model="current_date" 
              type="date"
              @change="calFutureDate()"
            ></b-form-input>
            <label class="mx-sm-2">ถึง</label>
            <b-form-input 
              v-model="future_date" 
              type="date"
              disabled
            ></b-form-input>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="p-1">
        <b-col class="col-12 col-sm-6 col-md-4 col-lg-3">
          <b-form-group>
            <b-form-file
              v-model="file_manage" 
              placeholder="เลือกไฟล์ .xlsx"
              @change="selectFile"
              accept=".xlsx"
            ></b-form-file>
          </b-form-group>
        </b-col>
        <b-col class="col-12 col-sm-12 col-md-5 col-lg-4">
          <b-button variant="transparent" class="btn-delete ml-2" @click="$router.go()">
            <font-awesome-icon :icon="['fas', 'eraser']" />
            <span class="m-1">เคลียร์ข้อมูลเพื่ออัพโหลดใหม่</span>
          </b-button>
        </b-col>
        <b-col class="col-12 table-responsive">
          <b-table-simple hover no-border-collapse small bordered striped>
            <b-thead>
              <b-tr>
                <b-th class="th-topic">SapCode</b-th>
                <b-th class="th-topic">ProductName</b-th>
                <b-th class="th-topic">ProductThai</b-th>
                <b-th class="th-date" width="100px">{{ date[0] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[1] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[2] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[3] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[4] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[5] }}</b-th>
                <b-th class="th-date" width="100px">{{ date[6] }}</b-th>
                <b-th class="th-sum">รวม</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="value, index in weeklyplan_table" :value="value" :key="index">
                <b-td>{{ value.SapCode }}</b-td>
                <b-td>{{ value.ProductName }}</b-td>
                <b-td>{{ value.ProductThai }}</b-td>
                <b-td class="p-0"><b-form-input v-model="value.D1" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D2" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D3" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D4" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D5" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D6" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="p-0"><b-form-input v-model="value.D7" class="manage-plan-edit" @input="summaryTonsTrucks(index)"></b-form-input></b-td>
                <b-td class="text-right">{{ value.Sum }}</b-td>
              </b-tr>
              <b-tr>
                <b-td class="text-right" colspan="3">รวมตัน</b-td>
                <b-td>{{ summary_tons[0] }}</b-td>
                <b-td>{{ summary_tons[1] }}</b-td>
                <b-td>{{ summary_tons[2] }}</b-td>
                <b-td>{{ summary_tons[3] }}</b-td>
                <b-td>{{ summary_tons[4] }}</b-td>
                <b-td>{{ summary_tons[5] }}</b-td>
                <b-td>{{ summary_tons[6] }}</b-td>
                <b-td></b-td>
              </b-tr>
              <b-tr>
                <b-td class="text-right" colspan="3">รวมคันรถ</b-td>
                <b-td>{{ summary_trucks[0] }}</b-td>
                <b-td>{{ summary_trucks[1] }}</b-td>
                <b-td>{{ summary_trucks[2] }}</b-td>
                <b-td>{{ summary_trucks[3] }}</b-td>
                <b-td>{{ summary_trucks[4] }}</b-td>
                <b-td>{{ summary_trucks[5] }}</b-td>
                <b-td>{{ summary_trucks[6] }}</b-td>
                <b-td></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          {{ weeklyplan_table }}
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <!-- <div>{{weeklyplan_table}}</div> -->
</template>

<script>
import {weeklyplan} from "./Weekliplan.js"

export default {
  name: "Weekliplan",
  data() {
    return {
      weeklyplan_table: weeklyplan,
      current_date: '',
      future_date: '',
      file_manage: null,
      date: [],
      summary_tons: [0, 0, 0, 0, 0, 0, 0],
      summary_trucks: [0, 0, 0, 0, 0, 0, 0],
    }
  },
  mounted() {
    let format = new Date().getTime();
    format = new Date(format);
    this.current_date = format.getFullYear() + '-' + ('0' + (parseInt(format.getMonth()) + 1)).slice(-2) + '-' + ('0' + format.getDate()).slice(-2);
    this.calFutureDate()
    this.summaryTonsTrucks(null)
    // this.getData()
  },
  methods: {
    selectFile(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file_manage = e.target.files[0];
    },
    calFutureDate() {    
      this.date = []
      var date = this.current_date.split("-");
      var end = new Date(date[0], (date[1]-1), date[2], 0, 0, 0, 0);
      for(let i = 0 ; i < 7 ; i++) {
        end.setDate(end.getDate() + i);
        this.date.push(end.getFullYear() + '-' + ('0' + (parseInt(end.getMonth())+1)).slice(-2) + '-' + ('0' + end.getDate()).slice(-2))
      }
      this.future_date = end.getFullYear() + '-' + ('0' + (parseInt(end.getMonth())+1)).slice(-2) + '-' + ('0' + end.getDate()).slice(-2);
    },
    summaryTonsTrucks(day) {
      this.summary_tons = [0, 0, 0, 0, 0, 0, 0]
      this.summary_trucks = [0, 0, 0, 0, 0, 0, 0]
      for(let i in this.weeklyplan_table) {
        this.summary_tons[0] += parseInt(this.weeklyplan_table[i].D1)
        this.summary_tons[1] += parseInt(this.weeklyplan_table[i].D2)
        this.summary_tons[2] += parseInt(this.weeklyplan_table[i].D3)
        this.summary_tons[3] += parseInt(this.weeklyplan_table[i].D4)
        this.summary_tons[4] += parseInt(this.weeklyplan_table[i].D5)
        this.summary_tons[5] += parseInt(this.weeklyplan_table[i].D6)
        this.summary_tons[6] += parseInt(this.weeklyplan_table[i].D7)

        this.summary_trucks[0] += Math.ceil(parseInt(this.weeklyplan_table[i].D1) / 30)
        this.summary_trucks[1] += Math.ceil(parseInt(this.weeklyplan_table[i].D2) / 30)
        this.summary_trucks[2] += Math.ceil(parseInt(this.weeklyplan_table[i].D3) / 30)
        this.summary_trucks[3] += Math.ceil(parseInt(this.weeklyplan_table[i].D4) / 30)
        this.summary_trucks[4] += Math.ceil(parseInt(this.weeklyplan_table[i].D5) / 30)
        this.summary_trucks[5] += Math.ceil(parseInt(this.weeklyplan_table[i].D6) / 30)
        this.summary_trucks[6] += Math.ceil(parseInt(this.weeklyplan_table[i].D7) / 30)
      }
      if(day != null) {
        this.weeklyplan_table[day].Sum = 
        parseInt(this.weeklyplan_table[day].D1) +
        parseInt(this.weeklyplan_table[day].D2) +
        parseInt(this.weeklyplan_table[day].D3) +
        parseInt(this.weeklyplan_table[day].D4) +
        parseInt(this.weeklyplan_table[day].D5) +
        parseInt(this.weeklyplan_table[day].D6) +
        parseInt(this.weeklyplan_table[day].D7)
      }
    },
  }
}
</script>

<style scoped>
  .th-topic {
    background-color: #1A237E;
    color: #FFF;
  }
  .th-date {
    background-color: #1a7e62;
    color: #FFF;
    text-align: right;
  }
  .th-sum {
    background-color: #7e1a30;
    color: #FFF;
    text-align: right;
  }
  .form-control.manage-plan-edit {
    border: none;
    border-radius: 0;
    padding: 0px 2px 0px 2px;
    background: transparent;
    text-align: right;
  }
  .form-control.manage-plan-edit:hover {
    border: none;
    border-radius: 0;
    background: #dffffa;
    cursor: cell;
  }
  .form-control.manage-plan-edit:focus {
    border: none;
    border-radius: 0;
    background: #dffffa;
    box-shadow: none;
  }
</style>