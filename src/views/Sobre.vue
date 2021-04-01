<template lang="pt-br">
    <div>
        <Message> Testando essa bagaça </Message>
        <b-container style="padding-top:3em">
            <b-jumbotron header="Gesthor" lead="Gesthor - Vue.js + Spring">
                <p>Para mais informações, visite o site do projeto</p>
                <b-button variant="primary" href="#">Visitar site</b-button>
            </b-jumbotron>
        </b-container>
    </div>
</template>
<script>
import Vue from 'vue'
import Message from 'primevue/message';

Vue.component('Message',Message)

export default {
  name: "Sobre",
};
</script>
<style lang="">
</style>