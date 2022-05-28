<template>
  <swiper
  :modules="modules"
  :slidesPerView="1.5"
  :freeMode="true"
  >
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 1</li>
                    <li>Tea</li>
                    <li>Tea</li>
                    <li>Tea</li>
                    <li>Tea</li>
                    <li>Tea</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 2</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 3</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 3</li>
                    <li>Tea testando palavras longas lalalal alalal alalal </li>
                    <li>Milk</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 3</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
    <swiper-slide>
        <MrCard>
            <div class=card-header>Benefícios</div>
            <div class="card-content">
                <ul>
                    <li>Coffee 3</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul> 
            </div>
        </MrCard>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MrCard from '@/components/MrCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@ionic/vue/css/ionic-swiper.css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default defineComponent({
  name: 'MrBeneficios',
  components: {
    MrCard,
    Swiper,
    SwiperSlide,
  },
  inject: ["fastdata"],
  setup() {
    return {
        modules: [FreeMode]
    }
  },
});
</script>

<style scoped>
.card-header {
  font-size: 12px;
  line-height: 25px;
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  width: 100%;
  font-weight: bold;
}
.card-content {
  height: 200px;
}
ul {
  width: 100%;
  text-align: left;
  font-size: 12px;
  list-style: none; /* Remove default bullets */
}
ul li::before {
  content: "\2022";
  color: var(--ion-color-primary);
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
  font-size: 1.5em;
}
</style>