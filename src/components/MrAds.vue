<template>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
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
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonCard, IonSlides, IonSlide, IonIcon, IonImg } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import ads1 from '../assets/ads_exemple.webp'
import ads2 from '../assets/ads_exemple2.png'

export default defineComponent({
  name: 'MrAds',
  components: {
    IonCard,
    IonSlides,
    IonSlide,
    IonIcon,
    IonButton,
  },
  setup() {
    return {
        chevronForwardOutline,
        chevronBackOutline,
        ads1,
        ads2,
    };
  },
});
</script>