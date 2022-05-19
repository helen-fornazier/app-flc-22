<template>
  <MrCard>
    <swiper
      :autoplay="{delay:4500, disableOnInteraction: false}"
      :modules="modules"
      >
      <swiper-slide v-for="ads in slowdata.ads" :key="ads.id">
        <div class="keep_aspect_ratio">
          <ion-img :src="ads"></ion-img>
        </div>
      </swiper-slide>
    </swiper>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonImg } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";
import MrCard from '@/components/MrCard.vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";


export default defineComponent({
  name: 'MrAds',
  components: {
    IonImg,
    Swiper,
    SwiperSlide,
    MrCard,
  },
  inject: ['slowdata'],
  setup() {
    return {
        modules: [Autoplay]
    };
  },
});
</script>

<style scoped>
.keep_aspect_ratio {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
}
</style>