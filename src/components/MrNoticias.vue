<template>
  <table>
      <tr>
        <th class=table_margin></th>

        <th>
          <div class=titulo><h4>Ultimas atualizações</h4></div>
        </th>

        <th class=table_margin></th>
      </tr>

      <tr>
        <th></th>
        <th>
            <ion-list>
            <ion-item slots=start>
                <ion-label>Show Racionais mudou de palco</ion-label>
            </ion-item>

            <ion-item slots=start>
                <ion-label>Show Racionais mudou de palco</ion-label>
            </ion-item>

            <ion-item slots=start>
                <ion-label>Show Racionais mudou de palco</ion-label>
            </ion-item>
            </ion-list>
        </th>
        <th></th>
      </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonList, IonItem, IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'MrRank',
  components: {
    IonList,
    IonItem,
  },
});
</script>

<style scoped>
h4 {
  font-size: 12px;
  line-height: 15px;
}
.titulo {
  text-align: left;
  max-width: 99%;
  height: 20px;
  margin: 0;
}
table {
  width: 100%;
  margin: 0;
}
.table_margin {
  width: 30px;
  margin: 0 auto;
}
ion-list {
    margin: 0;
}
ion-item {
    margin: 0;
}
</style>