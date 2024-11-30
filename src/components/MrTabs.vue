<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="inicio" href="/tabs/inicio" style="width: 25%;">
          <ion-icon :icon="homeOutline" />
          <ion-label>Início</ion-label>
        </ion-tab-button>

        <a :href="'tabs/img?img=' + mapas['recicladores']" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; width: 25%;">
          <ion-icon :icon="mapOutline" style="width: 22px; height: 22px; color: gray;" />
          <ion-label style="font-size: 12px; color: gray;">Mapa</ion-label>
        </a>

        <ion-tab-button tab="guia" href="/tabs/guia" style="width: 25%;">
          <ion-icon :icon="bookOutline" />
          <ion-label>Guia Digital</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="help" href="/tabs/help" style="width: 25%;">
          <ion-icon :icon="helpCircleOutline" />
          <ion-label>Como Funciona?</ion-label>
        </ion-tab-button>
<!--         
        <ion-tab-button tab="perfil" href="/tabs/perfil">
          <ion-icon :icon="personOutline" />
          <ion-label>Minha Área</ion-label>
        </ion-tab-button> -->

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, mapOutline, personOutline, bookOutline, helpCircleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  inject: ["mapas"],
  setup() {
    return {
      homeOutline,
      mapOutline,
      personOutline,
      bookOutline,
      helpCircleOutline
    }
  }
});
</script>

<style scoped>
ion-tab-bar {
  --background: var(--ion-color-primary-contrast);
}
</style>