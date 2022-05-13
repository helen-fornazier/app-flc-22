<template>
  <ion-page>
    <div id="container">
    <MrHeader />

      <swiper :zoom="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="swiper-zoom-container">
              <img :src="mapa">
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/vue';
import MrHeader from '@/components/MrHeader.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/zoom";

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonPage,
    MrHeader,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const mapa = computed(() => require('@/assets/mapa-teste.png'));
    const you = computed(() => require('@/assets/blue-arrow.png'));
    return {
        mapa,
        you,
        modules: [Zoom]
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
#you {
  width: 20px;
  position: absolute;
  left: 10px;
  top: 0;
  transform: rotate(45deg);
}
.mySwiper {
  height: 92vh;
}
</style>