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
    

   
    </b-collapse>
  </b-navbar>
   <Nuxt />
</div>
  
</template>