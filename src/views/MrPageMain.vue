<template>
  <ion-page>
    <div id="container">
    <MrHeader />

    <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col>
              <MrLineup />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <MrComoChegar />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <MrAds />
            </ion-col>
          </ion-row>
            <ion-row>
            <ion-col>
              <MrNivel />
            </ion-col>
            <ion-col>
              <MrRank/>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <MrNoticias />
            </ion-col>
          </ion-row>
        </ion-grid>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonGrid, IonCol, IonRow } from '@ionic/vue';
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
    IonGrid,
    IonCol,
    IonRow,
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