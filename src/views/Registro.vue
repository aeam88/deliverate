<template>
    <div>
        <div v-if="mostrarSnak" class="snack">
            <h4>{{campoVacio}}</h4>
        </div>
        <section class="search-main">
        <div class="container">
            <div class="content-search">
                <h1>Registra tu local y logra más ventas</h1>
            </div>
        </div>
    </section>
    <section class="tipo-interacion">
        <div class="container">
            <div class="contenedor-tipo">
                <h3>¿Que deseas hacer?</h3>
                <div>
                    <label :class="[radioSelecionado === 'registro' ? 'btn-tipo-active' : 'btn-tipo']">
                        <input type="radio" name="tipo" value="registro" class="sr-only" v-model="radioSelecionado">
                        <span class="select-none">Registrar mi local</span>
                    </label>
                    <!-- <label :class="[radioSelecionado === 'actualizar' ? 'btn-tipo-active' : 'btn-tipo']">
                        <input type="radio" name="tipo" value="actualizar" class="sr-only" v-model="radioSelecionado">
                        <span class="select-none">Actualizar mi información</span>
                    </label> -->
                    <label :class="[radioSelecionado === 'eliminar' ? 'btn-tipo-active' : 'btn-tipo']">
                        <input type="radio" name="tipo" value="eliminar" class="sr-only" v-model="radioSelecionado">
                        <span class="select-none">Eliminar mi local</span>
                    </label>
                    <!-- <tipo-accion v-for="tipoAccion in tipoAcciones" :key="tipoAccion.id" :tipoAccion="tipoAccion" :radioSelecionado="radioSelecionado" /> -->
                </div>
            </div>
        </div>
    </section>
    <div v-if="radioSelecionado === 'eliminar'" class="eliminaradio">
        <section class="info-registro">
            <div class="container">
            <div class="content-info-form">
                    <h3>Ingresa la información solicitada</h3>
                    <div class="registro-info">
                        <div class="info-box">
                            <input type="text" name="email" v-model="emailEliminar" placeholder="Ingresa email de contacto...">
                        </div>
                    </div>
            </div>
            </div>
            <div class="seccion-btn">
                <button @click="elimina(emailEliminar)" class="btn-submit-form">Eliminar Delivery</button>
            </div>
        </section>   
    </div>
    <form @submit.prevent="agregar(email, telefono, nombre, descripcion, checkedComunas, tag, radioDias)" v-if="radioSelecionado === 'registro'">
        <section class="info-registro">
            <div class="container">
            <div class="content-info-form">
                    <h3>Ingresa la información solicitada</h3>
                    <div class="registro-info">
                        <div class="info-box">
                            <input type="text" name="email" placeholder="Ingresa email de contacto..." v-model="email">
                        </div>
                        <div class="info-box">
                            <input type="text" name="email" placeholder="Ingresa el teléfono de contacto..." v-model="telefono">
                        </div>
                        <div class="info-box">
                            <input type="text" name="nombre" placeholder="Ingresa nombre local..." v-model="nombre">
                        </div>
                        <div class="info-box">
                            <textarea placeholder="Ingresa descripción..." v-model="descripcion"></textarea>
                        </div>
                    </div>
            </div>
            </div>
        </section>   
        <section class="comuna">
            <h3>Selecciona la o las comunas donde operas</h3>
            <div class="container">
                <div class="contenedor-btn-comuna">
                    <label :class="[checkedComunas.indexOf('todas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="todas" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Todas</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('la florida') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="la florida" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">La Florida</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('independencia') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="independencia" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Independencia</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('las condes') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="las condes" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Las Condes</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('puente alto') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="puente alto" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Puente Alto</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('recoleta') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="recoleta" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Recoleta</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('lo barnechea') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="lo barnechea" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Lo Barnechea</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('quilicura') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="quilicura" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Quilicura</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('colina') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="colina" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Colina</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('san ramon') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="san ramon" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">San Ramón</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('ñuñoa') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="ñuñoa" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Ñuñoa</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('providencia') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="providencia" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Providencia</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('quinta normal') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="quinta normal" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Quinta Normal</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('san bernardo') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="san bernardo" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">San Bernardo</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('huechuraba') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="huechuraba" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Huechuraba</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('vitacura') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="vitacura" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Vitacura</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('la reina') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="la reina" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">La Reina</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('macul') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="macul" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">Macul</span>
                    </label>
                    <label :class="[checkedComunas.indexOf('san miguel') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" value="san miguel" class="sr-only" v-model="checkedComunas">
                        <span class="select-none">San Miguel</span>
                    </label>
                </div>
            </div>
        </section>
        <section class="comuna">
            <h3>Selecciona la categoría de tus productos</h3>
            <div class="container">
                <div class="contenedor-btn-comuna">
                    <label :class="[tag.indexOf('todas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="todas" v-model="tag">
                        <span class="select-none">Todas</span>
                    </label>
                    <label :class="[tag.indexOf('pan') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="pan" v-model="tag">
                        <span class="select-none">Pan</span>
                    </label>
                    <label :class="[tag.indexOf('verduras') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="verduras" v-model="tag">
                        <span class="select-none">Verduras</span>
                    </label>
                    <label :class="[tag.indexOf('mascotas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="mascotas" v-model="tag">
                        <span class="select-none">Comida para mascotas</span>
                    </label>
                    <label :class="[tag.indexOf('lacteos') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="lacteos" v-model="tag">
                        <span class="select-none">Lacteos</span>
                    </label>
                    <label :class="[tag.indexOf('bebidas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="bebidas" v-model="tag">
                        <span class="select-none">Bebestibles</span>
                    </label>
                    <label :class="[tag.indexOf('huevos') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="huevos" v-model="tag">
                        <span class="select-none">Huevos</span>
                    </label>
                    <label :class="[tag.indexOf('harina') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="harina" v-model="tag">
                        <span class="select-none">Harina</span>
                    </label>
                    <label :class="[tag.indexOf('articulos de aseo') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="articulos de aseo" v-model="tag">
                        <span class="select-none">Artículos de Aseo</span>
                    </label>
                    <label :class="[tag.indexOf('dulces') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="dulces" v-model="tag">
                        <span class="select-none">Dulces</span>
                    </label>
                    <label :class="[tag.indexOf('artículos de oficina') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="artículos de oficina" v-model="tag">
                        <span class="select-none">Artículos de Oficina</span>
                    </label>
                    <label :class="[tag.indexOf('cecinas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="cecinas" v-model="tag">
                        <span class="select-none">Cecinas</span>
                    </label>
                    <label :class="[tag.indexOf('cigarrillos') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="cigarrillos" v-model="tag">
                        <span class="select-none">Cigarrillos</span>
                    </label>
                    <label :class="[tag.indexOf('bebidas alcoholicas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="bebidas alcoholicas" v-model="tag">
                        <span class="select-none">Bebidas Alcoholicas</span>
                    </label>
                    <label :class="[tag.indexOf('tortas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="tortas" v-model="tag">
                        <span class="select-none">Tortas</span>
                    </label>
                    <label :class="[tag.indexOf('carne') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="carne" v-model="tag">
                        <span class="select-none">Carne</span>
                    </label>
                    <label :class="[tag.indexOf('pizzas') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="pizzas" v-model="tag">
                        <span class="select-none">Pizzas</span>
                    </label>
                    <label :class="[tag.indexOf('sushi') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="sushi" v-model="tag">
                        <span class="select-none">Sushi</span>
                    </label>
                    <label :class="[tag.indexOf('comida casera') != -1 ? 'btn-comuna-active' : 'btn-comuna']">
                        <input type="checkbox" class="sr-only" value="comida casera" v-model="tag">
                        <span class="select-none">Comida Casera</span>
                    </label>
                </div>
            </div>
        </section>
        <section class="tipo-interacion">
            <div class="container">
                <div class="contenedor-tipo">
                    <h3>Días que atiendes</h3>
                    <div>
                        <label :class="[radioDias === 'lundom' ? 'btn-tipo-active' : 'btn-tipo']">
                            <input type="radio" name="tipo" value="lundom" class="sr-only" v-model="radioDias">
                            <span class="select-none">Lunes a Domingo</span>
                        </label>
                        <label :class="[radioDias === 'lunvie' ? 'btn-tipo-active' : 'btn-tipo']">
                            <input type="radio" name="tipo" value="lunvie" class="sr-only" v-model="radioDias">
                            <span class="select-none">Lunes a Viernes</span>
                        </label>
                        <label :class="[radioDias === 'sabdom' ? 'btn-tipo-active' : 'btn-tipo']">
                            <input type="radio" name="tipo" value="sabdom" class="sr-only" v-model="radioDias">
                            <span class="select-none">Sabado y Domingo</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="mostrarSnakAgrega" class="snack2">
            <h4>{{campoVacio}}</h4>
        </div>
        <div class="seccion-btn">
            <button type="submit" class="btn-submit-form">Registrar Delivery</button>
        </div>
    </form>
    </div>
