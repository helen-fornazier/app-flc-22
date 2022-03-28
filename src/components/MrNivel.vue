<template>
    <ion-card>
        <h1>Nível</h1>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'MrNivel',
  components: {
    IonCard,
  },
});
</script>

<style scoped>
ion-card {
  background-color: white;
  height: 150px;
  width: 170px;
  border-radius: 8px;
}
</style>