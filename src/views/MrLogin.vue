<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div class="metade primeira-metade ">
      <ion-icon @click="show_info" slot="icon-only" :icon="helpCircleOutline" fill=clear></ion-icon>
      <span class="bem-vindo-title">Boas Vindas!</span>
      <span class="bem-vindo-texto">Preencha os campos de telefone para ter informações do evento</span>
    </div>
    <div class="metade segunda-metade">
      <div class="horizontal-size-limit">
        <form action="javascript:void(0);" @submit="submit">
            <!-- Inputs with labels -->
            <ion-item class="telefone-item">
              <ion-label class="telefone-title" position="stacked" color="primary">Telefone</ion-label>
              <ion-input
                        autocomplete="on" autofocus="true" clear-input="true"
                        pattern="([0-9]{10}[0-9]?)" inputmode="numeric" maxlength="11" minlength="10"
                        enterkeyhint="next" required="true" type="tel"
                        v-model="telefone" placeholder="Insira o telefone aqui"></ion-input>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox enterkeyhint="next" required="true" v-model="check_term"></ion-checkbox>
              <ion-label>Condordo com o <a href="https://www.mundorecicladores.com.br/termos-flc22">termo de uso</a> </ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-checkbox enterkeyhint="next" required="true" v-model="check_priv"></ion-checkbox>
              <ion-label>Condordo com a <a href="https://www.mundorecicladores.com.br/termos-flc22">politica de privacidade</a> </ion-label>
            </ion-item>
            <ion-button type="submit">Entrar</ion-button>
        </form>
        <a class="pular" v-on:click="this.$emit('telefone', '00000000000')">Pular</a>
      </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, IonItem, IonInput, IonLabel, IonCheckbox, IonButton, IonIcon, alertController } from '@ionic/vue';
import { helpCircleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'MrLogin',
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonLabel,
    IonCheckbox,
    IonButton,
    IonIcon,
  },
  emits: ["telefone"],
  data() {
      return {
          telefone: "",
          check_term: false,
          check_priv: false,
      }
  },
  setup() {
    return {
        helpCircleOutline,
    }
  },
  methods: {
      submit() {
          if (!this.telefone || !this.check_term || !this.check_priv)
            return false;
          this.$emit('telefone', this.telefone);
          console.log("Login");
          return true;
      },
      async show_info() {
        const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Por que precisamos do seu telefone?',
            message: 'Durante o evento, vamos identificar a sua reciclagem pelo seu telefone, onde você pode ganhar prêmios e brindes, além de contribuir com a natureza! Usaremos o seu telefone para informá-lo também dos brindes que ganharam e outras eventuais informações sobre o evento. Mais detalhes nos nossos termos de uso e política de privacidade.',
            buttons: ['OK'],
          });
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      },
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
  height: 45%;
  background-color: var(--ion-color-primary);
  justify-content: flex-end;
}
.segunda-metade {
  height: 55%;
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
  font-size: 12px;
  padding: 0;
  margin: 0;
}
ion-checkbox {
  margin-right: 10px;
  --border-width: 0px;
}
ion-button {
  margin-top: 30px;
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
ion-icon {
  color: var(--ion-color-primary-contrast);
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 50px;
  margin: 30px;
}
.pular {
  position: relative;
  top: 30px;
}

</style>