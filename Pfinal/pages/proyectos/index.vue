<template>
    <div >
    <b-row>
    
    <b-col md="3" sm="12">
    <div class="sidebar2 mt-2 border" >

        <div class=" container pt-5">
        <b-form @submit.prevent="busquedaData(consulta)">
         <h5>Busqueda</h5>
        <b-form-input size="sm" placeholder="Search" v-model="consulta"/>
         <br>
         <div class=" center">
         <b-button size="sm" class="my-2 my-sm-0 bg-info "  type="submit" >
         
          
          Buscar
          </b-button>

          </div>
            <br>
            <br>
            <hr>
        
        
        </b-form>
        <h5 class="centerText">Categorias</h5>
        <ul>
        <div v-for="(item, index) in categorias" :key="index">
     
        <div class="mr-5">
           
    <b-button block  variant="outline-secondary"   @click="filtrarProyectos(item.nombre)">{{item.nombre}}</b-button>
            
            
</div>
        
        </div>
        </ul>
         <br>
          <hr>
         <nuxt-link to="/nuevo_proyecto">
         <b-button block  variant="outline-secondary">Agregar Nuevo Proyecto</b-button>
         </nuxt-link>
        <br>
        <hr>
        <b-button block  variant="outline-secondary">Logout</b-button>
        </div>


        
       
  </div>
  
    </b-col>

    <b-col>
    <div class="contenido">
    <b-row>
    <b-col sm="12" md="5" v-for="(item,index) in proyectos" :key="index">
      <nuxt-link :to="`/proyectos/${item.id}`" >
        <b-card style="height:420px;" :title="item.nombre"  :img-src="item.img" img-alt="Image" img-top>
             
    <b-card-text>
        {{item.detalle}}
      </b-card-text>
        
  </b-card>
  </nuxt-link>
  <br>
  
    </b-col>
    
    </b-row>
   
    </div>
    </b-col>
       
    
    </b-row>
   


    </div>
</template>


<style  scoped>
.sidebar2{
    
    padding-bottom: 30px;
    margin-left: 10px;
   height: 100%;
 


}

.center {
     margin: 0;
  position: absolute;
  
 
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.centerText{
    text-align: center;
}
.contenido{
    padding-top: 30px;
}




</style>

<script>
import {db} from "~/plugins/firebase.js";
import {mapState, mapActions} from "vuex";

export default {

fetch({store, params}){
         return db.collection('categorias').get()
       .then(queryData => {
           const categorias = []
           queryData.forEach(element => {
               let catego = element.data();
               
               categorias.push(catego)
           });
          return store.commit('setcategorias', categorias )

       })
       .catch(function(error) {
           console.log(error)
       }); 
        
  
         },

        

  data() {
    return {
      consulta:'',
      perPage: 2,
      currentPage: 1,
      
    };
  },
    computed:{
           ...mapState(['proyectos','categorias']),
           rows() {
        return this.proyectos.length
      }
           
       },

       methods: {
           ...mapActions(['filtrarProyectos','busquedaData'])

        
       },

      
       
};
</script>