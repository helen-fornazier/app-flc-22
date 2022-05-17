<template>
    <div class=titulo><h4>Ultimas atualizações</h4></div>
    <ion-grid>
      <ion-row v-for="noticia in fastdata.noticias" :key="noticia.id">
        <ion-col>
        <MrCard>
          <p>{{ noticia.data }}: {{ noticia.titulo }} <br/>
          {{ noticia.descricao }}</p>
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
  inject: ['fastdata'],
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
  margin-left: var(--mr-side-margin)
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
</style>