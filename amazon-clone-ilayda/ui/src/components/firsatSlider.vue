<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <h5>Öne çıkan fırsat ve mağazalar</h5>
    <div class="product-carousel" style="background-color: rgb(255, 253, 253)">
      <div class="product-card" v-for="highlight in highlights" :key="highlight.id">
        <img :src="highlight.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHighlightStore } from '../stores/HighlightStore';
import mdlHighlight from 'src/core/modals/Highlight';

export default defineComponent({
  data() {
    return {
      highlights: [] as mdlHighlight[], 
    };
  },
  async created() {
    try {
      var response = await useHighlightStore().highlightList();
      this.highlights = response.body as mdlHighlight[];
    } catch (error) {
      console.error('Öne çıkanlar listesi alınırken bir hata oluştu:', error);
    }
  },
});
</script>

<style scoped>
/* Carousel Container ve Card stilleri */
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
