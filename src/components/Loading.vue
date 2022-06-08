<template>
  <div>
    <b-modal  v-model="show"
              id="modal-loading"
              ref="modal"
              size="sm"
              centered
              hide-footer
              hide-header
              content-class="bg-transparent border-0"
              no-stacking
              no-close-on-backdrop
              no-close-on-esc
              no-fade
    > 
      <b-row class="mt-3">
        <b-col class="text-center">
          <b-img :src="loading" class="w-50"></b-img>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>

import loading from '../assets/img/cpf-loading.gif'

export default {
  // post: ['loading'],
  data() {
    return {
      show: true,
      loading
    }
  }
}
</script>

<style>

</style>