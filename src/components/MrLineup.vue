<template>
  <MrCard>
    <div class=card-header>
      Rolando agora
      <ion-icon @click="show_info" slot="icon-only" :icon="informationCircleOutline" fill=clear></ion-icon>
    </div>
    <div class=linup-table>
      <swiper
      :autoplay="{delay:4500, disableOnInteraction: true}"
      :pagination="true"
      :modules="modules"
      >
        <swiper-slide v-for="chunk in prog_now" :key="chunk.id">
          <table>
            <tr class="line-header">
              <th>Atração</th>
              <th>Horário</th>
              <th>Local</th>
            </tr>
            <tr class="header-space">
              <td></td>
              <td class="middle-column"></td>
              <td></td>
            </tr>
            <tr class="evento" v-for="prog in chunk" :key="prog.id">
              <td class="atracao">{{ prog.nome }}</td>
              <td class="middle-column">{{ prog.inicio }}</td>
              <td>{{ prog.local }}</td>
            </tr>
          </table>
        </swiper-slide>
      </swiper>
    </div>
  </MrCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from "swiper";
import MrCard from '@/components/MrCard.vue';
import { informationCircleOutline } from 'ionicons/icons';
import { IonIcon, alertController } from '@ionic/vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default defineComponent<{programacao: any}>({
  name: 'MrLineup',
  components: {
    Swiper,
    SwiperSlide,
    MrCard,
    IonIcon,
  },
  inject: ['programacao'],
  setup() {
    return {
        modules: [Autoplay, Pagination],
        informationCircleOutline,
    }
  },
  computed: {
    prog_now() {
      function clone_obj(obj: any) {
        // TODO: use structuredClone(), requires node v17
        return JSON.parse(JSON.stringify(obj));
      }
      function formate_date(d: Date) {
        // TODO: use structuredClone(), requires node v17
        const week_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
        const week = d.getDay();
        const hours = d.getHours()
        const minutes = ("0" + d.getMinutes()).slice(-2)
        return `${week_days[week]} ${hours}:${minutes}`
      }
      let now = new Date();
      let margin_min = 10;
      let prog_now: any[] = [];
      let prog_now_chunked: any[] = [];

      for (var i = 0; i < this.programacao.length; i++) {
          let prog = this.programacao[i];
          let inicio = new Date(prog.inicio);
          inicio.setMinutes(inicio.getMinutes() - margin_min)
          let fim = new Date(prog.inicio)
          fim.setMinutes(fim.getMinutes() + prog.duracao_min + margin_min)

          console.log("Analisando", prog, inicio.toLocaleString(), fim.toLocaleString(), now.toLocaleString(), now > inicio, now < fim);
          if (now > inicio && now < fim) {
            let obj = clone_obj(prog);
            obj.inicio = formate_date(new Date(prog.inicio));
            prog_now.push(obj);
          }
      }

      // Group by chunk of 4
      let chunk_size = 4;
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
  },
  methods: {
    async show_info() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Nota',
          message: 'A programação está sujeita a mudanças. Fazemos o possível para manter a programação atualizada, mas sempre verifique para não perder sua atração favorita!',
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
.programacao {
  font-size: 12px;
  line-height: 10px;
  text-align: left;
}
h4 {
  font-size: 12px;
  line-height: 15px;
}
.card-header {
  font-size: 16px;
  line-height: 28px;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  width: 100%;
  font-weight: bold;
}
table {
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
:deep() .swiper-pagination-bullets {
  bottom: -5px;
}
:deep() .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: var(--ion-color-secondary) !important;
}
tr {
  width: 100%;
  align-items: center;
  justify-content: center;
}
td {
  line-height: 20px;
  font-size: 12px;
  width: 34px;
}
.header-space {
  height: 0px;
}
.middle-column {
  border-left: 1px solid var(--ion-background-color);
  border-right: 1px solid var(--ion-background-color);
}
.evento {
  border-bottom: 1px solid var(--ion-background-color);
  height: 34px;
}
.atracao {
  text-align: left;
  color: var(--ion-color-primary);
}
.line-header {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  font-size: 12px;
  line-height: 20px;
}
.linup-table {
  width: 100%;
  padding: 10px;
}
</style>