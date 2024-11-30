<template>
  <MrCard>
    <div class=card-header>
      Shows
    </div>
    <ion-input placeholder="Buscar" v-model="search" clear-input="true"></ion-input>
    <div class=linup-table>
      <swiper
      :autoplay="{delay:4500, disableOnInteraction: true}"
      :pagination="{clickable: true, dynamicBullets: true}"
      :modules="modules"
      >
        <swiper-slide v-for="chunk in prog_now" :key="chunk.id">
          <table>
            <tr class="line-header">
              <th>Atração</th>
              <th><span class="dia">Dia</span>
                <ion-icon class="warning" @click="show_info('$geral')" slot="icon-only" :icon="warningOutline" fill=clear></ion-icon>
              </th>
              <th>Local</th>
            </tr>
            <tr class="header-space">
              <td></td>
              <td class="middle-column"></td>
              <td></td>
            </tr>
            <tr class="evento" v-for="prog in chunk" :key="prog.id">
              <td  @click="show_info(prog.notas)" class="atracao">
                {{ prog.nome }}
                <ion-icon v-if="prog.notas" slot="icon-only" :icon="informationCircleOutline" fill=clear></ion-icon>

              </td>
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
import { warningOutline } from 'ionicons/icons';
import { IonIcon, alertController, IonInput } from '@ionic/vue';

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default defineComponent<{update_now: any, programacao: any, search: string, now: Date}>({
  name: 'MrLineup',
  components: {
    Swiper,
    SwiperSlide,
    MrCard,
    IonIcon,
    IonInput,
  },
  inject: ['programacao'],
  setup() {
    return {
        modules: [Autoplay, Pagination],
        warningOutline,
    }
  },
  data() {
    return {
      search: "",
      now: new Date(),
    }
  },
  mounted() {
    setInterval(this.update_now, 1*60*1000);
  },
  computed: {
    prog_now() {
      console.log("PROG_NOW");
      function clone_obj(obj: any) {
        // TODO: use structuredClone(), requires node v17
        return JSON.parse(JSON.stringify(obj));
      }
      function formate_date(d: Date) {
        // TODO: use structuredClone(), requires node v17
        const week_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
        let week = d.getDay();
        const hours = d.getHours()
        const minutes = ("0" + d.getMinutes()).slice(-2)
        // Considers previous day if before 6h in the morning
        if (hours < 6)
          week = (((week-1) % week_days.length) + week_days.length) % week_days.length
        return `${week_days[week]} ${hours}:${minutes}`
      }
      function is_passed(now, inicio) {
        let turn_point = now;
        if (turn_point.getHours() < 6) {
          turn_point.setDate(turn_point.getDate() - 1);
        }
        turn_point.setHours(6,0,0,0);
        return inicio < turn_point;
      }

      let prog_now: any[] = [];
      let prog_now_chunked: any[] = [];

      for (let prog of this.programacao) {
          let inicio = new Date(prog.inicio);
          if (is_passed(this.now, inicio))
            continue;

          let obj = clone_obj(prog);
          obj.inicio = formate_date(inicio);
          // Don't filter if there is no search
          if (!this.search || this.search == "") {
            prog_now.push(obj);
            continue
          }
          // Filter based on search
          let search = this.search.toLowerCase();
          if (obj.local.toLowerCase().includes(search)
              || obj.local.toLowerCase().includes(search)
              || obj.nome.toLowerCase().includes(search)
              || obj.inicio.toLowerCase().includes(search))
            prog_now.push(obj);
      }

      // Group by chunk of 4
      let chunk_size = 4;
      for (let i = 0; i < Math.ceil(prog_now.length/chunk_size); i++) {
        let chunk: any[] = [];
        for (var j = 0; j < chunk_size && i * chunk_size + j < prog_now.length; j++) {
          chunk.push(prog_now[i * chunk_size + j]);
        }
        prog_now_chunked.push(chunk);
      }

      return prog_now_chunked;
    }
  },
  methods: {
    async show_info(type: any) {
      if (!type)
        return;
      var msg = type;
      if (type == "$geral")
        msg = 'A programação está sujeita a mudanças.</br></br>Fazemos o possível para manter a programação atualizada, mas sempre verifique para não perder sua atração favorita!';
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Nota',
          message: msg,
          buttons: ['OK'],
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
    update_now() {
      this.now = new Date();
    }
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
  margin-bottom: 10px;
  margin-top: 0;
}
:deep() .swiper-pagination-bullets {
  bottom: 0px !important;
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
  width: 10px;
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
  margin-top: 0;
  padding-top: 0;
}
ion-input {
  margin: 0;
  padding: 0;
  --padding-bottom: 0;
  --padding-top: 0;
  text-align: left;
  --padding-start: 15px;
}
.warning {
  font-size: 16px;
  padding: 0;
  margin: 0;
  position: relative;
  top: 1px;
}
.dia {
  position: relative;
  top: -1px;
}
</style>