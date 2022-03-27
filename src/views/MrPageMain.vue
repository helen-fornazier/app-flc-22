<template>
  <ion-page>
    <MrHeader />

    <ion-content :fullscreen="true">
      <MrLineup />
      <MrComoChegar />
      <MrAds />
      <MrNivel />
      <MrRanking />
      <MrNoticias />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import MrHeader from '../components/MrHeader.vue'
import MrLineup from '../components/MrLineup.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrHeader,
    MrLineup,
  }
});
</script>