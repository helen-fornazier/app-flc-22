<template>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
    <ion-card>
        <ion-slides>
            <ion-slide>
                <ion-text>
                    <p>21h30    Palco Azul  O grande encontro<br/>
                    22h30    Palco Lago  Baianasystem<br/>
                    23h30    Palco Forró Mariana Aydar</p>
                </ion-text>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 2</p>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 3</p>
            </ion-slide>
        </ion-slides>
    </ion-card>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonCard, IonSlides, IonSlide, IonIcon } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonCard,
    IonSlides,
    IonSlide,
    IonIcon,
    IonButton,
  },
  setup() {
    return {
        chevronForwardOutline,
        chevronBackOutline,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-card {
  background-color: white;
}
</style>