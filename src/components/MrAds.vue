<template>

  <table>
  <tr>
    <th class=table_margin>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
    </th>

    <th>
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

    <th class=table_margin>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
    </th>
  </tr>
  </table>

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
.table_margin {
  width: 20px;
  margin: 0 auto;
}
ion-card {
  background-color: white;
  border-radius: 8px;
  margin: 0 auto;
  max-height: 250px;
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