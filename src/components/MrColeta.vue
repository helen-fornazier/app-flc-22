<template>
  <MrCard>
    <div class=card-header>Minha Reciclagem</div>
    <div class="total">Você já reciclou {{ user.total }}</div>

    <ion-content scroll="true">
    <table>
        <tr v-for="coleta in coletas" :key="coleta.id">
            <td class="date">{{ coleta.data }}</td>
            <td class="quantity"><span>{{ coleta.qtd }}</span></td>
        </tr>
    </table>
    </ion-content>

  </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';
import MrCard from '@/components/MrCard.vue';

export default defineComponent({
  name: 'MrColeta',
  components: {
    MrCard,
    IonContent,
  },
  inject: ["user", "coletas"],
});
</script>

<style scoped>
ion-content {
    max-height: 300px;
    min-height: 125px;
    --background: var(--ion-color-secondary-contrast);
}
.card-header {
  font-size: 12px;
  line-height: 25px;
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  width: 100%;
  font-weight: bold;
}
.total {
  color: var(--ion-color-primary);
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 50px;
}
ion-item {
  text-align: center;
  align-items: center;
  justify-content: center;
  --background: var(--ion-color-secondary-contrast);
}
ion-list {
    background: var(--ion-color-secondary-contrast);
}
.date {
  font-size: 8px;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  font-weight: bold;
  padding-inline: 15px;
  width: 70px;
  height: 32px;
}
table {
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
td {
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
tr {
  border-top: 1px solid var(--ion-background-color);
}
.quantity {
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
span {
    position: relative;
    left: -25px;
}
</style>