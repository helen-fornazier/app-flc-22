<template>
    <MrCard>
        <div class=content>
            <div class="icon">
                <div class="chart"><MrProgress /></div>
                <ion-button shape=round fill=clear size=small>
                    <ion-icon :icon=personOutline fill=clear></ion-icon>
                </ion-button>
            </div>
            <div class="text">
                <p>
                    <span class="perfil-text"><b>Olá, {{ fastdata.user.nome }}</b> - Tel. {{ fastdata.user.tel }}</span><br>
                    <span class="nivel-text"><b>nível {{ fastdata.user.nivel }} - {{ fastdata.user.titulo }}</b></span>
                </p>
            </div>
        </div>
    </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { personOutline } from 'ionicons/icons';
import MrProgress from '@/components/MrProgress.vue';
import MrCard from '@/components/MrCard.vue';

export default defineComponent({
  name: 'MrMiniPerfil',
  components: {
    IonIcon,
    IonButton,
    MrProgress,
    MrCard,
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
.content {
  align-items: center;
  justify-content: left;
  display: flex;
  padding-left: 10px;
  width: 100%;
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
  z-index: 20;
  font-size: 64px;
  --ionicon-stroke-width: 50px;
}
.text {
  text-align: left;
  margin-left: 10px;
}
.perfil-text {
  font-size: 8px;
  font-weight: normal;
}
.icon {
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
}
.chart {
  height: 70px;
  width: 70px;
  position: absolute;
  top: 0;
  z-index: 60;
}
</style>