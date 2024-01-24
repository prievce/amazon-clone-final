<template>
  <div style="background-color: rgb(242, 242, 242)">
    <headForm />
    <listForm />
    <coureselGiris />
    <firsatCard />
    <firsatSlider />
    <cardProduct />

    <mainFooter />
  </div>
</template>

<script lang="ts">
import headForm from 'components/headForm.vue';
import listForm from 'components/listForm.vue';
import coureselGiris from 'src/components/coureselGiris.vue';
import firsatCard from 'src/components/firsatCard.vue';
import firsatSlider from 'src/components/firsatSlider.vue';
import cardProduct from 'src/components/cardProduct.vue';

import mainFooter from 'src/components/mainFooter.vue';

export default {
  name: 'app',
  components: {
    headForm,
    listForm,
    coureselGiris,
    firsatCard,
    firsatSlider,
    cardProduct,

    mainFooter,
  },
};
</script>
