<template>
    <div class="container pt-5 pb-5 ">
    <div class="border p-4">
        <h1 style="text-align:center;">Registre un nuevo proyecto</h1>

        <b-form @submit.prevent="agregarProyecto(datos)">
    <b-form-group
        id="input-group-1"
        label="Nombre"
        label-for="input-1"
        description="Nombre del proyecto a registrar"
      >
        <b-form-input
          id="input-1"
          v-model="datos.nombre"
          type="text"
          required
          placeholder="Enter email"
        ></b-form-input>


      </b-form-group>
         <b-form-group
        id="input-group-1"
        label="Autor"
        label-for="input-1"
        description="Autor del proyecto"
      >
        <b-form-input
          id="input-1"
          v-model="datos.Autor"
          type="text"
          required
          placeholder="Autor del proyecto"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Biografia de proyecto"
        label-for="input-1"
        
      >
        <b-form-textarea
          id="input-1"
          v-model="datos.bio"
          type="text"
          required
          placeholder="Biografia de proyecto"
          rows="8"
            
        ></b-form-textarea>
      </b-form-group>

         <b-form-group
        id="input-group-1"
        label="Categoria"
        label-for="input-1"
        description="Categoria de proyecto"
      >
        <b-form-input
          id="input-1"
          v-model="datos.categoria"
          type="text"
          required
          placeholder="Categoria del proyecto"
        ></b-form-input>
      </b-form-group>  


       <b-form-group
        id="input-group-1"
        label="Detalle"
        label-for="input-1"
        description="Detalle de proyecto"
      >
        <b-form-textarea
          id="input-1"
          v-model="datos.detalle"
          type="text"
          required
          row="5"
          placeholder="Detalle corto de proyecto"
        ></b-form-textarea>
      </b-form-group>  
           
           
         <b-form-group
        id="input-group-1"
        label="Fecha de lanzamiento"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="datos.fecha"
          type="text"
          required
          
        ></b-form-input>
      </b-form-group>   

       <b-form-group
        id="input-group-1"
        label="Link de Imagen"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="datos.img"
          type="text"
          required
          
        ></b-form-input>
      </b-form-group>  
       <b-form-group
        id="input-group-1"
        label="Licencia de proyecto"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="datos.licencia"
          type="text"
          required
          
        ></b-form-input>
      </b-form-group>  
       <b-form-group
        id="input-group-1"
        label="Sitio Web"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="datos.link"
          type="text"
          required
          
        ></b-form-input>
      </b-form-group>   
         <b-button block size="lg" type="submit" variant="primary">Enviar</b-button>
        
        </b-form>
        </div> 
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
     methods: {
           ...mapActions(['agregarProyecto'])
       },

       data(){
           return{
               datos:{
                nombre:'',
               Autor:'',
               bio:'',
               categoria:'',
               detalle:'',
               fecha:'',
               img:'',
               licencia:'',
               link:'',
               
               },
               

           }
       }
}



</script>