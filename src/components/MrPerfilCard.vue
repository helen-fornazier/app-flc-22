<template>
  <MrCard>
    <div class=card-header></div>
    <div class="icon">
        <div class="circle">
            <ion-icon :icon=personOutline fill=clear></ion-icon>
        </div>
    </div>
    <div class="main-text"><span>{{ user.nome}}, você está no nível {{ user.nivel }}</span></div>
    <div class="horizontal">
        <div class="progress">
            <div class="chart"><MrProgress /></div>
            <ion-button class="progress-button" shape=round fill=clear size=small>
                <div class="vertical">
                <span class="pts">{{ this.user.pts }}</span>
                <span class="nivel-pts">/{{ this.user.proximo_nivel }}</span>
                </div>
            </ion-button>
        </div>
        <div class="progress-text">Alcance o próximo nível acumulando mais {{ this.user.proximo_nivel - this.user.pts }} pontos.</div>
    </div>
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
    MrProgress,
  },
  inject: ["user"],
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
.pts {
  font-size: 25px;
  color: var(--ion-color-primary);
  font-weight: bold;
  margin: 0;
  padding: 0;
  letter-spacing: 0px;
}
.nivel-pts {
  font-size: 10px;
  margin: 0;
  padding: 0;
  letter-spacing: 0px;
}
ion-button {
  margin: 0;
  padding: 0;
  --background: var(--ion-background-color);
  color: var(--ion-color-medium);
}
.progress-button {
  width: 70px;
  height: 70px;
  position: relative;
}
ion-icon {
  color:  var(--ion-color-primary);
  --ionicon-stroke-width: 50px;
  height: 100%;
  width: 50%;
}
.circle {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 50px;
  background-color: var(--ion-background-color);
  border-radius: 50%;
  position: absolute;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.main-text {
  width: 100%;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 20px;
  color: var(--ion-color-primary);
  font-weight: bold;
}
.progress {
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
}
.progress-text {
  position: relative;
  text-align: left;
  padding-inline: 30px;
  margin-left: 25px;
  font-size: 12px;
}
.vertical {
  display: flex;
  flex-direction: column;
}
.horizontal {
  align-items: center;
  justify-content: left;
  display: flex;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 20px;
}
.chart {
  height: 90px;
  width: 90px;
  position: absolute;
  top: -15px;
  z-index: 60;
}
</style>