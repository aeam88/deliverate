<template>
    <div class="card-content">
        <div>
            <h3>{{delivery.name}}</h3>
            <p>{{delivery.description}}</p>
        </div>
        <div class="info-contact">
            <h4>Pedidos</h4>
            <p>{{delivery.phone}}</p>
            <p>{{delivery.email}}</p>
        </div>
        <div class="info-delivery">
            <div :class="[tags[0] === 'comida' ? 'tag-comida' 
                : tags[0] === 'verduras' ? 'tag-verdura' 
                : tags[0] === 'huevos' ? 'tag-huevos' : 'tag-otro']" class="tag-comida">{{tags[0].charAt(0).toUpperCase() + tags[0].slice(1)}}</div>
            <div class="tiempo-atendiendo">
                <p>{{delivery.atencion}}</p>
                <i class="fas fa-calendar"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardDelivery',
    props: ['delivery'],
    data() {
        return {
            tags: []
        }
    },
    created() {
        this.tags = Object.values(this.delivery.tag);
    }
}
</script>