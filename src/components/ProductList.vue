<template>
    <section>
        <ul class="catalog__list">

        <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
          
        </ul>
    </section>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
export default {
    props:['products'],
    components:{
       ProductItem
    }
}
</script>