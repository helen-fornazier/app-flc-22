<template>
  <ion-app>
    <ion-router-outlet v-if="is_logged"/>
    <MrLogin v-else @telefone="update_telefone"/>
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
    },
    complex: {
      guia_digital: {
        ver: 1,
        img: "assets/guia-digital.png",
      },
      mapas: {
        ver: 0,
        imgs: {},
      },
      ads: {
        ver: 0,
        imgs: [],
      },
      niveis: { ver: 0 },
      programacao: { ver: 0 },
    }
  },
  guia_digital: {
    ver: 0,
    img_b64: "",
  },
  mapas: {
    ver: 0,
    imgs_b64: {}
  },
  ads: {
    ver: 0,
    imgs_b64: []
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

async function fetch_img_b64(url) {
  console.log(url);
  const response = await fetch(url);
  const blob = await response.blob();
  const base64Data = await convertBlobToBase64(blob) as string;
  return 'data:image/png;base64,'+ base64Data;
}

// Ref: https://forum.ionicframework.com/t/how-to-download-an-image-then-store-it-on-the-device/199841
const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
    resolve(reader.result);
  };
 reader.readAsDataURL(blob);
});

async function fn_parse_guiadigital(obj) {
  let img_b64 = await fetch_img_b64(obj.img);
  return {
    img_u46: img_b64,
    ver: obj.ver
  }
}

async function fn_parse_mapas(obj) {
	let imgs_b64 = {}
  for (let key in obj.mapas.imgs) {
		let img = await fetch_img_b64(obj.mapas.imgs[key]);
		imgs_b64[key] = img;
  }
	return {
		ver: obj.ver,
		imgs_b64: imgs_b64
	}
}

async function fn_parse_ads(obj) {
	let imgs_b64: string[] = []
  obj.imgs.forEach(async (img) => {
		let img_b64 = await fetch_img_b64(img);
		imgs_b64.push(img_b64);
  });
	return {
		ver: obj.ver,
		imgs_b64: imgs_b64
	}
}

async function fn_parse_simple(obj) {
	return obj
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
    }
  },
  setup() {
    const storage = new Storage();
    const complex_data_keys = ["guia_digital", "mapas", "ads", "niveis", "programacao"];
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
    this.storage_keys.forEach(async (data) => {
      let s_data = await this.storage.get(data);
      if (s_data) {
        try {
          let obj = JSON.parse(s_data);
          this.app_data[data] = obj;
        } catch (error) {
          console.log("Error when loading data from storage", error);
        }
      }
    });
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
      // Update fastdata view
      this.app_data.fastdata = fastdata;

      // check which complex data we need to update
      this.complex_data_keys.forEach(async (data) => {
        if (this.app_data[data].ver != this.app_data.fastdata.complex[data].ver) {
          console.log("fetch complex", data, this.app_data[data].ver, this.app_data.fastdata.complex[data].ver);
          await this.fetch_complex_data(data)
        }
      });
    },
    async fetch_complex_data(data) {
      const parsers = {
        guia_digital: fn_parse_guiadigital,
        mapas: fn_parse_mapas,
        ads: fn_parse_ads,
        niveis: fn_parse_simple,
        programacao: fn_parse_simple,
      };
      let complexdata_url = this.base_url + "complexdata/" + data;
      let obj = await fetch_obj(complexdata_url);
      obj = await parsers[data](obj)

      this.storage.set(data, JSON.stringify(obj));
      this.app_data[data] = obj;
    },
  }
});
</script>