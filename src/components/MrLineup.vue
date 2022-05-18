<template>
  <MrCard>
    <div class=card-header>Rolando agora</div>

    <div class=linup-table>
    <table>
      <tr class="line-header">
        <th>Atração</th>
        <th>Horário</th>
        <th>Local</th>
      </tr>
    </table>
    </div>
    <!--swiper
      :autoplay="{delay:4500, disableOnInteraction: true}"
      :modules="modules"
      >
      <swiper-slide v-for="chunk in prog_now" :key="chunk.id">
          <div>
            <p class="programacao" v-for="prog in chunk" :key="prog.id">
              {{ prog.inicio }}&nbsp;{{ prog.local }}&nbsp;{{ prog.nome }}
            </p>
          </div>
        </swiper-slide>
    </swiper-->
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
    //Swiper,
    //SwiperSlide,
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
.programacao {
  font-size: 12px;
  line-height: 10px;
  text-align: left;
}
h4 {
  font-size: 12px;
  line-height: 15px;
}
.card-header {
  font-size: 12px;
  line-height: 40px;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  width: 100%;
  font-weight: bold;
}
table {
  width: 100%;
  align-items: center;
  justify-content: center;
}
tr {
  width: 100%;
  align-items: center;
  justify-content: center;
}
.line-header {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  font-size: 18px;
  line-height: 25px;
}
.linup-table {
  width: 100%;
  padding: 10px;
}
</style>