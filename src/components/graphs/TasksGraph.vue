<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light text-white">Tasks</h4>
    <div>
      <span class="icon icon-zoom fs-4 me-1"></span>
      <span class="icon icon-settings fs-4 me-1"></span>
      <span class="icon icon-help-circle fs-4"></span>
    </div>
  </div>
  <div class="doughnut-chart">
    <canvas ref="graphElement"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const data = {
      labels: ["Not started (10)", "Complete (6)", "In Progress (2)"],
      datasets: [
        {
          data: [10, 6, 2],
          backgroundColor: ["#9da4ad", "#6bcc6d", "#56d8cd"],
          hoverOffset: 4,
          borderWidth: 2,
          borderColor: "black",
          cutout: "84%",
        },
      ],
    };
    const doughnutOptions = {
      maintainAspectRatio: false,
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
        type: "doughnut",
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
.doughnut-chart {
  height: 250px;
  width: 100%;
}
</style>
