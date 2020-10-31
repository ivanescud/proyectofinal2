<template>
    <div class="container pt-5 pb-5">
    <div >
        <b-card  :title="proyecto.nombre" :img-src="proyecto.img" img-alt="Image" img-top>       
            <b-card-text>{{proyecto.bio}}</b-card-text>
            <hr>
            <b-card-text>Autor: {{proyecto.Autor}}</b-card-text>
            <b-card-text>Categoria: {{proyecto.categoria}}</b-card-text>
            <b-card-text>Fecha de Lanzamiento: {{proyecto.fecha}}</b-card-text>
            <b-card-text>Licencia: {{proyecto.licencia}}</b-card-text>
            <a target="_blank" :href="proyecto.link">Direccion Web : {{proyecto.link}}</a>

         

        </b-card>
       <br>
        <iframe v-if="proyecto.video"  :src="`https://`+proyecto.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
    </div>


    </div>
</template>


<script>
import {db} from "~/plugins/firebase.js"
import {mapState} from "vuex";
export default {
  fetch({store, params}){
        return db.collection('proyectos').doc(params.id).get()
        .then(doc =>{
          if(doc.exists){
            let proyecto = doc.data();
            console.log(proyecto.nombre)
           return store.commit('setproyectoData',proyecto);
          }
        })
        .catch(e=>{
          console.log(e)
        })
  
         },

         
    computed:{
           ...mapState(['proyecto']),
           
       },


  


};
</script>