<template>
  <table>
      <tr>
        <th class=table_margin></th>

        <th>
          <div class="mr-button">
          <ion-card>
              <h1>Nível</h1>
          </ion-card>
          </div>
        </th>

        <th class="button_margin">
        </th>

        <th>
          <div class="mr-button">
          <ion-card>
              <h1>Rank</h1>
          </ion-card>
          </div>
        </th>

        <th class=table_margin></th>
      </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'MrButtons',
  components: {
    IonCard,
  },
});
</script>

<style scoped>
ion-card {
  background-color: var(--ion-color-primary-contrast);
  border-radius: 8px;
  margin: 0;
  width: 100%;
  padding-top: 40%;
}
.table_margin {
  width: 30px;
  margin: 0 auto;
}
table {
  width: 100%;
  margin: 0;
}
.button_margin {
  width: 20px;
}
</style>