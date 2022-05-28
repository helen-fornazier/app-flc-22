<template>
  <MrCard>
    <div class=card-header>Minha Reciclagem</div>
    <div class="total-kg">Você já reciclou 10kg</div>
    <hr />

    <ion-content scroll="true">
    <table>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
        <tr>
            <td class="date">Qua 17:30</td>
            <td class="quantity"><span>300g</span></td>
        </tr>
    </table>
    </ion-content>

    <hr />

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
  inject: ["fastdata"],
});
</script>

<style scoped>
ion-content {
    max-height: 300px;
    min-height: 100px;
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
.total-kg {
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
hr {
  height: 1px;
  padding: 0;
  margin: 0;
  margin-inline: 20px;
  background-color: var(--ion-background-color);
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
  height: 40px;
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