<template>

  <table>
  <tr>
    <th class="table_margin">
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
    </th>

    <th>
      <ion-card>
      <swiper>
        <swiper-slide>
            <p>21h30&nbsp;    Palco Azul&nbsp;  O grande encontro<br />
               22h30&nbsp;    Palco Lago&nbsp;  Baianasystem<br />
               23h30&nbsp;    Palco Forró&nbsp; Mariana Aydar</p>
          </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    IonButton,
    Swiper,
    SwiperSlide,
    IonCard,
  },
  setup() {
    return {
        chevronForwardOutline,
        chevronBackOutline,
    };
  },
});
</script>

<style scoped>
.table_margin {
  width: 20px;
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
  left: -10px;
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