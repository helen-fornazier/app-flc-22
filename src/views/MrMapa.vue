<template>
  <ion-page>
    <div id="container">
    <MrHeader />

    <ion-content :fullscreen="true" :scroll-x="true" :scroll-y="true">
    <div id="container_view">
        <ion-img :src="mapa"></ion-img>
    </div>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/vue';
import MrHeader from '@/components/MrHeader.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrHeader,
    IonImg,
  },
  setup() {
    const mapa = computed(() => require('@/assets/mapa-teste.png'));
    return {
        mapa,
    };
  },
});
</script>

<style scoped>
ion-content {
  --padding-bottom: 0;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
#container_view {
  width: 1000px;
  margin: auto;
}
.separator {
  width: 100%;
  height: 20px;
}
</style>