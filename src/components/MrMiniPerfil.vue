<template>
    <div class="container">
      <div class="row">
        <div class="card">
            <div class="icon">
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
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { personOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrMiniPerfil',
  components: {
    IonIcon,
    IonButton,
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
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
.row {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 0 var(--mr-side-margin);
}
.card {
  align-items: center;
  justify-content: left;
  display: flex;
  background-color: var(--ion-color-primary-contrast);
  padding-left: 10px;
  border-radius: 8px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
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
}
.text {
    text-align: left;
    margin-left: 10px;
}
.perfil-text {
  font-size: 8px;
  font-weight: normal;
}
</style>