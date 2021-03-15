<template>
  <b-container style="padding-top: 2em">
    <b-card header="Informações de Contrato">
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
            <b-form-input
              id="input-vlr-contrato"
              type="text"
              placeholder="Informe o valor do contrato"
              required
            />
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
        <b-button variant="danger" style="margin-right:1rem;"> Cancelar </b-button> 
        <b-button variant="primary"> Salvar </b-button> 
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "FormContrato",
};
</script>

<style>
</style>