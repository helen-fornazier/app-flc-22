<template>

  <div class=container_box>
  <table style="width:100%">
  <tr>
    <th class=backarrow>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
    </th>

    <th class=card>
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

    <th class=forwardarrow>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
    </th>
  </tr>
  </table>
  </div>

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
.container_box {
  position: relative;
}
.backarrow {
  width: 40px;
  margin: 0;
}
.card {
  margin: 0;
}
.forwardarrow {
  width: 40px;
  margin: 0;
}
ion-card {
  background-color: white;
  border-radius: 8px;
  margin: 0;
}
ion-button {
  position: relative;
  top: 35%;
  width: 40px;
  margin: 0;
}
p {
  font-size: 15px;
  line-height: 25px;
  text-align: left;
}
table {
  table-layout:fixed;
}

</style>