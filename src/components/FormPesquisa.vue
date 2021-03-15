<template lang="pt-br">
    <b-container style="padding-top: 2em;">
        <b-form>
            <b-form-group>
                <b-row>
                <b-col sm="10">
                <b-input-group size="md">
                    <b-form-input placeholder="Informe um termo para pesquisar" v-model="strPesquisa" @keypress.enter="pesquisar"></b-form-input>
                 </b-input-group>
                 </b-col>
                 <b-col sm="2">
                 <b-button @click="pesquisar">Pesquisar</b-button>
                 </b-col>
                </b-row>
            </b-form-group>
        </b-form>
    </b-container>
</template>
<script>
export default {
    name: 'FormPesquisa',
    data (){ return { 
            strPesquisa: "", pesquisaValida : null
    }},
    methods: {
        pesquisar() {
            console.log('estou pesquisando por....')
        }      
    }
}
</script>
<style lang="">
    
</style>