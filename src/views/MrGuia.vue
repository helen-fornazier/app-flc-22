<template>
  <ion-page>
    <div id="container">
    <MrHeader />

    <ion-content :fullscreen="true">
    <div id="container_view">

      <swiper
      :zoom="{enabled:true, maxRatio: 6}"
      :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="swiper-zoom-container">
              <img>
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
import MrHeader from '@/components/MrHeader.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Zoom } from "swiper";
import mergeImages from 'merge-images';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/zoom";

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrHeader,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
        modules: [Zoom]
    };
  },
  mounted() {
    mergeImages(['assets/guia-digital.png',
                {src:'assets/blue-arrow.png', x:200, y:20, width:10, heigh:10}])
      .then(b64 => this.$el.querySelector('img').src = b64);
  }
});
</script>

<style scoped>
ion-content {
  --padding-bottom: 0;
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