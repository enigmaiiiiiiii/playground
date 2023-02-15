<template>
  <div class="chart">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

export default {
  name: "Chart",
  extends: Bar,
  props: {
    chartData: Object,
  },
  mounted() {
    this.renderChart(this.chartData, {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
        ],
      },
    });
  },
};
</script>
