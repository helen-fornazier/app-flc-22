<template>
    <ion-list>
    <ion-list-header>
        <ion-label>Últimas atualizações</ion-label>
    </ion-list-header>

    <ion-item>
        <ion-label>Show Racionais mudou de palco</ion-label>
    </ion-item>

    <ion-item>
        <ion-label>Show Racionais mudou de palco</ion-label>
    </ion-item>

    <ion-item>
        <ion-label>Show Racionais mudou de palco</ion-label>
    </ion-item>
    </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonListHeader, IonList, IonItem } from '@ionic/vue';

export default defineComponent({
  name: 'MrRank',
  components: {
    IonList,
    IonListHeader,
    IonItem,
  },
});
</script>