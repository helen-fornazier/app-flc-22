<template>
  <div>
  <table style="width:100%">
  <tr>
    <th class=backarrow>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronBackOutline></ion-icon>
    </ion-button>
    </th>


    <th class=card>
      <ion-card>
        bla<br/>
        bla<br/>
        bla<br/>
        <ion-slides>
        </ion-slides>
      </ion-card>
    </th>

    <th class=forwardarrow>
    <ion-button shape=round size=small fill=clear>
        <ion-icon :icon=chevronForwardOutline></ion-icon>
    </ion-button>
    </th>
  </tr>
  </table>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { IonCard, IonSlides, IonSlide } from '@ionic/vue';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    IonButton,
    IonCard,
    IonSlides,
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
.backarrow {
  background-color: green;
  width: 40px;
}
.card {
  background-color: red;
  max-width: 99%;
}
.forwardarrow {
  background-color: blue;
  width: 40px;
}
ion-card {
  background-color: white;
  border-radius: 8px;
}
ion-button {
  position: relative;
  top: 35%;
  background-color: black;
  width: 40px;
  margin: 0;
}
p {
  font-size: 15px;
  line-height: 25px;
  text-align: left;
}
</style>