<template>
    <h1>Como chegar</h1>
    <div>
    <ion-button size=default>
        <ion-icon :icon=mapOutline></ion-icon>
    </ion-button>
    <p>Mapa</p>
    </div>
    <div>
    <ion-button size=default>
        <ion-icon :icon=restaurantOutline></ion-icon>
    </ion-button>
    <p>Restaurantes</p>
    </div>
    <div>
    <ion-button size=default>
        <ion-icon slot="icon-only" :icon=constructOutline></ion-icon>
    </ion-button>
    <p>Oficinas</p>
    <ion-button size=default>
        <ion-icon :icon=triangleOutline></ion-icon>
    </ion-button>
    <p>Camping</p>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { mapOutline, restaurantOutline, constructOutline, triangleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    IonButton,
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
h1 {
  font-size: 15px;
  line-height: 15px;
}
p {
  font-size: 15px;
  line-height: 15px;
}
ion-icon {
  color: #7aab2c;
}
ion-button {
    --background: white;
}
</style>