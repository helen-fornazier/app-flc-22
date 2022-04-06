<template>
    <ion-header :translucent="true">
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>

        <ion-title size=small><b>Nível 0 - Recicla pontos</b></ion-title>

        <ion-buttons slot="end">
          <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
        </ion-buttons>
      </ion-toolbar>

    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mundo Recicladores</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';

export default defineComponent({
  name: 'MrHeader',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonIcon,
  },
  setup() {
    return {
      personCircle,
    };
  },
});
</script>

<style scoped>
ion-toolbar {
  --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
}
ion-menu-button {
  --color: var(--ion-color-primary-contrast)
}
</style>