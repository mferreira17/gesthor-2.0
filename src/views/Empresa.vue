<template>
  <Panel header="Nova Empresa">
      <FormEmpresa/>
  </Panel>
</template>

<script>

import Vue from 'vue'
import Panel from 'primevue/panel'
import FormEmpresa from '../components/FormEmpresa.vue'

Vue.component('Panel', Panel)

export default {
    components : {FormEmpresa}
}
</script>

<style>

</style>