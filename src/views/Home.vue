<template>
  <div>
     <div v-if="mostrarSnak" class="snack">
        <h4>{{campoVacio}}</h4>
    </div>  
    <section class="search-main">
        <div class="container">
            <div class="content-search">
                <h1>Encuentra tu Delivery más cercano</h1>
                <!-- <div class="selection-search">
                    <div class="search-box">
                        <input @keyup.enter="consultar(valorSearch)" type="text" name="buscar" placeholder="Busca el producto que necesitas..." v-model="valorSearch">
                        <i class="fas fa-search"></i>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
    <section class="comuna">
        <div class="container">
            <!-- <div class="contenedor-btn-comuna">
                <comuna v-for="comuna in comunasActivas" :key="comuna.id" :comuna="comuna" />
            </div> -->
            <div class="contenedor-btn-comuna">
                    <label :class="[checkedComunas == 'todas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="todas" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Todas</span>
                    </label>
                    <label :class="[checkedComunas == 'la florida' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="la florida" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">La Florida</span>
                    </label>
                    <label :class="[checkedComunas == 'independencia' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="independencia" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Independencia</span>
                    </label>
                    <label :class="[checkedComunas == 'las condes' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="las condes" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Las Condes</span>
                    </label>
                    <label :class="[checkedComunas == 'puente alto' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="puente alto" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Puente Alto</span>
                    </label>
                    <label :class="[checkedComunas == 'recoleta' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="recoleta" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Recoleta</span>
                    </label>
                    <label :class="[checkedComunas == 'lo barnechea' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="lo barnechea" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Lo Barnechea</span>
                    </label>
                    <label :class="[checkedComunas == 'quilicura' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="quilicura" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Quilicura</span>
                    </label>
                    <label :class="[checkedComunas == 'colina' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="colina" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Colina</span>
                    </label>
                    <label :class="[checkedComunas == 'san ramon' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="san ramon" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">San Ramón</span>
                    </label>
                    <label :class="[checkedComunas == 'ñuñoa' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="ñuñoa" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Ñuñoa</span>
                    </label>
                    <label :class="[checkedComunas == 'providencia' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" value="providencia" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Providencia</span>
                    </label>
                    <label :class="[checkedComunas == 'quinta normal' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="comuna" value="quinta normal" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Quinta Normal</span>
                    </label>
                </div>
        </div>
    </section>
    <section class="comuna">
            <div class="container">
                <div class="filtrar-por-producto">
                    <h3 @click="filtroProducto = !filtroProducto">Filtrar por producto <span><i class="fas fa-angle-double-down"></i></span></h3>    
                </div>
            </div>
            <div v-if="filtroProducto" class="container">
                <div class="contenedor-btn-comuna">
                    <label :class="[tags == 'todas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="todas" v-model="tags">
                        <span class="select-none">Todas</span>
                    </label>
                    <label :class="[tags == 'pan' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="pan" v-model="tags">
                        <span class="select-none">Pan</span>
                    </label>
                    <label :class="[tags == 'verduras' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="verduras" v-model="tags">
                        <span class="select-none">Verduras</span>
                    </label>
                    <label :class="[tags == 'mascotas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="mascotas" v-model="tags">
                        <span class="select-none">Comida para mascotas</span>
                    </label>
                    <label :class="[tags == 'lacteos' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="lacteos" v-model="tags">
                        <span class="select-none">Lacteos</span>
                    </label>
                    <label :class="[tags == 'bebidas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="bebidas" v-model="tags">
                        <span class="select-none">Bebestibles</span>
                    </label>
                    <label :class="[tags == 'huevos' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="huevos" v-model="tags">
                        <span class="select-none">Huevos</span>
                    </label>
                    <label :class="[tags == 'articulos de aseo' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="articulos de aseo" v-model="tags">
                        <span class="select-none">Artículos de Aseo</span>
                    </label>
                    <label :class="[tags == 'dulces' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="dulces" v-model="tags">
                        <span class="select-none">Dulces</span>
                    </label>
                    <label :class="[tags == 'cecinas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="cecinas" v-model="tags">
                        <span class="select-none">Cecinas</span>
                    </label>
                    <label :class="[tags == 'cigarrillos' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="cigarrillos" v-model="tags">
                        <span class="select-none">Cigarrillos</span>
                    </label>
                    <label :class="[tags == 'bebidas alcoholicas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="bebidas alcoholicas" v-model="tags">
                        <span class="select-none">Bebidas Alcoholicas</span>
                    </label>
                    <label :class="[tags == 'carne' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="carne" v-model="tags">
                        <span class="select-none">Carne</span>
                    </label>
                    <label :class="[tags == 'pizzas' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="pizzas" v-model="tags">
                        <span class="select-none">Pizzas</span>
                    </label>
                    <label :class="[tags == 'sushi' ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="radio" name="tags" class="sr-only" value="sushi" v-model="tags">
                        <span class="select-none">Sushi</span>
                    </label>
                    
                </div>
            </div>
        </section>
    <section class="contenido">
        <div class="container">
            <div class="wrapper-content" v-if="deliverys.length > 0">
                <CardDelivery v-for="delivery in deliverys" :key="delivery.id" :delivery="delivery" />
            </div>
            <div v-else-if="!isLoading && deliverys.length == 0" class="container-cargando">
                <h2>Sin Resultados</h2>
            </div>
            <div v-else class="container-cargando">
                <h2>Cargando ...</h2>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CardDelivery from '@/components/CardDelivery.vue'
// import Comuna from '@/components/Comuna.vue'

import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
      CardDelivery,
    //   Comuna
  },
  data() {
      return {
        valorSearch: '',
        checkedComunas: 'todas',
        tags: 'todas',
        filtroProducto: false,
        // mostrarComunas: false,
        mostrarSnak: false,
        campoVacio: '',
      }
  },
  watch: {
      checkedComunas(comuna) {
          this.filtrarComuna(comuna);
      },
      tags(categoria) {
          this.getBusqueda(categoria);
      }
  },
  methods: {
      ...mapActions(['getDeliverys', 'getBusqueda', 'filtrarComuna']),
  },
  created() {
        this.getDeliverys();
  },
  computed: {
      ...mapState(['deliverys', 'isLoading'])
  }
}
</script>
