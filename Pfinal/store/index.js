import {db} from "~/plugins/firebase.js"

export const state = () => ({
    proyectos:'',
    proyecto:'',
    categorias:''
})

export const mutations = {
  setProyectos(state, payload){
      
    state.proyectos = payload;
  },
  setProyecto(state, payload){
        state.proyectos.push(payload)
  },
  borrarProyecto(state, payload){
      const index = state.proyectos.findIndex(item => item.id === payload.id);
      state.proyectos.splice(index, 1);
  },
  updateTarea(state, payload){
    const index = state.proyectos.findIndex(item => item.id === payload.id);
    state.proyectos[index].nombre = payload.nombre;
  },
  setproyectoData(state, payload){
      state.proyecto = payload;
  },

  setcategorias(state, payload){
      state.categorias = payload;
  }


  
}

export const actions = {
    nuxtServerInit({commit}, {req}){
        return db.collection('proyectos').get()
       .then(queryData => {
           const proyectos = []
           queryData.forEach(element => {
               let proyecto = element.data();
               proyecto.id = element.id;
              
               proyectos.push(proyecto)
           });
          return commit('setProyectos', proyectos )
       })
       .catch(function(error) {
           console.log(error)
       }); 
         
    },

    busquedaData({commit}, payload){
        return db.collection('proyectos').get()
        .then(queryData => {
            console.log(payload)
            
            const proyectos = []
            queryData.forEach(element => {
                
                if(element.data().nombre === payload){
                let proyecto = element.data();
                proyecto.id = element.id;
                
                proyectos.push(proyecto)
                }

                
            });
           return commit('setProyectos', proyectos )
        })
        .catch(function(error) {
            console.log(error)
        }); 
    },
    

    filtrarProyectos({commit}, payload){
        return db.collection('proyectos').get()
        .then(queryData => {
            console.log(payload)
            
            const proyectos = []
            queryData.forEach(element => {
                
                if(element.data().categoria === payload){
                let proyecto = element.data();
                proyecto.id = element.id;
                
                proyectos.push(proyecto)
                }

                
            });
           return commit('setProyectos', proyectos )
        })
        .catch(function(error) {
            console.log(error)
        }); 
          
     
        
    },


   async agregarProyecto({commit}, payload){
        try{
            const doc = await db.collection('proyectos').add(payload)
            
            commit('setProyecto', payload)
            this.app.router.push('/proyectos')
        }catch(error){
            console.log(error)
        }
    },

    eliminarProyecto({commit}, payload){
        db.collection("proyectos").doc(payload.id).delete().then(function(){
            console.log("Proyecto eliminado");
            commit('borrarProyecto', payload);
        }).catch(function(error){
            console.log("error en borrado",error);
        })
    },

    editarProyecto({commit}, payload){
        db.collection("proyectos").doc(payload.id).updated({
            nombre: payload.nombre
        })
        .then(() => {
            console.log('Proyecto editada');
            commit('updateProyecto', payload)
        })
        .catch(e=>{
            console.log(e);
        })
    }


}
