<template>
    <div class=titulo><h4>Ultimas atualizações</h4></div>
    <ion-grid>
      <ion-row v-for="noticia in noticias" :key="noticia.id">
        <ion-col>
          <MrCard>
            <div class=card-header>

              <table>
                  <tr>
                      <td class="date">{{ noticia.data }}</td>
                      <td class="news_titulo"><span>{{ noticia.titulo }}</span></td>
                  </tr>
              </table>

            </div>
            <div class="descricao" v-html="noticia.descricao"></div>
          </MrCard>
        </ion-col>
          </ion-row>
      </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import MrCard from '@/components/MrCard.vue';

export default defineComponent({
  name: 'MrRank',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    MrCard,
  },
  inject: ['noticias'],
});
</script>

<style scoped>
h4 {
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
}
.titulo {
  text-align: left;
  max-width: 99%;
  height: 20px;
  margin: 0;
  margin-left: var(--mr-side-margin);
  font-weight: bold;
}
ion-grid {
  --ion-grid-padding: 0;
}
ion-col {
  --ion-grid-column-padding: 0;
}
.card-header {
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  width: 100%;
  font-weight: bold;
}
.descricao {
  font-size: 12px;
  margin: 10px;
  text-align: justify;
}
table {
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
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
.date {
  padding-left: 15px;
  font-size: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.news_titulo {
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.news_titulo span {
    position: relative;
    left: -25px;
}
</style>