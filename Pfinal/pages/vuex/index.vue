<template>
    <div>
       <h1>Vue ex</h1> 

       <ul>
       <li v-for="(item, index) in proyectos" :key="index">
        {{item.id}} - {{item.nombre}}
        <b-button class="btn-sm btn-warning">Editar</b-button>
        <b-button @click="eliminarProyecto(item)" class="btn-sm btn-danger">Eliminar</b-button>
        <hr>
        </li>
        </ul>
    </div>
</template>

<script>
import {db} from "~/plugins/firebase.js"
import {mapState, mapActions} from "vuex";

export default {
    /* fetch({store}){
      return db.collection('proyectos').get()
       .then(query => {
           const proyectos = []
           query.forEach(element => {
               proyectos.push(element.data())
           });
          return store.commit('setProyecto', proyectos )
       })
       .catch(function(error) {
           console.log(error)
       }); 
         

       } */


       computed:{
           ...mapState(['proyectos']),
           
       },
       methods: {
           ...mapActions(['eliminarProyecto'])
       },
       
     
}
</script>