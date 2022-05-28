<template>
  <ion-page>
    <div id="container">

    <ion-content :fullscreen="true">
    <div id="container_view">
              <MrMiniPerfil />
              <MrLineup />
              <MrComoChegar />
              <MrAds />
              <MrNoticias />
    </div>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import MrLineup from '@/components/MrLineup.vue'
import MrComoChegar from '@/components/MrComoChegar.vue'
import MrAds from '@/components/MrAds.vue'
import MrNoticias from '@/components/MrNoticias.vue'
import MrMiniPerfil from '@/components/MrMiniPerfil.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrLineup,
    MrComoChegar,
    MrAds,
    MrNoticias,
    MrMiniPerfil,
  }
});
</script>

<style scoped>
ion-content {
  --padding-bottom: -100%;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
#container_view {
  max-width: 700px;
  margin: auto;
}
.separator {
  width: 100%;
  height: 20px;
}
</style>