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

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
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
      return {
        datasets: [
          {
            backgroundColor: ['#41B883', '#e4e0d8'],
            data: [pts, missing]
          }
        ]
      }
    }
  }
})
</script>