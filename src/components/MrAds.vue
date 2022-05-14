<template>

  <table>
  <tr>
    <th class=table_margin>
    </th>

    <th>
        <ion-card>
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
        </ion-card>
    </th>

    <th class=table_margin>
    </th>
  </tr>
  </table>

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonCard, IonImg } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";


export default defineComponent({
  name: 'MrAds',
  components: {
    IonCard,
    IonImg,
    Swiper,
    SwiperSlide,
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
.table_margin {
  width: var(--mr-side-margin);
  margin: 0 auto;
}
ion-card {
  border-radius: 8px;
  margin: 0;
}
.keep_aspect_ratio {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0;
  padding-bottom: 25%;
}
ion-button {
  margin: auto;
  position: relative;
  left: -6px;
}
p {
  font-size: 15px;
  line-height: 25px;
  text-align: left;
}
table {
  width: 100%;
  margin: 0;
  table-layout:fixed;
}
th {
  margin: 0;
}
tr {
  margin: 0;
}
</style>