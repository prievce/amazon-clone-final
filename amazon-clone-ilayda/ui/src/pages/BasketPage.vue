<template>
  <div>
    <headForm />
    <listForm />
    <basketBody />
    <mainFooter />
  </div>
</template>

<script lang="ts">
import headForm from 'components/headForm.vue';
import listForm from 'components/listForm.vue';
import basketBody from 'components/basketBody.vue';
import mainFooter from 'src/components/mainFooter.vue';

export default {
  name: 'app',
  components: {
    headForm,
    listForm,
    basketBody,
    mainFooter,
  },
};
</script>
