<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  head() {
    return {
      title: 'Benim Quasar Uygulamam', // HTML başlık etiketi
    };
  },
});
</script>

<style scoped>
/* İhtiyaca göre stillendirmeler yapabilirsiniz */
</style>
