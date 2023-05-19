<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light primary-color">Workload</h4>
    <div>
      <span class="icon icon-zoom fs-4 me-1"></span>
      <span class="icon icon-settings fs-4 me-1"></span>
      <span class="icon icon-help-circle fs-4"></span>
    </div>
  </div>
  <div class="chart">
    <canvas ref="graphElement"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref, inject, watch, computed } from "vue";
export default {
  setup() {
    let chartInstance: any;
    const graphElement = ref();

    //dynamic ticks color
    const ticksColor = inject<any>("ticksColor");
    const newTicksColor = ref();
    const ticksColorValue = computed(() => {
      return ticksColor.value;
    });
    watch(
      ticksColorValue,
      () => {
        newTicksColor.value = ticksColorValue.value;
        if (chartInstance) {
          chartInstance.destroy();
        }
        createChart();
      },
      { immediate: true }
    );

    const data = {
      labels: ["Mike", "Jennifer", "Brandon", "Sam", "George"],
      datasets: [
        {
          label: "Completed",
          data: [4, 2, 0, 0, 0],
          backgroundColor: ["#84bb5d"],
          barThickness: 18,
          borderWidth: 1,
        },
        {
          label: "Remaining",
          data: [0, 2, 1, 3, 1],
          backgroundColor: ["#54d2f9"],
          barThickness: 18,
          borderWidth: 1,
        },
        {
          label: "Overdue",
          data: [],
          backgroundColor: ["#f0504c"],
          barThickness: 18,
          borderWidth: 1,
        },
      ],
    };
    onMounted(() => {
      createChart();
    });
    function createChart() {
      chartInstance = new Chart(graphElement.value, {
        type: "bar",
        data: data,
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            x: {
              max: 8,
              min: 0,
              stacked: true,
              ticks: {
                stepSize: 2,
                color: ticksColorValue.value,
                font: {
                  size: 14,
                },
              },
              grid: {
                color: ticksColorValue.value,
                lineWidth: 0.2,
              },
              border: {
                display: false,
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: ticksColorValue.value,
                crossAlign: "far",
                font: {
                  size: 14,
                },
              },
              afterFit: function (scale) {
                scale.width = 100;
              },
            },
          },
          plugins: {
            legend: {
              align: "start",
              labels: {
                usePointStyle: true,
                color: ticksColorValue.value,
                font: {
                  size: 14,
                },
              },
            },
          },
        },
      });
    }
    return {
      graphElement,
    };
  },
};
</script>
