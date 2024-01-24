<template>
  <div class="shopping-container">
    <div class="cart-content">
      <h3>Sepet İçeriği</h3>
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          {{ product.name }} - {{ product.price }} TL
          <button @click="removeFromBasket(product.id!)">Sepetten Çıkar</button>
        </li>
      </ul>

      <p>Toplam: {{ getTotalPrice() }} TL</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductStore } from '../stores/ProductStore'; 
import mdlProduct from 'src/core/modals/Product';

export default defineComponent({
  data() {
    return {
      products: useProductStore().getBasket() as mdlProduct[],
    };
  },
  methods: {
    
    removeFromBasket(id: number) {
      this.products = useProductStore().removeBasketByProduct(id);
    },
    getTotalPrice() {
      return useProductStore().getBasket().reduce((total, product) => total + product.price!, 0);
    },
  },
});
</script>
<style scoped>
.shopping-container {
  display: flex;
  justify-content: space-around;
}

.product-list,
.cart-content {
  width: 45%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}

p {
  font-weight: bold;
  margin-top: 20px;
}
</style>
