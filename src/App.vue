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
      guia_digital: "assets/em-breve.jpeg",
      guia_digital_pages: [ "assets/em-breve.jpeg" ],
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
      {data: "31/5/22 10:00", titulo: "Boas Vindas!", descricao: "Preparados para mais um Forró?"}
    ],
  },
  programacao: {
  "ver": 559,
  "content": [
    {
      "inicio": "2023-06-08T15:00:00.000Z",
      "duracao_min": 90,
      "nome": "Paz E Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-08T17:00:00.000Z",
      "duracao_min": 60,
      "nome": "Bloco da Bilinha",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-08T18:30:00.000Z",
      "duracao_min": 30,
      "nome": "Paz E Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-08T19:30:00.000Z",
      "duracao_min": 60,
      "nome": "Tropical Funk",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-08T21:00:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-08T20:30:00.000Z",
      "duracao_min": 60,
      "nome": "FORRÓ DE FOLE",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-08T22:00:00.000Z",
      "duracao_min": 30,
      "nome": "FOLHA SECA",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "BALAIO DE  BAIÃO",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Thais Nogueira",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T06:00:00.000Z",
      "duracao_min": 60,
      "nome": "LUAHU",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T07:30:00.000Z",
      "duracao_min": 60,
      "nome": "SEU TENÓRIO",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T08:30:00.000Z",
      "duracao_min": 60,
      "nome": "MURUPI",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-08T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Projeto Natural Music - A hora mágica",
      "local": "Dharma / shows"
    },
    {
      "inicio": "2023-06-08T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Canaviera",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-08T20:30:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-08T21:30:00.000Z",
      "duracao_min": 30,
      "nome": "Victor Canella",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Culto ao Rim",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T07:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-08T21:00:00.000Z",
      "duracao_min": 60,
      "nome": "Pé de Cerrado",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-09T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Curumin convida Anelis Assumpção e Saulo Duarte",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-09T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Seu Estrelo e Fua de Terreiro",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-09T06:00:00.000Z",
      "duracao_min": 60,
      "nome": "Muntchako",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-08T22:30:00.000Z",
      "duracao_min": 60,
      "nome": "Lia de Itamaracá",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-09T01:30:00.000Z",
      "duracao_min": 60,
      "nome": "Natiruts",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-08T04:30:00.000Z",
      "duracao_min": 60,
      "nome": "Marina Sena",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-09T13:00:00.000Z",
      "duracao_min": 90,
      "nome": "Paz E Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Maria Orfina",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T16:30:00.000Z",
      "duracao_min": 30,
      "nome": "PAz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T17:00:00.000Z",
      "duracao_min": 60,
      "nome": "Calorosa",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T18:30:00.000Z",
      "duracao_min": 30,
      "nome": "PAz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Jack Tekila",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-09T20:30:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco Piscina"
    },

    {
      "inicio": "2023-06-09T21:30:00.000Z",
      "duracao_min": 30,
      "nome": "TRIO TOCA DA CORAL",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-10T00:30:00.000Z",
      "duracao_min": 60,
      "nome": "QUARTETO  PÉ DE CABRA",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-10T03:30:00.000Z",
      "duracao_min": 60,
      "nome": "kANAVIÁ",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-10T06:30:00.000Z",
      "duracao_min": 60,
      "nome": "MOINHO DAGUA",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-10T08:00:00.000Z",
      "duracao_min": 30,
      "nome": "BANDA DA LUA",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-09T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Pé de cerrado - Show Infantil",
      "local": "Dharma / shows"
    },
    {
      "inicio": "2023-06-09T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Samba do Chicão",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T16:30:00.000Z",
      "duracao_min": 30,
      "nome": "Vinícius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T17:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dons Maria",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Vinícius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T20:30:00.000Z",
      "duracao_min": 60,
      "nome": "Moe Chic e os agricultores",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T22:00:00.000Z",
      "duracao_min": 30,
      "nome": "Vinícius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T23:00:00.000Z",
      "duracao_min": 60,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T00:30:00.000Z",
      "duracao_min": 60,
      "nome": "Flor Et",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T02:00:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T03:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T05:00:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T06:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T08:00:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-09T21:30:00.000Z",
      "duracao_min": 60,
      "nome": "Desengaiola",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-10T00:30:00.000Z",
      "duracao_min": 60,
      "nome": "Marina Peralta",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-10T03:30:00.000Z",
      "duracao_min": 60,
      "nome": "Foli Grio Orquestra",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-10T06:30:00.000Z",
      "duracao_min": 60,
      "nome": "Lamparina",
      "local": "Palco Mirante"
    },
    {
      "inicio": "2023-06-09T23:00:00.000Z",
      "duracao_min": 60,
      "nome": "Luedji Luna",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-10T02:00:00.000Z",
      "duracao_min": 60,
      "nome": "Mestrinho convida Elba Ramalho",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-10T05:00:00.000Z",
      "duracao_min": 60,
      "nome": "Falcão",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-10T13:00:00.000Z",
      "duracao_min": 90,
      "nome": "Paz E Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T15:00:00.000Z",
      "duracao_min": 60,
      "nome": "Radio Reggae",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T16:30:00.000Z",
      "duracao_min": 30,
      "nome": "PAz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T17:00:00.000Z",
      "duracao_min": 60,
      "nome": "Lançaxote",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T18:30:00.000Z",
      "duracao_min": 30,
      "nome": "PAz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Cap Mustache",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T20:30:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-10T22:30:00.000Z",
      "duracao_min": 60,
      "nome": "ANNE LOISE",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-11T01:30:00.000Z",
      "duracao_min": 60,
      "nome": "Trio Dona Zefa",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-11T05:00:00.000Z",
      "duracao_min": 60,
      "nome": "BASTIÃO",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-11T06:30:00.000Z",
      "duracao_min": 30,
      "nome": "xaxiado",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-11T07:30:00.000Z",
      "duracao_min": 30,
      "nome": "felipe guirra",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-11T08:30:00.000Z",
      "duracao_min": 30,
      "nome": "PREMIAÇÃO  E SHOW CAMPEÃ",
      "local": "Palco Forró"
    },
    {
      "inicio": "2023-06-10T19:00:00.000Z",
      "duracao_min": 60,
      "nome": "Gadje Roma -  A hora mágica",
      "local": "Dharma / shows"
    },
    {
      "inicio": "2023-06-10T13:30:00.000Z",
      "duracao_min": 60,
      "nome": "roda das flores",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T15:00:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T16:00:00.000Z",
      "duracao_min": 60,
      "nome": "Lu vitti",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T17:30:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T18:30:00.000Z",
      "duracao_min": 60,
      "nome": "kirá",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T20:00:00.000Z",
      "duracao_min": 30,
      "nome": "Dj Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T21:00:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T22:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "PASSAGEM DE SOM BABI LASEERIE",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T01:30:00.000Z",
      "duracao_min": 60,
      "nome": "Babi Laseerie",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T04:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T06:00:00.000Z",
      "duracao_min": 60,
      "nome": "Fuzaka 2:45 até 4:15",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-11T07:30:00.000Z",
      "duracao_min": 60,
      "nome": "Dj - Vinicius preencher",
      "local": "Palco lago"
    },
    {
      "inicio": "2023-06-10T22:30:00.000Z",
      "duracao_min": 60,
      "nome": "Siba",
      "local": "Palco do Mirante"
    },
    {
      "inicio": "2023-06-11T01:30:00.000Z",
      "duracao_min": 60,
      "nome": "Academia da Berlinda",
      "local": "Palco do Mirante"
    },
    {
      "inicio": "2023-06-11T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Daniela",
      "local": "Palco do Mirante"
    },
    {
      "inicio": "2023-06-11T05:00:00.000Z",
      "duracao_min": 60,
      "nome": "Larissa Luz",
      "local": "Palco do Mirante"
    },
    {
      "inicio": "2023-06-11T07:00:00.000Z",
      "duracao_min": 60,
      "nome": "Alabama Mike & The Simi Brothers - atração internacional",
      "local": "Palco do Mirante"
    },
    {
      "inicio": "2023-06-10T021:00:00.000Z",
      "duracao_min": 60,
      "nome": "Black Alien",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-11T00:00:00.000Z",
      "duracao_min": 60,
      "nome": "Ney Matogrosso",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-11T03:00:00.000Z",
      "duracao_min": 60,
      "nome": "Daniela Mercury",
      "local": "Palco Vale"
    },
    {
      "inicio": "2023-06-11T14:00:00.000Z",
      "duracao_min": 60,
      "nome": "Soul Marley",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-11T15:30:00.000Z",
      "duracao_min": 30,
      "nome": "Paz e Dub",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-11T16:30:00.000Z",
      "duracao_min": 60,
      "nome": "Mandarine",
      "local": "Palco Piscina"
    },
    {
      "inicio": "2023-06-11T18:00:00.000Z",
      "duracao_min": 60,
      "nome": "14 bis",
      "local": "Palco Mirante"
    },
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
      guia_digital_pages: computed(() => this.app_data.fastdata.simple.guia_digital_pages),
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
    const base_url = "https://helenfornazier.wixsite.com/mundorecicladores-1/_functions/"
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
    // await registerNotifications() // Crash App
    // addListeners(); // Just work on App
    // getDeliveredNotifications(); // Just work on App
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
      try {
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
      } catch (error) {
        console.log("--------------------------------------  Error on get_data_from_server function-----------------------------------")
        console.log(error)
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