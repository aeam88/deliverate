<template>

    <label :class="[radioSelecionado === tipoAccion.value ? 'btn-tipo-active' : 'btn-tipo']">
        <input type="radio" name="tipo" :value="tipoAccion.value" class="sr-only" v-model="radioSelecionado">
        <span class="select-none">{{tipoAccion.nombre}}</span>
    </label>    

</template>

<script>
export default {
    name: 'TipoAccion',
    props: ['tipoAccion', 'radioSelecionado']
}
</script>