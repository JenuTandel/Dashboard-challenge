<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light primary-color">Progress</h4>
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

    // dynamic ticks-color
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

    const plugin = {
      id: "label",
      afterDatasetsDraw: (chart: any) => {
        const { ctx, data } = chart;
        ctx.save();
        data.datasets[0].data.forEach((element: any, index: any) => {
          const { y } = chart.getDatasetMeta(0).data[index].tooltipPosition();
          (ctx.fillStyle = data.datasets[0].backgroundColor[index]),
            (ctx.font = "normal 14px sans-serif");
          ctx.align = "right";
          ctx.textBaseline = "middle";
          if (element < 1) {
            element = 0;
          }
          ctx.fillText(element + "%", 100, y);
        });
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
          indexAxis: "y",
          scales: {
            y: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                crossAlign: "far",
                font: {
                  size: 14,
                },
                color: ticksColorValue.value,
              },
              afterFit: function (scale) {
                scale.width = 150;
              },
            },
            x: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        plugins: [plugin],
      });
    }

    return {
      graphElement,
    };
  },
};
</script>
