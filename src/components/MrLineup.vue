<template>

  <div class="backslidebutton">
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
  </div>

  <div class="card">
    <ion-card>
        <ion-slides>
            <ion-slide>
                <ion-card-content>
                    <p>21h30&nbsp;    Palco Azul&nbsp;  O grande encontro<br />
                       22h30&nbsp;    Palco Lago&nbsp;  Baianasystem<br />
                       23h30&nbsp;    Palco Forró&nbsp; Mariana Aydar</p>
                </ion-card-content>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 2</p>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 3</p>
            </ion-slide>
        </ion-slides>
    </ion-card>
  </div>

  <div class="forwardslidebutton">
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
  </div>

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
.backslidebutton {
    float:left;
    //background:Red;
    width:10%;
    height:115px;
}
.card {
    float:left;
    //background:Green;
    width:80%;
    height:115px;
}
.forwardslidebutton {
    float:right;
    //background:blue;
    width:10%;
    height:115px;
}
ion-card {
  background-color: white;
  height: 100%;
  margin: 0;
  border-radius: 8px;
}
ion-button {
  position: relative;
  top: 35%;
}
p {
  font-size: 15px;
  line-height: 25px;
  text-align: left;
}
</style>