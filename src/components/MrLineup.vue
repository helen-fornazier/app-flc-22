<template>
  <MrCard>
    <div class=card-header>Rolando agora</div>
      <swiper
        :autoplay="{delay:4500, disableOnInteraction: true}"
        :modules="modules"
        >
        <swiper-slide v-for="chunk in prog_now" :key="chunk.id">
            <div >
              <p class="programacao" v-for="prog in chunk" :key="prog.id">
                {{ prog.inicio }}&nbsp;{{ prog.local }}&nbsp;{{ prog.nome }}
              </p>
            </div>
          </swiper-slide>
      </swiper>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";
import MrCard from '@/components/MrCard.vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";

export default defineComponent({
  name: 'MrLineup',
  components: {
    Swiper,
    SwiperSlide,
    MrCard,
  },
  inject: ['prog_now'],
  setup() {
    return {
        modules: [Autoplay]
    }
  },
});
</script>

<style scoped>
ion-button {
  margin: auto;
  position: relative;
  left: -6px;
}
.programacao {
  font-size: 12px;
  line-height: 10px;
  text-align: left;
}
h4 {
  font-size: 12px;
  line-height: 15px;
}
.titulo {
  margin-left: var(--mr-side-margin)
}
.card-header {
  font-size: 12px;
  line-height: 40px;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  width: 100%;
  font-weight: bold;
}
</style>