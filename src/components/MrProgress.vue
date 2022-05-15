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
  setup(props) {
    const chartData = {
      datasets: [
        {
          backgroundColor: ['#41B883', '#FFFFFF'],
          data: [60, 20]
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      cutout: "90%",
      borderWidth: 0,
    }

    return {
        chartData,
        chartOptions,
    };
  }
})
</script>