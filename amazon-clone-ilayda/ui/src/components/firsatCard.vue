<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-for="(card, index) in cards"
      :key="index"
      class="my-card bg-white text-black"
    >
      <q-card-section>
        <div class="text-h6" style="font-weight: bold">
          {{ card.title }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-img :src="card.imageSrc"> </q-img>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat color="secondary" style="font-size: 13px">{{
          card.buttonText
        }}</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import card1 from '../static/card1.jpg';
import card2 from '../static/card2.jpg';
import card3 from '../static/card3.jpg';

export default {
  setup() {
    return {
      cards: [
        {
          title: '3 ay alışveriş senden, Prime ücreti bizden',
          imageSrc: card1,
          buttonText: 'Detaylı bilgi',
        },
        {
          title: 'Moda ürünlerinde gülümseten fiyatlar',
          imageSrc: card2,
          buttonText: 'Alışverişe başla',
        },
        {
          title: 'Günün Fırsatları',
          imageSrc: card3,
          buttonText: 'Tüm fırsatları gör',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  height: 420px
</style>
