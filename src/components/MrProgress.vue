<template>
  <Doughnut
    :chart-data="chartData"
    :chart-options="chartOptions"
  /> 
</template>

<script lang=ts>
import { defineComponent, PropType } from 'vue'

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from 'chart.js'
import { useCssVar } from '@vueuse/core'
import { ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent<{fastdata: any}>({
  name: 'MrProgress',
  components: {
    Doughnut
  },
  inject: ["fastdata"],
  setup() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      cutout: "90%",
      borderWidth: 0,
    }
    return {
        chartOptions,
    };
  },
  computed: {
    chartData() {
      const pts = this.fastdata.user.pts;
      const missing = this.fastdata.user.proximo_nivel - pts;
      const color_pts = useCssVar(ref('--ion-color-secondary'), ref(null)).value;
      const color_missing = useCssVar(ref('--ion-background-color'), ref(null)).value;
      return {
        datasets: [
          {
            backgroundColor: [color_pts, color_missing],
            data: [pts, missing]
          }
        ]
      }
    }
  }
})
</script>