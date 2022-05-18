<template>
    <div class="container">
        <ion-card>
            <slot></slot>
        </ion-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'MrCard',
  components: {
    IonCard,
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
</style>