<template>
    <div >
        
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ProWiki.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     <b-navbar-nav>
        <b-nav-item to="/">Login</b-nav-item>
        <b-nav-item to="/proyectos">Proyectos</b-nav-item>
        <b-nav-item to="/nuevo_proyecto">Nuevo Proyecto</b-nav-item>
     </b-navbar-nav>
    

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="busquedaData(consulta)">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar" v-model="consulta"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>

    
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {

       methods: {
           ...mapActions(['busquedaData'])
       },

       data(){
         return {
           consulta:''
         }
       }

}
</script>