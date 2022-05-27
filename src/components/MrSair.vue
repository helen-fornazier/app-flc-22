<template>
  <MrCard>
    <ion-button href="/" @click="this.bus.emit('logout')" fill="clear">Sair</ion-button>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
import MrCard from '@/components/MrCard.vue';

export default defineComponent({
  name: 'MrSair',
  components: {
    IonButton,
    MrCard,
  },
  inject: ["bus"],
});
</script>

<style scoped>
ion-button {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>