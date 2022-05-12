<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MrMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import MrMenu from './views/MrMenu.vue'

async function fetch_userdata() {
  const response = await fetch("https://www.mundorecicladores.com.br/_functions/userdata");
  const json = await response.json();
  console.log("json", json);
  return json;
}

export default defineComponent({
  name: 'App',
  components: {
    MrMenu,
    IonRouterOutlet, 
    IonSplitPane,
  },
  data() {
    return {
      data_content: {
        user: {
          pts: 0,
          nivel: 0,
          tot_kg: 0,
        },
        coleta: [],
        noticias: [],
        programacao: [],
        mapa: [],
      }
    }
  },
  provide() {
    return {
      data_content: computed(() => this.data_content)
    }
  },
  async mounted () {
    this.data_content = await fetch_userdata();
    setInterval(async () => {
      this.data_content = await fetch_userdata();
    }, 3000)
  }
});
</script>