<template>
    <ion-card>
        <ion-slides>
            <ion-slide>
                <p>Texto teste 1</p>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 2</p>
            </ion-slide>
            <ion-slide>
                <p>Texto teste 3</p>
            </ion-slide>
        </ion-slides>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonSlides, IonSlide } from '@ionic/vue';

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonCard,
    IonSlides,
    IonSlide,
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
</style>