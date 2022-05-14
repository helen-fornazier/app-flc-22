<template>
  <ion-app>
    <MrLogin v-if="!telefone" @telefone="update_telefone"/>
    <ion-router-outlet v-else/>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonRouterOutlet, IonApp } from '@ionic/vue';
import MrLogin from './views/MrLogin.vue'
import { Storage } from '@ionic/storage';

const store = new Storage();

async function fetch_userdata(url, store_key) {
  //const response = await fetch("https://www.mundorecicladores.com.br/_functions/userdata/" + telefone);
  const response = await fetch(url);
  const json = await response.json();
  console.log("json", json);
  await store.set(store_key, JSON.stringify(json));
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
  if (prog_now_chunked.length == 0)
    return [[{nome: "Nada rolando"}, {nome: "Relaxa"}, {nome: "Curte a natureza"}]];

  return prog_now_chunked;
}

async function retrieve_saveddata(c) {
    // Retrieved saved data
    await store.create();
    //await store.clear();

    let s_tel = await store.get('telefone');
    let s_fastdata = await store.get('fastdata');
    let s_slowdata = await store.get('slowdata');

    if (s_tel)
      c.telefone = s_tel;

    if (s_fastdata) {
      try {
        c.fastdata = JSON.parse(s_fastdata);
      } catch (error) {
        console.log(error);
      }
    }

    if (s_slowdata) {
      try {
        c.slowdata = JSON.parse(s_slowdata);
      } catch (error) {
        console.log(error);
      }
    }
}

async function pool_data(c) {
    const base_url = "https://www.mundorecicladores.com.br/_functions/"

    c.fastdata = await fetch_userdata(base_url + "fastdata/" + c.telefone, "fastdata");
    setInterval(async () => {
      c.fastdata = await fetch_userdata(base_url + "fastdata/" + c.telefone, "fastdata");
    }, 3*1000);

    c.slowdata = await fetch_userdata(base_url + "slowdata/" + c.telefone, "slowdata");
    setInterval(async () => {
      c.slowdata = await fetch_userdata(base_url + "slowdata/" + c.telefone, "fastdata");
    }, 10*1000);
}

export default defineComponent({
  name: 'App',
  components: {
    IonRouterOutlet, 
    IonApp,
    MrLogin,
  },
  data() {
    return {
      telefone: "",
      fastdata: {
        user: {
          nome: '',
          pts: 0,
          nivel: 0,
          tot_kg: 0,
          coleta: [],
        },
        noticias: [],
      },
      slowdata: {
        programacao: [],
        mapa: [],
        ads: [],
      },
      prog_now: [{}],
    }
  },
  provide() {
    return {
      fastdata: computed(() => this.fastdata),
      slowdata: computed(() => this.slowdata),
      prog_now: computed(() => this.prog_now),
    }
  },
  async created() {
    await retrieve_saveddata(this);
    await pool_data(this);

    this.prog_now = get_prog_now(this.slowdata.programacao);
    setInterval(() => {
      this.prog_now = get_prog_now(this.slowdata.programacao);
    }, 1*60*1000)
  },
  methods: {
    update_telefone(tel) {
      this.telefone = tel;
      store.set('telefone', tel);
    },
    logout() {
      this.telefone = '';
      this.fastdata.user = {
        nome: '',
        pts: 0,
        nivel: 0,
        tot_kg: 0,
        coleta: [],
      };
      store.remove('fastdata');
    },
  }
});
</script>