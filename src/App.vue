<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MrMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import MrMenu from './views/MrMenu.vue'

async function fetch_userdata() {
  const response = await fetch("https://www.mundorecicladores.com.br/_functions/userdata");
  const json = await response.json();
  console.log("json", json);
  return json;
}

function get_prog_now(programacoes) {
  let now = new Date();
  let margin_min = 10;
  let prog_now: any[] = [];
  let prog_now_chunked: any[] = [];

  for (var i = 0; i < programacoes.length; i++) {
      let prog = programacoes[i];
      let inicio = new Date(prog.inicio);
      inicio.setMinutes(inicio.getMinutes() - margin_min)
      let fim = new Date(prog.inicio)
      fim.setMinutes(fim.getMinutes() + prog.duracao_min + margin_min)

      //console.log("Analisando", prog, inicio.toLocaleString(), fim.toLocaleString(), now.toLocaleString(), now > inicio, now < fim);
      if (now > inicio && now < fim) {
        prog_now.push(prog);
      }
  }

  // Group by chunk of 3
  let chunk_size = 3;
  for (i = 0; i < Math.ceil(prog_now.length/chunk_size); i++) {
    let chunk: any[] = [];
    for (var j = 0; j < chunk_size && i * chunk_size + j < prog_now.length; j++) {
      chunk.push(prog_now[i * chunk_size + j]);
    }
    prog_now_chunked.push(chunk);
  }
  return prog_now_chunked;
}

export default defineComponent({
  name: 'App',
  components: {
    MrMenu,
    IonRouterOutlet, 
    IonSplitPane,
  },
  data() {
    return {
      data_content: {
        user: {
          pts: 0,
          nivel: 0,
          tot_kg: 0,
        },
        coleta: [],
        noticias: [],
        programacao: [],
        mapa: [],
        ads: [],
      },
      prog_now: [{}],
    }
  },
  provide() {
    return {
      data_content: computed(() => this.data_content),
      prog_now: computed(() => this.prog_now)
    }
  },
  async mounted () {
    this.data_content = await fetch_userdata();
    setInterval(async () => {
      this.data_content = await fetch_userdata();
    }, 3000);

    this.prog_now = get_prog_now(this.data_content.programacao);
    setInterval(() => {
      this.prog_now = get_prog_now(this.data_content.programacao);
    }, 3000)
  }
});
</script>