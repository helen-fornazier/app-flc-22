<template>
  <ion-page>
    <div id="container">

    <ion-content :fullscreen="true">
    <div id="container_view">

      <swiper  v-for="page in guia_digital_pages" :key="page.id"
      :zoom="{enabled:true, maxRatio: 6}"
      :freeMode="true"
      :modules="modules" class="mySwiper">
        <swiper-slide >
          <div class="swiper-zoom-container">
              <MrImg :src="page"/>
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
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/zoom";
import "swiper/css/free-mode";

export default defineComponent({
  name: 'MrGuia',
  components: {
    IonContent,
    IonPage,
    Swiper,
    SwiperSlide,
    MrImg,
  },
  inject: ["guia_digital_pages"],
  setup() {
    return {
        modules: [Zoom, FreeMode]
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