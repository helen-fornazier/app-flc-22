<template>
    <div class="container">
        <ion-card>
            <ion-card-content>
            <slot></slot>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardContent } from '@ionic/vue';

export default defineComponent({
  name: 'MrCard',
  components: {
    IonCard,
    IonCardContent,
  },
});
</script>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
ion-card {
  align-items: center;
  justify-content: center;
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  width: 100%;
}
ion-card-content {
  margin: 0;
  padding: 0;
}
</style>