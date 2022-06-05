<template>
  <div v-if="Object.keys(mapas).length" class=titulo><h4>Como chegar</h4></div>
  <swiper
  :modules="modules"
  :slidesPerView="5.4"
  :freeMode="true"
  >
    <swiper-slide v-if="mapas['recicladores']">
      <a :href="'tabs/img?img=' + mapas['recicladores']">
        <div class="circle">
          <ion-icon :icon=syncOutline fill=clear></ion-icon>
          <p class="sub">Recicladores</p>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide v-if="mapas['palcos']">
      <a :href="'tabs/img?img=' + mapas['palcos']">
        <div class="circle">
          <ion-icon :icon=musicalNotesOutline fill=clear></ion-icon>
          <p class="sub">Palcos</p>
        </div>
      </a>
    </swiper-slide>

    <swiper-slide v-if="mapas['praca_de_alimentacao']">
      <a :href="'tabs/img?img=' + mapas['praca_de_alimentacao']">
        <div class="circle">
          <ion-icon :icon=fastFoodOutline fill=clear></ion-icon>
          <p class="sub">Praça de Alimentação</p>
        </div>
      </a>
    </swiper-slide>

    <swiper-slide v-if=" mapas['cozinha']">
      <a :href="'tabs/img?img=' + mapas['cozinha']">
        <div class="circle">
          <ion-icon :icon=restaurantOutline fill=clear></ion-icon>
          <p class="sub">Cozinha</p>
        </div>
      </a>
    </swiper-slide>

    <swiper-slide v-if="mapas['campings']">
      <a :href="'tabs/img?img=' + mapas['campings']">
        <div class="circle">
          <ion-icon :icon=triangleOutline fill=clear></ion-icon>
          <p class="sub">Campings</p>
        </div>
      </a>
    </swiper-slide>

    <swiper-slide v-if="mapas['banheiros']">
      <a :href="'tabs/img?img=' + mapas['banheiros']">
        <div class="circle">
          <ion-icon :icon=maleFemaleOutline fill=clear></ion-icon>
          <p class="sub">Banheiros</p>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { IonGrid, IonCol, IonRow,  IonNote } from '@ionic/vue';
import { restaurantOutline, triangleOutline, maleFemaleOutline } from 'ionicons/icons';
import { musicalNotesOutline, syncOutline, fastFoodOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default defineComponent({
  name: 'MrLineup',
  components: {
    IonIcon,
    Swiper,
    SwiperSlide,
  },
  inject: ["mapas"],
  setup() {
    return {
        fastFoodOutline,
        syncOutline,
        musicalNotesOutline,
        restaurantOutline,
        triangleOutline,
        maleFemaleOutline,
        modules: [FreeMode]
    };
  },
});
</script>

<style scoped>
h4 {
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
}
p {
  font-size: 8px;
  line-height: 10px;
  font-weight: normal;
}
.table_margin {
  width: var(--mr-side-margin);
  margin: 0;
}
.titulo {
  text-align: left;
  max-width: 99%;
  height: 20px;
  margin: 0;
  margin-left: var(--mr-side-margin);
  font-weight: bold;
}
.circle {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 50px;
  background-color: var(--ion-color-primary);
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  margin-top: 10px;
}
ion-icon {
  color:  var(--ion-color-primary-contrast);
  height: 100%;
  width: 50%;
}
.sub {
  position: absolute;
  top: 60px;
}
swiper {
}
</style>