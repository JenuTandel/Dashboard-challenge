<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light text-white">Cost</h4>
    <div>
      <span class="icon icon-zoom fs-4 me-1"></span>
      <span class="icon icon-settings fs-4 me-1"></span>
      <span class="icon icon-help-circle fs-4"></span>
    </div>
  </div>
  <div class="bar-chart">
    <canvas ref="graphElement"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const data = {
      labels: [""],
      datasets: [
        {
          label: "Actual",
          data: [3.2],
          backgroundColor: ["#84bb5d"],
          barThickness: 52,
          borderWidth: 4,
        },
        {
          label: "Planned",
          data: [4.6],
          backgroundColor: ["#54d2f9"],
          barThickness: 52,
          borderWidth: 4,
        },
        {
          label: "Budget",
          data: [6],
          backgroundColor: ["#4198e0"],
          barThickness: 52,
          borderWidth: 4,
        },
      ],
    };
    const barOptions = {
      maintainAspectRatio: false,
      scales: {
        y: {
          max: 6,
          min: 0,
          ticks: {
            stepSize: 1.5,
          },
          grid: {
            display: true,
            color: "#9da4ad",
          },
          border: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: "#9da4ad",
            font: {
              size: 14,
            },
          },
        },
      },
    };
    const graphElement = ref();
    onMounted(() => {
      new Chart(graphElement.value, {
        type: "bar",
        data: data,
        options: barOptions,
      });
    });

    return {
      graphElement,
    };
  },
};
</script>

<style scoped>
.bar-chart {
  height: 250px;
  width: 100%;
}
</style>
