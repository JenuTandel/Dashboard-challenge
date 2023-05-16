<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light text-white">Progress</h4>
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
      labels: [
        "Contracts",
        "Design",
        "Procurement",
        "Construction",
        "Post Const...",
        "Project Clo...",
      ],
      datasets: [
        {
          label: "",
          data: [100, 80, 19, 0.5, 0.5, 0.5],
          backgroundColor: [
            "#84bb5d",
            "#84bb5d",
            "#de5a9c",
            "#868a95",
            "#868a95",
            "#868a95",
          ],
          barThickness: 20,
        },
      ],
    };
    const barOptions = {
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        y: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
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
  height: 80%;
  width: 100%;
}
</style>
