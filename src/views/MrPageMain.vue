<template>
  <ion-page>
    <div id="container">
    <MrHeader />

    <ion-content :fullscreen="true">
              <MrLineup />
              <MrComoChegar />
              <MrAds />
              <MrNivel />
              <MrRank/>
              <MrNoticias />
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import MrHeader from '../components/MrHeader.vue'
import MrLineup from '../components/MrLineup.vue'
import MrComoChegar from '../components/MrComoChegar.vue'
import MrAds from '../components/MrAds.vue'
import MrNivel from '../components/MrNivel.vue'
import MrRank from '../components/MrRank.vue'
import MrNoticias from '../components/MrNoticias.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrHeader,
    MrLineup,
    MrComoChegar,
    MrAds,
    MrNivel,
    MrRank,
    MrNoticias,
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
</style>