<template>
  <q-page>
    <q-container>
      <q-row class="justify-center">
        <q-col cols="12" md="6">
          <q-card>
            <q-card-section>
              <div class="preview-pic tab-content" style="height: auto; width: auto">
                <img
                  :src="product.image"
                  alt="Product Preview"
                  style="max-height: auto; width: 200px"
                />
              </div>
            </q-card-section>

            <q-card-section>
              <q-row>
                <q-col cols="12" md="6">
                  <div class="details">
                    <h3 class="product-title">{{ product.name }}</h3>
                    <div class="rating">
                      <div class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <span class="review-no">{{ product.view }} görüntülenme</span>
                    </div>
                    <p class="product-description">{{ product.about }}</p>
                    <h4 class="price">Fiyat <span>{{ product.price }} TL</span></h4>
                    <p class="vote">
                      <strong>{{ product.vote }}%</strong> of buyers enjoyed this product!
                      <strong>({{ product.vote }} votes)</strong>
                    </p>

                    <h5 class="colors">
                      Colors:
                      <span v-for="color in product.colors" :key="color" :class="`color ${color}`"></span>
                    </h5>
                    <div class="action">
                      <q-btn
                        color="primary"
                        @click="addToBasket(product)"
                        label="Sepete Ekle"
                      />
                    </div>
                  </div>
                </q-col>
              </q-row>
            </q-card-section>
          </q-card>
        </q-col>
      </q-row>
    </q-container>
  </q-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import mdlProduct from '../core/modals/Product';
import { useProductStore } from '../stores/ProductStore';

export default defineComponent({
  data() {
    return {
      product: {} as mdlProduct,
    };
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
      window.location.href = "http://localhost:9000/#/basket";
    }
  },
  async created() {
    try {
      const dynamicId = this.$route.params.id;

      var response = await useProductStore().productDetail(dynamicId.toString());
      this.product = response.body as mdlProduct;
    } catch (error) {
      console.error('Ürün listesi alınırken bir hata oluştu:', error);
    }
  },
});
</script>




<!-- 
<script setup>
function addToCart() {
  // Sepete ekleme işlemleri burada gerçekleştirilebilir.
  alert('Ürün sepete eklendi');
}
</script> -->

<style>
@import '../static/style.css';
.q-card {
  display: flex;
}
</style>
