<template>
  <div class=container_box>

  <table>
      <tr class="first_row">
        <th class=table_margin></th>
        <th>
          <div class=div_como_chegar><h4>Como chegar</h4></div>
        </th>
        <th class=table_margin></th>
      </tr>

      <tr>
        <th></th>
        <th>

      <ion-grid>
        <ion-row>

          <ion-col>
            <ion-button size=default>
                <ion-icon :icon=mapOutline></ion-icon>
            </ion-button>
            <p>Mapa</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon :icon=restaurantOutline></ion-icon>
            </ion-button>
            <p>Restaurantes</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon slot="icon-only" :icon=constructOutline></ion-icon>
            </ion-button>
            <p>Oficinas</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon :icon=triangleOutline></ion-icon>
            </ion-button>
            <p>Camping</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon :icon=mapOutline></ion-icon>
            </ion-button>
            <p>Mapa</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon :icon=restaurantOutline></ion-icon>
            </ion-button>
            <p>Restaurantes</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
                <ion-icon slot="icon-only" :icon=constructOutline></ion-icon>
            </ion-button>
            <p>Oficinas</p>
          </ion-col>

          <ion-col>
            <ion-button size=default>
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
  </div>
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
ion-icon {
  color: #7aab2c;
}
ion-button {
  --background: white;
}
ion-grid {
  background-color: #7aab2c;
}
.table_margin {
  width: 40px;
  background-color: blue;
  margin: 0 !important;
}
.div_como_chegar {
  text-align: left;
  background-color: purple;
  max-width: 99%;
  height: 20px !important;
  margin: 0 !important;
}
table {
  width: 100%;
  table-layout:fixed;
  margin: 0 !important;
}
.first_row {
  background-color: yellow;
}
</style>