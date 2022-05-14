<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="inicio" href="/tabs/inicio">
          <ion-icon :icon="homeOutline" />
          <ion-label>Início</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="guia" href="/tabs/guia">
          <ion-icon :icon="mapOutline" />
          <ion-label>Guia Digital</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="perfil" href="/tabs/perfil">
          <ion-icon :icon="personOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, mapOutline, personOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      homeOutline,
      mapOutline,
      personOutline,
    }
  }
});
</script>

<style scoped>
ion-tab-bar {
  --background: var(--ion-color-primary-contrast);
}
</style>