<template>
  <ion-app>
    <ion-router-outlet v-if="is_logged"/>
    <MrLogin v-else @telefone="login"/>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonRouterOutlet, IonApp } from '@ionic/vue';
import MrLogin from './views/MrLogin.vue'
import { Storage } from '@ionic/storage';
import mitt from 'mitt';

const default_app_data = {
  fastdata: {
    simple: {
      user: {
        nome: '',
        tel: '',
        pts: 0,
        nivel: 0,
        proximo_nivel: 0,
        total: "0kg",
        coleta: [],
      },
      noticias: [],
      impactometro: {},
      guia_digital: "assets/guia-digital.png",
      mapas: {},
      ads: [],
    },
    complex: {
      niveis: { ver: 0 },
      programacao: { ver: 0 },
    }
  },
  niveis: {
    ver: 0,
    content: [],
  },
  programacao: {
    ver: 0,
    content: [],
  }
};

function clone_obj(obj: any) {
  // TODO: use structuredClone(), requires node v17
  return JSON.parse(JSON.stringify(obj));
}

async function fetch_obj(url) {
  //const response = await fetch("https://www.mundorecicladores.com.br/_functions/userdata/" + telefone);
  const response = await fetch(url);
  const json = await response.json();
  console.log("json", json);
  return json;
}

export default defineComponent({
  name: 'App',
  components: {
    IonRouterOutlet, 
    IonApp,
    MrLogin,
  },
  data() {
    let app_data = clone_obj(default_app_data);
    return {
      app_data: app_data,
      is_logged: false,
      bus: mitt(),
    }
  },
  provide() {
    return {
      user: computed(() => this.app_data.fastdata.simple.user),
      noticias: computed(() => this.app_data.fastdata.simple.noticias),
      impactometro: computed(() => this.app_data.fastdata.simple.impactometro),
      guia_digital: computed(() => this.app_data.fastdata.simple.guia_digital),
      mapas: computed(() => this.app_data.fastdata.simple.mapas),
      ads: computed(() => this.app_data.fastdata.simple.ads),
      niveis: computed(() => this.app_data.niveis.content),
      programacao: computed(() => this.app_data.programacao.content),
      bus: computed(() => this.bus),
    }
  },
  mounted() {                                                                                                                                                                                                
    this.bus.on("logout", this.logout);                                                                                                                                                                      
  },
  setup() {
    const storage = new Storage();
    const complex_data_keys = ["niveis", "programacao"];
    const storage_keys = complex_data_keys.concat(["fastdata"]);
    const base_url = "https://www.mundorecicladores.com.br/_functions/"
    return {
      storage: storage,
      complex_data_keys: complex_data_keys,
      storage_keys: storage_keys,
      base_url: base_url,
    }
  },
  async beforeCreate(): Promise<void> {
    await this.storage.create();
    //await this.storage.clear();
    for (let data of this.storage_keys) {
      try {
        let s_data = await this.storage.get(data);
        if (s_data) {
            let obj = JSON.parse(s_data);
            this.app_data[data] = obj;
        }
      } catch (error) {
          console.log("Error when loading data from storage", error);
      }
    }
    let user = this.app_data.fastdata.simple.user;
    if (user.tel)
      this.is_logged = true;

    this.get_data_from_server();
    setInterval(this.get_data_from_server, 3*1000)
  },
  methods: {
    async get_data_from_server() {
      let user = this.app_data.fastdata.simple.user;
      let fastdata_url = this.base_url + "fastdata/" + user.tel;
      let fastdata = await fetch_obj(fastdata_url);
      this.storage.set("fastdata", JSON.stringify(fastdata));
      // Update fastdata view
      this.app_data.fastdata = fastdata;

      // check which complex data we need to update
      for (let data of this.complex_data_keys) {
        if (this.app_data[data].ver != this.app_data.fastdata.complex[data].ver) {
          console.log("fetch complex", data, this.app_data[data].ver, this.app_data.fastdata.complex[data].ver);
          await this.fetch_complex_data(data)
        }
      }
    },
    async fetch_complex_data(data) {
      let complexdata_url = this.base_url + "complexdata/" + data;
      let obj = await fetch_obj(complexdata_url);

      this.storage.set(data, JSON.stringify(obj));
      this.app_data[data] = obj;
    },
    login(tel) {
      console.log("Login")
      this.app_data.fastdata.simple.user.tel = tel;
      this.is_logged = true;
    },
    logout(tel) {
      this.is_logged = false;
      this.app_data.fastdata.simple.user = clone_obj(default_app_data.fastdata.simple.user);
      this.storage.set("fastdata", JSON.stringify(this.app_data.fastdata));
    }
  }
});
</script>