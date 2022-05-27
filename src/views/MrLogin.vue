<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div class="metade primeira-metade ">
      <span class="bem-vindo-title">Bem Vind@!</span>
      <span class="bem-vindo-texto">Preencha os campos de telefone para ter informações do evento</span>
    </div>
    <div class="metade segunda-metade">
      <div class="horizontal-size-limit">
        <form>
            <!-- Inputs with labels -->
            <ion-item class="telefone-item">
              <ion-label class="telefone-title" position="stacked" color="primary">Telefone</ion-label>
              <ion-input type="text" v-model="telefone" placeholder="Insira o telefone aqui"></ion-input>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox></ion-checkbox>
              <ion-label>Condordo com o <a href="https://mundorecicladores.com.br">termo de uso</a> </ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox></ion-checkbox>
              <ion-label>Condordo com a <a href="https://mundorecicladores.com.br">politica de privacidade</a> </ion-label>
            </ion-item>
            <ion-button @click="submit">Entrar</ion-button>
        </form>
      </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, IonItem, IonInput, IonLabel, IonCheckbox } from '@ionic/vue';

export default defineComponent({
  name: 'MrLogin',
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonLabel,
    IonCheckbox,
  },
  emits: ["telefone"],
  data() {
      return {
          telefone: ""
      }
  },
  methods: {
      submit() {
          this.$emit('telefone', this.telefone);
      }
  }
});
</script>

<style scoped>
.metade {
  width: 100%;
  height: 50%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px;
}
.primeira-metade {
  background-color: var(--ion-color-primary);
  justify-content: flex-end;
}
.segunda-metade {
  background-color: var(--ion-color-primary-contrast);
  justify-content: flex-start;
}
.horizontal-size-limit {
  max-width: 700px;
}
.bem-vindo-title {
  color: var(--ion-color-primary-contrast);
  font-weight: bold;
  font-size: 30px;
}
.bem-vindo-texto {
  color: var(--ion-color-primary-contrast);
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 22px;
}
ion-item {
  --background: var(--ion-color-primary-contrast);
  font-size: 10px;
  padding: 0;
  margin: 0;
}
ion-checkbox {
  margin-right: 10px;
  --border-width: 0px;
}
ion-button {
  margin-top: 50px;
  width: 200px;
}
.telefone-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}
.telefone-item {
  margin-bottom: 15px;
}

</style>