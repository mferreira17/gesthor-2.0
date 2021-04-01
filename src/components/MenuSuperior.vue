<template lang="pt-br">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/dashboard">Gesthor</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            
            <b-nav-item-dropdown text="Contratos" right>
                <b-dropdown-item href="#" to="/novo-contrato">Novo Contrato</b-dropdown-item>
                <b-dropdown-item href="#">Buscar Contrato</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Empresas" right>
                <b-dropdown-item href="#" to="/nova-empresa">Nova Empresa</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="/sobre">
                Sobre
            </b-nav-item>
                
        </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { axios } from "axios";

export default {
  name: "MenuSuperior",
};
</script>
