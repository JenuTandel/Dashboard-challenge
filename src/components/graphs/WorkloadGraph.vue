<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light text-white">Workload</h4>
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
      labels: ["Mike", "Jennifer", "Brandon", "Sam", "George"],
      datasets: [
        {
          label: "Completed",
          data: [4, 4, 3, 1, 4],
          backgroundColor: ["#84bb5d", "#54d2f9", "#4198e0"],
          barThickness: 30,
          borderWidth: 1,
        },
      ],
    };
    const doughnutOptions = {
      maintainAspectRatio: false,
      indexAxis: "y",

      elements: {
        bar: {
          pointStyle: "circle",
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
        options: doughnutOptions,
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
