<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <form>
        <input type="text" v-model="telefone"> 
        <button type="submit" @click="submit">Submit</button>
    </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';

export default defineComponent({
  name: 'MrLogin',
  components: {
    IonContent,
    IonPage,
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
</style>