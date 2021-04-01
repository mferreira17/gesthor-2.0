<template>
  <div>
    <div class="p-fluid">
      <div class="p-field">
        <label for="nomeId">Nome</label>
        <InputText
          id="nomeId"
          type="text"
          v-model.trim="$v.nome.$model"
          :class="{ 'p-invalid': $v.nome.$invalid }"
          placeholder="Informe o nome"
        />
        <small v-show="$v.nome.$invalid" class="p-error"
          >Nome é obrigatório.</small
        >
      </div>

      <div class="p-field">
        <label for="ramoId">Ramo</label>
        <InputText
          id="ramoId"
          type="text"
          v-model="ramo"
          placeholder="Informe o ramo"
        />
      </div>

      <div class="p-field">
        <label for="emailId">Email</label>
        <InputText
          id="emailId"
          type="email"
          v-model="email"
          placeholder="Informe o email"
        />
      </div>

      <div class="p-field">
        <label for="telefoneId">Telefone Comercial</label>
        <InputMask
          id="telefoneId"
          type="text"
          v-model="telefone"
          mask="(99) 9999-9999"
          placeholder="Informe o telefone comercial"
        />
      </div>

      <div class="p-field">
        <label for="celularId">Telefone Celular</label>
        <InputMask
          id="celularId"
          type="text"
          v-model="celular"
          mask="(99) 99999-9999"
          placeholder="Informe o telefone celular"
        />
      </div>
    </div>
    <div class="p-grid p-jc-end">
      <Button
        label="Cancelar"
        icon="pi pi-times"
        class="p-button-danger p-mr-2"
        onclick="window.location.href='/'"
      />
      <Button label="Salvar" icon="pi pi-save" @click="salvar" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Button from "primevue/button";
import axios from "axios";
import { required } from "vuelidate/lib/validators";

Vue.component("InputText", InputText);
Vue.component("InputMask", InputMask);
Vue.component("Button", Button);

export default {
  name: "FormEmpresa",
  data() {
    return {
      nome: "",
      ramo: "",
      email: "",
      telefone: "",
      celular: "",
    };
  },
  validations: {
    nome: {
      required,
    },
  },
  methods: {
    salvar() {
      
      const nome = this.nome;
      const ramo = this.ramo;
      const email = this.email;
      const telefone = this.telefone;
      const celular = this.celular;

      axios
        .post("http://localhost:8081/empresas/salvar", {
            nome : nome, ramo : ramo , email : email , telefone : telefone , celular : celular
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error("DEU ERRO .: "+error);
        });
    },
  },
};
</script>
<style>
</style>