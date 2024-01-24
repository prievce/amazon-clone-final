<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      v-model:fullscreen="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="../static/c1.jpg" />
      <q-carousel-slide :name="2" img-src="../static/c2.jpg" />
      <q-carousel-slide :name="3" img-src="../static/c3.jpg" />
      <q-carousel-slide :name="4" img-src="../static/c4.jpg" />
      <q-carousel-slide :name="5" img-src="../static/c5.jpg" />

      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(false),
    };
  },
};
</script>