</template>

<script>

// import TipoAccion from '../components/TipoAccion.vue'
import {mapActions} from 'vuex'

export default {
    name: 'Registro',
    // components: {
    //     TipoAccion
    // },
    data() {
        return {
            radioSelecionado: 'registro',
            email: '',
            telefono: '',
            nombre: '',
            descripcion: '',
            checkedComunas: [],
            tag: [],
            radioDias: 'lundom',
            campoVacio: '',
            emailEliminar: '',
            mostrarSnak: false,
            mostrarSnakAgrega: false
        }
    },
    methods: {
        ...mapActions(['eliminarDelivery', 'agregarDelivery']),
        elimina(email) {
            if(email === '') {
                this.campoVacio = 'Debe ingresar el email a eliminar';
                this.mostrarSnak = true;
                setTimeout(() => {
                    this.mostrarSnak = false;
                }, 2000);
                return;
            }
            this.eliminarDelivery(email);
            this.emailEliminar = ''
        },
        agregar(email, telefono, nombre, descripcion, checkedComunas, tag, radioDias) {

            if(email === '' || telefono === '' || nombre === '' || descripcion === '' || checkedComunas === [] || tag === []) {
                this.campoVacio = 'Debe ingresar el todos los datos';
                this.mostrarSnakAgrega = true;
                setTimeout(() => {
                    this.mostrarSnakAgrega = false;
                }, 2000);
                return;
            }

            let atiende = '';

            if(radioDias == 'lundom') {
                atiende = 'Lun - Dom';
            } else if(radioDias == 'lunvie') {
                atiende = 'Lun - Vie';
            } else {
                atiende = 'Sab - Dom';
            }

            // let myTag = Object.assign({}, tag);
            // let myComuna = Object.assign({}, checkedComunas);


            let delivery = {
                email, 
                telefono, 
                nombre, 
                descripcion, 
                checkedComunas,
                tag, 
                atiende
            }

            this.agregarDelivery(delivery);
            // console.log(delivery);

            this.email = '',
            this.telefono = '',
            this.nombre = '',
            this.descripcion = '',
            this.checkedComunas = [],
            this.tag = [],
            this.radioDias = 'lundom'
        }
    }
}
</script>