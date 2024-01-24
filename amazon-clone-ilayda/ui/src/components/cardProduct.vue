<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <h5>Ürünler</h5>
    <div class="product-carousel" style="background-color: rgb(255, 255, 255)">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img
          :src="product.image"
          :alt="product.name"
          style="max-height: 100px"
        />
        <div class="product-info">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">{{ product.price }} TL</p>
          <q-row>
            <q-col>
              <router-link :to="'/product/' + product.id">
                <q-btn size="sm" text-color="black">Ürünü İncele</q-btn>
              </router-link>
            </q-col>
            <q-col>
              <router-link to="basket">
                <q-btn size="sm" @click="addToBasket(product)" text-color="black">Sepete Ekle</q-btn>
              </router-link>
            </q-col>
          </q-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductStore } from '../stores/ProductStore'; 
import mdlProduct from '../core/modals/Product'; 

export default defineComponent({
  data() {
    return {
      products: [] as mdlProduct[]
    };
  },
  async created() {
    try {
      const response = await useProductStore().productList();
      this.products = response.body as mdlProduct[];
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  },
  methods: {
    async addToBasket(product: mdlProduct) {
      var pProduct = new mdlProduct();
      pProduct.id = product.id;
      pProduct.name = product.name;
      pProduct.about = product.about;
      pProduct.colors = product.colors;
      pProduct.createdDate = product.createdDate;
      pProduct.price = product.price;
      pProduct.vote = product.vote;
      pProduct.image = product.image;
      pProduct.view = product.view;
      useProductStore().addBasket(pProduct);
      alert("Sepete başarıyla eklendi.");   
    },
  },
});
</script>

<style scoped>
@import '../css/bootstrap.css';
.product-carousel {
  display: flex;
  overflow-x: auto;
}

.product-card {
  min-width: 200px;
  margin-right: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 16px;
  margin-bottom: 5px;
}

.product-price {
  font-size: 14px;
  color: #007bff;
}
</style>
