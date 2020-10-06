<template>

    <label :class="[comuna.checked ? 'btn-comuna-active' : 'btn-comuna']">
        <input type="checkbox" class="sr-only" v-model="comuna.checked" >
        <span class="select-none">{{comuna.nombre}}</span>
    </label>       
    
</template>

<script>
export default {
    name: 'comuna',
    props: ['comuna'],
}
</script>