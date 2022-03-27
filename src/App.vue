<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MrMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import MrMenu from './views/MrMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    MrMenu,
    IonRouterOutlet, 
    IonSplitPane,
  },
});
</script>