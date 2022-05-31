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
              <ion-button shape=round fill=clear size=small>
                  <ion-icon :icon=mapOutline fill=clear></ion-icon>
              </ion-button>
              <p>Mapa</p>
            </ion-col>

            <ion-col>
              <ion-button shape=round fill=clear size=small>
                  <ion-icon :icon=restaurantOutline></ion-icon>
              </ion-button>
              <p>Restaurantes</p>
            </ion-col>

            <ion-col>
              <ion-button shape=round fill=clear size=small>
                  <ion-icon :icon=constructOutline></ion-icon>
              </ion-button>
              <p>Oficinas</p>
            </ion-col>

            <ion-col>
              <ion-button shape=round fill=clear size=small>
                  <ion-icon :icon=triangleOutline></ion-icon>
              </ion-button>
              <p>Camping</p>
            </ion-col>


            <ion-col>
              <ion-button shape=round fill=clear size=small>
                  <ion-icon :icon=maleFemaleOutline></ion-icon>
              </ion-button>
              <p>Banheiros</p>
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
import { mapOutline, restaurantOutline, constructOutline, triangleOutline, maleFemaleOutline } from 'ionicons/icons';

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
        maleFemaleOutline,
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
  font-size: 8px;
  line-height: 10px;
  font-weight: normal;
}
ion-button {
  margin: 0;
  padding: 0;
  --background: var(--ion-color-primary);
  width: 50px;
  height: 50px;
}
ion-icon {
  color: var(--ion-color-primary-contrast);
}
.table_margin {
  width: var(--mr-side-margin);
  margin: 0;
}
.titulo {
  text-align: left;
  max-width: 99%;
  height: 20px;
  margin: 0;
  font-weight: bold;
}
table {
  width: 100%;
  margin: 0;
  padding: 0;
}
ion-grid {
  padding-inline: 0;
}
ion-row {
  padding-inline: 0;
}
ion-col {
  padding-inline: 0;
}
</style>