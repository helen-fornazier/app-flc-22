<template>
  <table>
      <tr>
        <th class=table_margin></th>
        <th>
          <div class=titulo><h4>Como chegar</h4></div>
        </th>
        <th class=table_margin></th>
      </tr>

      <tr>
        <th></th>

        <th>
        <ion-grid>
          <ion-row>

            <ion-col>
              <ion-button fill=clear>
                  <ion-icon :icon=mapOutline fill=clear></ion-icon>
              </ion-button>
              <p>Mapa</p>
            </ion-col>

            <ion-col>
              <ion-button fill=clear>
                  <ion-icon :icon=restaurantOutline></ion-icon>
              </ion-button>
              <p>Restaurantes</p>
            </ion-col>

            <ion-col>
              <ion-button fill=clear>
                  <ion-icon :icon=constructOutline></ion-icon>
              </ion-button>
              <p>Oficinas</p>
            </ion-col>

            <ion-col>
              <ion-button fill=clear>
                  <ion-icon :icon=triangleOutline></ion-icon>
              </ion-button>
              <p>Camping</p>
            </ion-col>

          </ion-row>
        </ion-grid>
        </th>

        <th></th>
      </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { IonGrid, IonCol, IonRow,  IonNote } from '@ionic/vue';
import { mapOutline, restaurantOutline, constructOutline, triangleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
  },
  setup() {
    return {
        mapOutline,
        restaurantOutline,
        constructOutline,
        triangleOutline,
    };
  },
});
</script>

<style scoped>
h4 {
  font-size: 12px;
  line-height: 15px;
}
p {
  font-size: 12px;
  line-height: 15px;
}
ion-button {
  --background: white;
}
.table_margin {
  width: 20px;
  margin: 0;
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
</style>