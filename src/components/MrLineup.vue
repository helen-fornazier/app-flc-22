<template>

  <table>
  <tr>
    <th class=table_margin></th>
    <th>
      <div class=titulo><h4>Rolando agora</h4></div>
    </th>
    <th class=table_margin></th>
  </tr>
  <tr>
    <th class="table_margin">
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
    </th>

    <th>
      <ion-card>
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
      </ion-card>
    </th>

    <th class="forwardarrow table_margin">
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
    </th>
  </tr>
  </table>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { IonCard } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    IonButton,
    Swiper,
    SwiperSlide,
    IonCard,
  },
  inject: ['prog_now'],
  setup() {
    return {
        chevronForwardOutline,
        chevronBackOutline,
        modules: [Autoplay]
    }
  },
});
</script>

<style scoped>
.table_margin {
  width: var(--mr-side-margin);
  margin: 0 auto;
}
ion-card {
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  margin: 0 auto;
}
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
h4 {
  font-size: 12px;
  line-height: 15px;
}
.titulo {
  text-align: left;
  max-width: 99%;
  height: 20px;
  margin: 0;
}
</style>