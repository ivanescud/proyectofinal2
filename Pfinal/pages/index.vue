<template>
   <div class="container pt-5">
   <div class="border box mx-auto">
   <div class="title">
<h1>Prowiki.com</h1>
<h5>Bienvenido a la librería de proyectos</h5>
</div>
  
   <b-form @submit="onSubmit" @reset="onReset"  style="padding:30px;" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          type="password"
          placeholder="Enter your Password"
        ></b-form-input>
      </b-form-group>

     <div style="text-align:center;">
     <nuxt-link to="/proyectos"><b-button type="submit" variant="primary">Login</b-button></nuxt-link>
      
     
      </div>
    </b-form>

  

   </div>
   </div>
</template>
 

 <style  scoped>
 
  .title{
    text-align: center;
    color:white;
    background: #31A2B8;
    padding: 30px;
  }

.box{
  height: 500px;
  width: 600px;
  
}

.logform{
  padding: 30px;
}



 </style>

<script>
  export default {

layout:'navlog',

    data() {
      return {
        form: {
          email: '',
          password:''
        },
        
  
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
         this.app.router.push('/proyectos')

        
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        
      }
    },

    

    
  }
</script>

