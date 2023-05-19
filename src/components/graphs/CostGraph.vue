<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light primary-color">Cost</h4>
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
import { onMounted, ref, inject, computed, watch } from "vue";
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
      labels: [""],
      datasets: [
        {
          label: "Actual",
          data: [3.2],
          backgroundColor: ["#84bb5d"],
          barThickness: 52,
          borderWidth: {
            left: 4,
            right: 4,
          },
        },
        {
          label: "Planned",
          data: [4.6],
          backgroundColor: ["#54d2f9"],
          barThickness: 52,
          borderWidth: {
            left: 4,
            right: 4,
          },
        },
        {
          label: "Budget",
          data: [6],
          backgroundColor: ["#4198e0"],
          barThickness: 52,
          borderWidth: {
            left: 4,
            right: 4,
          },
        },
      ],
    };
    const legendMargin = {
      id: "legend_margin",
      beforeInit(chart: any) {
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
          fitValue.bind(chart.legend)();
          this.height += 30;
        };
      },
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
          scales: {
            y: {
              max: 6,
              min: 0,
              ticks: {
                stepSize: 1.5,
                font: {
                  size: 14,
                },
                color: ticksColorValue.value,
                callback: function (value: any, index: any) {
                  if (index == 0) {
                    return "$" + value;
                  } else {
                    return value + "K";
                  }
                },
              },
              grid: {
                display: true,
                color: ticksColorValue.value,
                lineWidth: 0.2,
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
        plugins: [legendMargin],
      });
    }

    return {
      graphElement,
    };
  },
};
</script>
