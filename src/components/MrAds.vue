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
            <ion-slides autoplay="400" loop="true" speed="3000">
                <ion-slide>
                    <ion-img :src="ads1"></ion-img>
                </ion-slide>
                <ion-slide>
                    <ion-img :src="ads2"></ion-img>
                </ion-slide>
            </ion-slides>
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
import { defineComponent, computed } from 'vue';
import { IonButton, IonCard, IonSlides, IonSlide, IonIcon, IonImg } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
//import ads1 from '@/assets/ads_exemple.webp'
//import ads2 from '@/assets/ads_exemple2.png'

export default defineComponent({
  name: 'MrAds',
  components: {
    IonCard,
    IonSlides,
    IonSlide,
    IonIcon,
    IonButton,
    IonImg,
  },
  setup() {
    const ads1 = computed(() => require('@/assets/ads_exemple.webp'));
    const ads2 = computed(() => require('@/assets/ads_exemple2.png'));
    return {
        chevronForwardOutline,
        chevronBackOutline,
        ads1,
        ads2,
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
ion-card {
    max-height: 250px;
}

</style>