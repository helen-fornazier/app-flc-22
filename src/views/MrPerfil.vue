<template>
  <ion-page>
    <div id="container">

    <ion-content :fullscreen="true">
    <div id="container_view">
              <MrPerfilCard />
              <MrMeuImpacto />
              <MrColeta />
              <MrBeneficios />
              <MrSair/>
    </div>
    </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, } from '@ionic/vue';
import MrPerfilCard from '@/components/MrPerfilCard.vue'

export default defineComponent({
  name: 'MrPageMain',
  components: {
    IonContent,
    IonPage,
    MrPerfilCard,
  }
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
  max-width: 700px;
  margin: auto;
}
.separator {
  width: 100%;
  height: 20px;
}
</style>