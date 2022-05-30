<template>
  <MrCard>
    <swiper
      :autoplay="{delay:4500, disableOnInteraction: false}"
      :modules="modules"
      >
      <swiper-slide v-for="ad in ads" :key="ad.id">
        <div class="keep_aspect_ratio">
          <MrImg use_ion :src="ad"/>
        </div>
      </swiper-slide>
    </swiper>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";
import MrCard from '@/components/MrCard.vue';
import MrImg from '@/components/MrImg.vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";


export default defineComponent({
  name: 'MrAds',
  components: {
    Swiper,
    SwiperSlide,
    MrCard,
    MrImg,
  },
  inject: ['ads'],
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