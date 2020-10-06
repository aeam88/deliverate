import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deliverys: null,
    isLoading: true
  },
  mutations: {
    setDeliverys(state, deliverys) {
      state.deliverys = deliverys
    },
    setLoading(state) {
      state.isLoading = true;
    },
    setNotLoading(state) {
      state.isLoading = false;
    },
    eliminarDelivery(state, id) {
      state.deliverys = state.deliverys.filter(doc => {
        return doc.id != id
      })
    },
  },
  actions: {
    filtrarComuna({commit}, comuna) {

      if(comuna == 'todas') {
        const deliverys = []
        db.collection('deliverys')
          .get()
          .then(snapshot => {
            commit('setLoading');
            snapshot.forEach(doc => {
              // console.log(doc.id);
              // console.log(doc.data());
              let delivery = doc.data();
              delivery.id = doc.id;

              deliverys.push(delivery)
            });
            commit('setNotLoading');
          })

          commit('setDeliverys', deliverys);
      } else {
        const deliverys = []
        db.collection('deliverys')
          .where('comunas', 'array-contains', comuna)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.id);
              // console.log(doc.data());
              let delivery = doc.data();
              delivery.id = doc.id;
  
              deliverys.push(delivery)
            });
          })
        commit('setDeliverys', deliverys)

      }

    },
    // eslint-disable-next-line no-unused-vars
    getBusqueda({commit}, categoria) {
      if(categoria == 'todas') {
        const deliverys = []
        db.collection('deliverys')
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              // console.log(doc.id);
              // console.log(doc.data());
              let delivery = doc.data();
              delivery.id = doc.id;

              deliverys.push(delivery)
            });
          })

          commit('setDeliverys', deliverys);
      } else {
        const deliverys = []
        db.collection('deliverys')
          .where('tag', 'array-contains', categoria)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.id);
              // console.log(doc.data());
              let delivery = doc.data();
              delivery.id = doc.id;
  
              deliverys.push(delivery)
            });
          })
  
          commit('setDeliverys', deliverys);
      }
    },
    getDeliverys({commit}) {
      // commit('setLoading');
      const deliverys = []
      db.collection('deliverys')
        .get()
        .then(snapshot => {
          commit('setLoading');
          snapshot.forEach(doc => {

            // console.log(doc.id);
            // console.log(doc.data());
            let delivery = doc.data();
            delivery.id = doc.id;

            deliverys.push(delivery)
          });
          commit('setNotLoading');
        })

        commit('setDeliverys', deliverys);
        // commit('setNotLoading');
        this.isLoading = false;
    },
    // eslint-disable-next-line no-unused-vars
    agregarDelivery({commit}, delivery) {
      db.collection('deliverys').doc(delivery.email).set({
          atencion: delivery.atiende,
          description: delivery.descripcion,
          email: delivery.email,
          name: delivery.nombre,
          phone: delivery.telefono,
          tag: delivery.tag,
          comunas: delivery.checkedComunas
      })
      .then(doc => {
        console.log(doc);
        router.push('/');
      });
    },
    eliminarDelivery({commit}, id) {
      db.collection('deliverys').doc(id).delete()
        .then(() => {
          console.log('Delivery Eliminado');
          commit('eliminarDelivery', id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  modules: {
  }
})
