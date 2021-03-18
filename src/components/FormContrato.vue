<template>
  <b-container fluid style="padding-top: 2em">
    <b-card v-bind:header="pageTitle">
      <b-form>
        <b-row>
          <b-col class="col-4 col-sm-1 col-md-1 col-lg-4">
            <b-form-group
              id="num-contrato"
              label="Número do Contrato *"
              label-for="input-num-contrato"
            >
            <b-input-group prepend="123">
              <b-form-input
                id="input-num-contrato"
                v-model.trim="$v.numeroContrato.$model"
                type="text"
                :state="$v.numeroContrato.required"
                placeholder="Informe o número do contrato"
                maxlength="10" 
                trim
              />
            </b-input-group>
              <b-form-invalid-feedback>Este campo é obrigatório</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col class="col-sm-3 col-md-4 col-lg-4">
            <b-form-group
              id="dt-assinatura-contrato"
              label="Data de Assinatura *"
              label-for="input-data-assinatura"
            >
            <b-input-group>
              <template #prepend>
                <b-input-group-text><b-icon-calendar></b-icon-calendar></b-input-group-text>
              </template> 
              <b-form-input
                id="input-data-assinatura"
                type="date"
                placeholder="Informe a data de assinatura"
                v-model="$v.dataAssinatura.$model"
                :state="$v.dataAssinatura.required"
              />
            </b-input-group>
              <b-form-invalid-feedback>Este campo é obrigatório</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col class="col-sm-3 col-md-4 col-lg-4">
            <b-form-group
              id="vlr-titulo"
              label="Valor do Contrato *"
              label-for="input-vlr-contrato" 
            >
            <b-input-group prepend="R$">
              <money
                id="input-vlr-contrato"
                v-bind="money"
                class="form-control"
                v-model="valorContrato"
              ></money>
            </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          id="datalist-gestor-contrato"
          label="Selecione o gestor"
          label-for="gestor-contrato"
        >
          <b-form-input
            list="gestor-contrato"
            id="input-gestor-contrato" v-model.trim="$v.gestor.$model" :state="$v.gestor.required"
          ></b-form-input>
          <b-datalist
            id="gestor-contrato"
            :options="gestores"
            inline="true"
          ></b-datalist>
          <b-form-invalid-feedback>Este campo é obrigatório</b-form-invalid-feedback>

          <div class="d-flex flex-row-reverse">
            <b-link href="#" class="p-2" v-b-modal.modal-novo-gestor
              >adicionar novo
              gestor&nbsp<b-icon-plus-circle-fill></b-icon-plus-circle-fill></b-link
            >
          </div>
        </b-form-group>
        <b-form-group
          id="select-empresa"
          label="Selecione a empresa"
          label-for="empresa"
        >
          <b-form-input list="empresas" id="input-empresas" v-model.trim="$v.empresa.$model" :state="$v.empresa.required"></b-form-input>
          <b-datalist
            id="empresas"
            :options="empresas"
          ></b-datalist>
          <b-form-invalid-feedback>Este campo é obrigatório</b-form-invalid-feedback>
          <div class="d-flex flex-row-reverse">
            <b-link v-b-modal.modal-nova-empresa class="p-2"
              >adicionar nova empresa&nbsp<b-icon-plus-circle-fill></b-icon-plus-circle-fill></b-link
            >
          </div>
        </b-form-group>
         <b-form-group
          id="obj-contrato"
          label="Objeto do contrato*"
          label-for="input-obj-contrato"
        >
          <b-form-textarea
            id="input-obj-contrato"
            type="text"
            placeholder="Informe o objeto do contrato"
            v-model.trim="$v.objContrato.$model"
            :state="$v.objContrato.required"
          />
          <b-form-invalid-feedback>Este campo é obrigatório</b-form-invalid-feedback>

        </b-form-group>
        <div class="d-flex flex-row-reverse">
        
        <b-button variant="primary" style="margin-left:1em;" type="submit"> Salvar </b-button>
        
        <b-link to="/dashboard" class="btn btn-danger" >
          Cancelar
        </b-link>
        </div>
      </b-form>
    </b-card>
    <b-modal id="modal-nova-empresa">Hello From My Modal!</b-modal>
    <b-modal id="modal-novo-gestor">Adicionar Novo Gestor</b-modal>
  </b-container>
</template>

<script>
import { Money } from "v-money";
import { required } from 'vuelidate/lib/validators'

export default {
  name: "FormContrato",
  components: { Money },
  props: {
    pageTitle: "",
  },
  data() {
    return {
      numeroContrato : '', dataAssinatura : '', objContrato : '', gestor : '' , empresa : '',
      gestores: [
        { value: "ANDERSON BRAGA", text: "ANDERSON BRAGA" },
        { value: "MARCIO FERREIRA", text: "MARCIO FERREIRA" },
      ],
      empresas: ["FRIOS DA AMAZONIA"],
      valorContrato: "",
      money: {
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: true,
      },
    };
  },
  validations : {
      numeroContrato : {
          required
      },
      dataAssinatura : {
          required
      },
      objContrato: {
        required
      },
      gestor : {
        required
      },
      empresa : {
        required
      }
  },
  methods: {
    callNovoGestor() {
      alert("vou chamar a tela de criação quando vc clicar nesse link");
    },
  },
};
</script>

<style>
</style>