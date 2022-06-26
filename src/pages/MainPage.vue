 <template>
  <div id="app">

    <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <productFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId"></productFilter>

      <section class="catalog">

        <ProductList :products="products"></ProductList>

        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"></BasePagination>

      </section>
    </div>
    </main>
  </div>
</template>



<script>
import products from "@/data/products";
import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import productFilter from "@/components/productFilter.vue";

export default {
 components:{
   ProductList,
   BasePagination,
   productFilter
 },
 data(){
   return{
     filterPriceFrom:0,
     filterPriceTo:0,
     filterCategoryId:0,

     page:1,
     productsPerPage:3,
   }
 },

 computed:{
   //  filter
   filterdProducts(){
       let filterdProducts = products;

       if(this.filterPriceFrom >0){
         filterdProducts = filterdProducts.filter(product=>product.price > this.filterPriceFrom);
       }

       if(this.filterPriceTo >0){
         filterdProducts = filterdProducts.filter(product=>product.price < this.filterPriceTo);
       }

       if(this.filterCategoryId){
         filterdProducts = filterdProducts.filter(product=>product.categoryId === this.filterCategoryId);
       }

       return filterdProducts;
   }, 
   //  filter

   products(){
     const offset = (this.page - 1) * this.productsPerPage;
     return this.filterdProducts.slice(offset, offset + this.productsPerPage);
   },
   countProducts(){
     return this.filterdProducts.length;
   }
 }
}
</script>