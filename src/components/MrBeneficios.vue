<template>
  <swiper
  :modules="modules"
  :slidesPerView="1.5"
  :freeMode="true"
  >
    <swiper-slide v-for="nivel in slowdata.niveis" :key="nivel.id">
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content" v-html="nivel.beneficios">
            </div>
        </MrCard>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MrCard from '@/components/MrCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default defineComponent({
  name: 'MrBeneficios',
  components: {
    MrCard,
    Swiper,
    SwiperSlide,
  },
  inject: ["slowdata"],
  setup() {
    return {
        modules: [FreeMode]
    }
  },
});
</script>

<style scoped>
.card-header {
  font-size: 12px;
  line-height: 25px;
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  width: 100%;
  font-weight: bold;
}
.card-content {
  min-height: 200px;
  text-align: left;
  padding: 10px 20px 10px 20px; /* top right bottom left */
  align-items: center;
  justify-content: center;
}
/deep/ .card-content ul {
  color: var(--ion-color-primary);
  margin: 0;
  padding: 0;
  text-align: left;
}
/deep/ .card-content li {
  color: var(--ion-color-primary);
  margin: 0;
  padding: 0;
  position: relative;
  left: 1em;
  text-align: left;
}
/deep/ .card-content p {
  font-size: 12px;
  color: black;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>