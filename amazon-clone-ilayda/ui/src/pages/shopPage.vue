<template>
  <div>
    <headForm />
    <listForm />
    <productDetail />
    <mainFooter />
  </div>
</template>

<script lang="ts">
import headForm from 'components/headForm.vue';
import listForm from 'components/listForm.vue';
import productDetail from 'components/productDetail.vue';
import mainFooter from 'src/components/mainFooter.vue';

export default {
  name: 'app',
  components: {
    headForm,
    listForm,
    productDetail,
    mainFooter,
  },
};
</script>
