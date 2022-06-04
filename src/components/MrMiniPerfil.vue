<template>
    <MrCard>
        <div class=content>
            <div class="icon">
                <div class="chart"><MrProgress /></div>
                <div class="circle">
                    <ion-icon :icon=personOutline fill=clear></ion-icon>
                </div>
            </div>
            <div class="text">
                <p>
                    <span class="perfil-text"><b>Olá, {{ user.nome }}</b> - Tel. {{ user.tel }}</span><br>
                    <span class="nivel-text"><b>nível {{ user.nivel }} - {{ user.titulo }}</b></span>
                </p>
            </div>
        </div>
    </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { personOutline } from 'ionicons/icons';
import MrProgress from '@/components/MrProgress.vue';
import MrCard from '@/components/MrCard.vue';

export default defineComponent({
  name: 'MrMiniPerfil',
  components: {
    IonIcon,
    MrProgress,
    MrCard,
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
  color:  var(--ion-color-primary-contrast);
  --ionicon-stroke-width: 50px;
  height: 100%;
  width: 50%;
}
.text {
  text-align: left;
  margin-left: 10px;
}
.perfil-text {
  font-size: 10px;
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
.circle {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 50px;
  background-color: var(--ion-color-primary);
  border-radius: 50%;
}
</style>