<template>
   
   <header class="header">
        <div class="container">
            <nav class="main-navbar">
                <div class="nav-izq">
                    <Logo />
                </div>
                <div class="login-navbar">
                    <router-link to="/about" class="about-page">Nosotros</router-link>
                    <router-link to="/registro" class="registro-local">Registra tu local</router-link>
                </div>
                <div class="nav-responsive">
                    <a @click="mostrarResp = !mostrarResp" href="#"><i class="fas fa-bars"></i></a>
                </div>
            </nav>
            <div v-if="mostrarResp" class="navegacion-resp">
                <ul>
                    <li><router-link to="/about" class="about-page">Nosotros</router-link></li>
                    <li><router-link to="/registro" class="registro-local">Registra tu local</router-link></li>
                </ul>
            </div>
        </div>
    </header>     
    
</template>

<script>

import Logo from './Logo.vue'    

export default {
    name: 'Header',
    components: {
        Logo
    },
    data() {
        return {
            mostrarResp: false
        }
    },
}
</script>