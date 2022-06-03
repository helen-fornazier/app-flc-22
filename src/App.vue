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
import { PushNotifications } from '@capacitor/push-notifications';

const addListeners = async () => {
  await PushNotifications.addListener('registration', token => {
    console.info('Registration token: ', token.value);
  });

  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
  });

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', JSON.stringify(notification));
  });

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }

  await PushNotifications.register();
}

const getDeliveredNotifications = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications();
  console.log('delivered notifications', notificationList);
}

const default_app_data = {
  fastdata: {
    simple: {
      user: {
        nome: 'Forrozeire',
        tel: '',
        pts: 0,
        nivel: 0,
        proximo_nivel: 0,
        total: "0kg",
      },
      impactometro: {},
      guia_digital: "assets/guia-digital.png",
      mapas: {},
      ads: [
        {
          img: "assets/banner1.png",
          link: "https://mundorecicladores.com.br/"
        },
        {
          img: "assets/banner2.png",
          link: "https://mundorecicladores.com.br/"
        },
        {
          img: "assets/banner3.png",
          link: "https://mundorecicladores.com.br/"
        },
      ],
    },
    complex: {
      niveis: { ver: 0 },
      noticias: { ver: 0 },
      programacao: { ver: 0 },
      coletas: { ver: 0 },
    }
  },
  niveis: {
    ver: 0,
    content: [],
  },
  noticias: {
    ver: 0,
    content: [
      {data: "31/5/22 10:00", titulo: "Bem vindes!", descricao: "Preparados para mais um Forró?"}
    ],
  },
  programacao: {
  "ver": 559,
  "content": [
    {
      "inicio": "2022-06-16T13:00:00.000Z",
      "duracao_min": 600,
      "nome": "Soundsystem | Jurassic | Paz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-16T17:30:00.000Z",
      "duracao_min": 60,
      "nome": "Prezado 5.0",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-16T18:00:00.000Z",
      "duracao_min": 60,
      "nome": "Mil Pássaros Dançando",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-16T19:30:00.000Z",
      "duracao_min": 60,
      "nome": "Bloco da Bilinha",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-16T20:00:00.000Z",
      "duracao_min": 60,
      "nome": "Karola Nunes",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-16T21:00:00.000Z",
      "duracao_min": 60,
      "nome": "Capa e seus Grilos",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-16T21:00:00.000Z",
      "duracao_min": 60,
      "nome": "Catarina no Sofá",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-16T22:00:00.000Z",
      "duracao_min": 90,
      "nome": "Liniker",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-16T22:00:00.000Z",
      "duracao_min": 60,
      "nome": "Zaion",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-16T22:00:00.000Z",
      "duracao_min": 60,
      "nome": "Trio da Gala",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-16T23:30:00.000Z",
      "duracao_min": 1230,
      "nome": "Cabelo",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-17T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Marina Dagher e Klebin Vita",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-17T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Luahu",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T01:00:00.000Z",
      "duracao_min": 90,
      "nome": "O Grande Encontro",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-17T02:30:00.000Z",
      "duracao_min": 90,
      "nome": "Luísa e os Alquimistas",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-17T02:30:00.000Z",
      "duracao_min": 60,
      "nome": "Sálvia da Terra",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-17T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Diana do Sertão",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T04:00:00.000Z",
      "duracao_min": 90,
      "nome": "Falamansa",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-17T04:00:00.000Z",
      "duracao_min": 60,
      "nome": "Irmãos Maccoy",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-17T05:30:00.000Z",
      "duracao_min": 90,
      "nome": "Forró Red Light",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-17T05:30:00.000Z",
      "duracao_min": 60,
      "nome": "Trio Praiano",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T06:30:00.000Z",
      "duracao_min": 60,
      "nome": "As Fulôs do Cerrado",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T07:30:00.000Z",
      "duracao_min": 90,
      "nome": "Nil Guimarães",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-17T07:30:00.000Z",
      "duracao_min": 60,
      "nome": "Forró di Muié",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T13:00:00.000Z",
      "duracao_min": 600,
      "nome": "Soundsystem | Jurassic | Paz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-17T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Maria Orfina",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-17T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Empodera Elas",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-17T15:30:00.000Z",
      "duracao_min": 60,
      "nome": "Bombeiros do Sol",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-17T17:00:00.000Z",
      "duracao_min": 60,
      "nome": "Saravá",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-17T18:00:00.000Z",
      "duracao_min": 60,
      "nome": "Simba do Chicão",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-17T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Kauze",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-17T20:00:00.000Z",
      "duracao_min": 60,
      "nome": "Elisa de Sena",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-17T21:00:00.000Z",
      "duracao_min": 90,
      "nome": "Congadar",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-17T21:30:00.000Z",
      "duracao_min": 60,
      "nome": "Ric",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-17T21:30:00.000Z",
      "duracao_min": 60,
      "nome": "Felipe Sereno",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-17T22:30:00.000Z",
      "duracao_min": 90,
      "nome": "Tribo de Jah",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-17T22:30:00.000Z",
      "duracao_min": 90,
      "nome": "Netvno",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T00:00:00.000Z",
      "duracao_min": 90,
      "nome": "Bia Ferreira",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-18T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Xaxado Novo",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-18T00:30:00.000Z",
      "duracao_min": 60,
      "nome": "Umbrado",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-18T01:30:00.000Z",
      "duracao_min": 90,
      "nome": "Racionais",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-18T01:30:00.000Z",
      "duracao_min": 90,
      "nome": "Lança Xote",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T03:00:00.000Z",
      "duracao_min": 90,
      "nome": "Rapadura XC",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-18T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Quarteto Pé de Cabra",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-18T04:30:00.000Z",
      "duracao_min": 90,
      "nome": "Cordel do Fogo Encantado",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-18T04:30:00.000Z",
      "duracao_min": 90,
      "nome": "Rock in Roça",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T06:00:00.000Z",
      "duracao_min": 90,
      "nome": "Furmiga Dub e seu Bando",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-18T06:00:00.000Z",
      "duracao_min": 60,
      "nome": "Munduká",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-18T07:00:00.000Z",
      "duracao_min": 60,
      "nome": "Forró da Morada",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-18T13:00:00.000Z",
      "duracao_min": 60,
      "nome": "Batmacumba Samba Reggae",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T13:00:00.000Z",
      "duracao_min": 600,
      "nome": "Soundsystem | Jurassic | Paz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-18T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Chic Hernandez",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-18T15:30:00.000Z",
      "duracao_min": 60,
      "nome": "Samba da Opinião",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T17:00:00.000Z",
      "duracao_min": 60,
      "nome": "Gnomos do Quintal",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-18T17:30:00.000Z",
      "duracao_min": 90,
      "nome": "Canavieira",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T17:30:00.000Z",
      "duracao_min": 60,
      "nome": "Berimbalata",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-18T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Bolero Freak",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-18T19:30:00.000Z",
      "duracao_min": 60,
      "nome": "Fundação Reggae",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-18T20:00:00.000Z",
      "duracao_min": 60,
      "nome": "Saravashivaya",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T21:00:00.000Z",
      "duracao_min": 90,
      "nome": "El Efecto",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-18T21:30:00.000Z",
      "duracao_min": 60,
      "nome": "Duo Franz",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-18T23:00:00.000Z",
      "duracao_min": 90,
      "nome": "Mart'nália",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-18T23:30:00.000Z",
      "duracao_min": 60,
      "nome": "Maikão",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-18T23:30:00.000Z",
      "duracao_min": 60,
      "nome": "Valentina Guillen",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T00:30:00.000Z",
      "duracao_min": 90,
      "nome": "Mariana Aydar",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-19T00:30:00.000Z",
      "duracao_min": 90,
      "nome": "Fenícia",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-19T02:00:00.000Z",
      "duracao_min": 90,
      "nome": "Baiana System",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-19T02:00:00.000Z",
      "duracao_min": 60,
      "nome": "Cidrais",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-19T03:30:00.000Z",
      "duracao_min": 90,
      "nome": "Čao Laru",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-19T03:30:00.000Z",
      "duracao_min": 60,
      "nome": "Bafafá",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T04:30:00.000Z",
      "duracao_min": 90,
      "nome": "Francisco El Hombre",
      "local": "Palco Vale"
    },
    {
      "inicio": "2022-06-19T04:30:00.000Z",
      "duracao_min": 90,
      "nome": "Undercover",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-19T04:30:00.000Z",
      "duracao_min": 60,
      "nome": "Neide Garapá",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T05:30:00.000Z",
      "duracao_min": 60,
      "nome": "Pá de Manaca",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T06:00:00.000Z",
      "duracao_min": 90,
      "nome": "Ventania",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-19T07:00:00.000Z",
      "duracao_min": 30,
      "nome": "Premiação do Concurso Das Bandas De Forró",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T07:30:00.000Z",
      "duracao_min": 90,
      "nome": "Suzie Kill",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-19T07:30:00.000Z",
      "duracao_min": 60,
      "nome": "Show da Banda Campeã do Concurso de Forró",
      "local": "Palco Forró"
    },
    {
      "inicio": "2022-06-19T12:30:00.000Z",
      "duracao_min": 60,
      "nome": "Chorinho",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-19T13:00:00.000Z",
      "duracao_min": 600,
      "nome": "Soundsystem | Jurassic | Paz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-19T14:00:00.000Z",
      "duracao_min": 60,
      "nome": "Aline Tavares",
      "local": "Palco Dharma"
    },
    {
      "inicio": "2022-06-19T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Samba de Quinta com Rafaela Vaz",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-19T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Enraíze",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2022-06-19T16:00:00.000Z",
      "duracao_min": 90,
      "nome": "Santa Jam Vó Alberta",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2022-06-19T17:30:00.000Z",
      "duracao_min": 60,
      "nome": "Perê Piano",
      "local": "Palco Praça do Lago"
    },
    {
      "inicio": "2022-06-19T17:30:00.000Z",
      "duracao_min": 60,
      "nome": "Relô-Rolô",
      "local": "Palco Piscina"
    }
  ]
  },
  coletas: {
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
      noticias: computed(() => this.app_data.noticias.content),
      impactometro: computed(() => this.app_data.fastdata.simple.impactometro),
      guia_digital: computed(() => this.app_data.fastdata.simple.guia_digital),
      mapas: computed(() => this.app_data.fastdata.simple.mapas),
      ads: computed(() => this.app_data.fastdata.simple.ads),
      niveis: computed(() => this.app_data.niveis.content),
      programacao: computed(() => this.app_data.programacao.content),
      coletas: computed(() => this.app_data.coletas.content),
      bus: computed(() => this.bus),
    }
  },
  setup() {
    const storage = new Storage();
    const complex_data_keys = ["noticias", "niveis", "programacao", "coletas"];
    const storage_keys = complex_data_keys.concat(["fastdata"]);
    const base_url = "https://www.mundorecicladores.com.br/_functions/"
    return {
      storage: storage,
      complex_data_keys: complex_data_keys,
      storage_keys: storage_keys,
      base_url: base_url,
    }
  },
  async mounted(): Promise<void> {
    this.bus.on("logout", this.logout);
    await this.load_from_storage();
    this.get_data_from_server();
    setInterval(this.get_data_from_server, 3*1000)
    await registerNotifications()
    addListeners();
    getDeliveredNotifications();
  },
  methods: {
    async load_from_storage() {
      await this.storage.create();
      //await this.storage.clear();
      for (let data of this.storage_keys) {
        try {
          let s_data = await this.storage.get(data);
          if (s_data) {
            let obj = JSON.parse(s_data);
            this.app_data[data] = obj;
            if (data == "fastdata") {
              //console.log(data, s_data);
              let user = this.app_data.fastdata.simple.user;
              if (user.tel) {
                console.log("Login from storage -", user.tel);
                this.is_logged = true;
              }
            }
          }
        } catch (error) {
            console.log("Error when loading data from storage", error);
        }
      }
    },
    async get_data_from_server() {
      let user = this.app_data.fastdata.simple.user;
      let fastdata_url = this.base_url + "fastdata/" + user.tel;
      let fastdata = await fetch_obj(fastdata_url);
      // If user logged in while we were waiting for data, restore tel
      if (user.tel && !fastdata.simple.user.tel)
        fastdata.simple.user.tel = user.tel;
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
      let tel = this.app_data.fastdata.simple.user.tel;
      let complexdata_url = this.base_url + "complexdata/" + data + "/" + tel;
      let obj = await fetch_obj(complexdata_url);
      let obj_s = JSON.stringify(obj);
      console.log(complexdata_url, obj_s);
      this.storage.set(data, obj_s);
      this.app_data[data] = obj;
    },
    login(tel) {
      console.log("Login", tel)
      this.app_data.fastdata.simple.user.tel = tel;
      this.is_logged = true;
    },
    async logout(tel) {
      this.app_data.fastdata.simple.user = clone_obj(default_app_data.fastdata.simple.user);
      await this.storage.set("fastdata", JSON.stringify(this.app_data.fastdata));
      this.is_logged = false;
    }
  }
});
</script>