<template>
  <b-container style="padding-top: 2em">
    <b-card v-bind:header="pageTitle">
      <b-form>
        <b-row>
         <b-col cols=4>
          <b-form-group
            id="num-contrato"
            label="Número do Contrato *"
            label-for="input-num-contrato"
          >
            <b-form-input
              id="input-num-contrato"
              type="text"
              placeholder="Informe o número do contrato"
              required
            />
          </b-form-group>
         </b-col>
         <b-col cols="4">
          <b-form-group
            id="dt-assinatura-contrato"
            label="Data de Assinatura *"
            label-for="input-data-assinatura"
          >
            <b-form-input
              id="input-data-assinatura"
              type="date"
              placeholder="Informe a data de assinatura"
              required
            />
          </b-form-group>
         </b-col>
         <b-col cols=4>
          <b-form-group
            id="vlr-titulo"
            label="Valor do Contrato *"
            label-for="input-vlr-contrato"
          >
            <money id="input-vlr-contrato" v-bind="money" class="form-control"></money>
          </b-form-group>
         </b-col>
        </b-row>
         <b-form-group
            id="obj-contrato"
            label="Objeto do contrato*"
            label-for="input-obj-contrato"
          >
            <b-form-textarea
              id="input-obj-contrato"
              type="text"
              placeholder="Informe o objeto do contrato"
              required
            />
          </b-form-group>
          <b-form-group id="datalist-gestor-contrato" label="Selecione o gestor" label-for="gestor-contrato">
            <b-form-input list="gestor-contrato" id="input-gestor-contrato"></b-form-input>
            <b-datalist id="gestor-contrato" :options="gestores" inline="true"></b-datalist>
          </b-form-group>
          <b-form-group id="select-empresa" label="Selecione a empresa" label-for="empresa">
          <b-form-input list="empresas" id="input-empresas"></b-form-input>
          <b-datalist id="empresas" :options="empresas" v-model="gestor"></b-datalist>
          </b-form-group>
        <b-button variant="danger" style="margin-right:1rem;"> Cancelar </b-button> 
        <b-button variant="primary"> Salvar </b-button> 
      </b-form>
    </b-card>
  </b-container>
</template>

<script>

import {Money} from 'v-money'

export default {
  name: "FormContrato",
  components : {Money}, 
  props : {
      pageTitle : ''
  },
  data () {
    return {
      gestores : [
        { value:'ANDERSON BRAGA', text:'ANDERSON BRAGA'},
        { value:'MARCIO FERREIRA', text:'MARCIO FERREIRA'}
      ],
      empresas : ['FRIOS DA AMAZONIA'],
      valorContrato : '',
      money : {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          precision: 2,
          masked: true
      }
    }
  },
};
</script>

<style>
</style>