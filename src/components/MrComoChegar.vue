<template>
      <div class="ion-text-start">
        <h4>Como chegar</h4>
      </div>

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
  position: relative;
  left: 35px;
  top: -10px;
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
  position: relative;
  top: -20px;
  width: 80%;
}
</style>