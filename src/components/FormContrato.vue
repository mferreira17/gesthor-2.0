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
              <b-form-input
                id="input-num-contrato"
                type="text"
                placeholder="Informe o número do contrato"
                required
              />
            </b-form-group>
          </b-col>
          <b-col class="col-sm-3 col-md-4 col-lg-4">
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
          <b-col class="col-sm-3 col-md-4 col-lg-4">
            <b-form-group
              id="vlr-titulo"
              label="Valor do Contrato *"
              label-for="input-vlr-contrato"
            >
              <money
                id="input-vlr-contrato"
                v-bind="money"
                class="form-control"
              ></money>
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
        <b-form-group
          id="datalist-gestor-contrato"
          label="Selecione o gestor"
          label-for="gestor-contrato"
        >
          <b-form-input
            list="gestor-contrato"
            id="input-gestor-contrato"
          ></b-form-input>
          <b-datalist
            id="gestor-contrato"
            :options="gestores"
            inline="true"
          ></b-datalist>
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
          <b-form-input list="empresas" id="input-empresas"></b-form-input>
          <b-datalist
            id="empresas"
            :options="empresas"
          ></b-datalist>
          <div class="d-flex flex-row-reverse">
            <b-link v-b-modal.modal-nova-empresa class="p-2"
              >adicionar nova empresa&nbsp<b-icon-plus-circle-fill></b-icon-plus-circle-fill></b-link
            >
          </div>
        </b-form-group>
        <div class="d-flex flex-row-reverse">
        
        <b-button variant="primary" style="margin-left:1em;"> Salvar </b-button>
        
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

export default {
  name: "FormContrato",
  components: { Money },
  props: {
    pageTitle: "",
  },
  data() {
    return {
      gestores: [
        { value: "ANDERSON BRAGA", text: "ANDERSON BRAGA" },
        { value: "MARCIO FERREIRA", text: "MARCIO FERREIRA" },
      ],
      empresas: ["FRIOS DA AMAZONIA"],
      valorContrato: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: true,
      },
    };
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