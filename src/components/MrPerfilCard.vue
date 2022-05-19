<template>
  <MrCard>
    <div class=card-header></div>
    <div class="icon">
        <ion-button shape=round fill=clear size=small>
            <ion-icon :icon=personOutline fill=clear></ion-icon>
        </ion-button>
    </div>
    <span class="main-text">{{ fastdata.user.nome}}, você está no nível {{ fastdata.user.nivel }}</span>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import MrCard from '@/components/MrCard.vue';
import MrProgress from '@/components/MrProgress.vue';
import { personOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrPerfilCard',
  components: {
    MrCard,
    IonButton,
    IonIcon,
  },
  inject: ["fastdata"],
  setup() {
    return {
      personOutline,
    }
  }
});
</script>

<style scoped>
.card-header {
  height: 40px;
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  width: 100%;
}
span {
    font-size: 20px;
    color: var(--ion-color-primary);
    font-weight: bold;
}
ion-button {
  margin: 0;
  padding: 0;
  --background: var(--ion-background-color);
  width: 60px;
  height: 60px;
  position: relative;
  top: -30px
}
ion-icon {
  color: var(--ion-color-primary);
  z-index: 20;
  font-size: 64px;
  --ionicon-stroke-width: 50px;
}
.icon {
  height: 40px;
}
</style>