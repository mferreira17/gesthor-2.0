<template>
  <div id="app">
   <MenuSuperior/>
   <router-view></router-view>
  </div>
</template>

<script>

import Dashboard from './views/Dashboard.vue'
import MenuSuperior from './components/MenuSuperior.vue'

export default {
  components: { MenuSuperior, Dashboard }
}

</script>

