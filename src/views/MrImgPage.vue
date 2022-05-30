<template>
  <ion-page>
    <div id="container">

    <ion-content :fullscreen="true">
    <div id="container_view">
      <swiper
      :zoom="{enabled:true, maxRatio: 6}"
      :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="swiper-zoom-container">
              <MrImg :src="$route.query.img"/>
          </div>
        </swiper-slide>
      </swiper>

    </div>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom } from "swiper";
import MrImg from '@/components/MrImg.vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/zoom";

export default defineComponent({
  name: 'MrImgPage',
  components: {
    IonContent,
    IonPage,
    Swiper,
    SwiperSlide,
    MrImg,
  },
  setup() {
    return {
        modules: [Zoom]
    };
  },
});
</script>

<style scoped>
ion-content {
  --padding-bottom: -100%;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
#container_view {
  max-width: 700px;
  margin: auto;
}
.separator {
  width: 100%;
  height: 20px;
}
</style>