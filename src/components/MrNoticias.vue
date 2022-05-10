<template>
  <table>
      <tr>
        <th class=table_margin></th>

        <th>
          <div class=titulo><h4>Últimas atualizações</h4></div>
        </th>

        <th class=table_margin></th>
      </tr>

      <tr>
        <th></th>

        <th>
        <ion-grid>
          <ion-row><ion-col><ion-card>
          <p>Show Racionais mudou de palco asdf asdf asdf asdfasdfasdf asdfasdf sdfasdfasdf asdfsdfasdf sadfasdfasdf asdfasdfdfdfsdf asdfasdf</p>
          </ion-card></ion-col></ion-row>

          <ion-row><ion-col><ion-card>
          <p>Show Racionais mudou de palco</p>
          </ion-card></ion-col></ion-row>

          <ion-row><ion-col><ion-card>
          <p>Show Racionais mudou de palco</p>
          </ion-card></ion-col></ion-row>
        </ion-grid>
        </th>

        <th></th>
      </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'MrRank',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
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
.table_margin {
  width: var(--mr-side-margin);
  margin: 0 auto;
}
ion-card {
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  margin: 0;
  padding-inline: 10px;
  text-align: left;
}
ion-grid {
  padding: 0;
}
ion-col {
  padding-inline: 0;
}
table {
  width: 100%;
  margin: 0;
  table-layout:fixed;
}
th {
  margin: 0;
}
tr {
  margin: 0;
}
</style>