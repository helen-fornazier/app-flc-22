<template>
  <ion-page>
    <div id="container">
    <MrHeader />

    <ion-content :fullscreen="true">
    <div id="container_view">
              <div class="separator"></div>
              <MrLineup />
              <MrComoChegar />
              <MrAds />
              <div class="separator"></div>
              <MrButtons />
              <div class="separator"></div>
              <MrNoticias />
    </div>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import MrHeader from '@/components/MrHeader.vue'
import MrLineup from '@/components/MrLineup.vue'
import MrComoChegar from '@/components/MrComoChegar.vue'
import MrAds from '@/components/MrAds.vue'
import MrButtons from '@/components/MrButtons.vue'
import MrNoticias from '@/components/MrNoticias.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrHeader,
    MrLineup,
    MrComoChegar,
    MrAds,
    MrButtons,
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
#container_view {
  max-width: 500px;
  margin: auto;
}
.separator {
  width: 100%;
  height: 20px;
}
</style>