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
import { onMounted, ref, onUnmounted } from "vue";
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
    const legendMargin = {
      id: "legend_margin",
      beforeInit(chart: any, legend: any, options: any) {
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
          fitValue.bind(chart.legend)();
          this.height += 30;
        };
      },
    };
    const labelValue = {
      id: "lable_value",
      afterDatasetsDraw: (chart: any, args: any, options: any) => {
        const { ctx, data, width, height } = chart;
        ctx.save();
        data.datasets[0].data.forEach((element: any, index: any) => {
          const { x, y } = chart
            .getDatasetMeta(0)
            .data[index].tooltipPosition();

          const halfWidth = width / 2;
          const halfHeight = height / 2;

          const xLine = x >= halfWidth ? x + 15 : x - 25;
          const yLine = y >= halfHeight ? y + 25 : y - 25;
          ctx.font = "normal 20px sans-serif";
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          ctx.fillText(chart.data.datasets[0].data[index], xLine, yLine);
        });
      },
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
    let chartInstance: any;

    const updateChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      createChart();
    };
    onMounted(() => {
      createChart();
      window.addEventListener("resize", updateChart);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateChart);
      if (chartInstance) {
        chartInstance.destroy();
      }
    });
    const createChart = () => {
      chartInstance = new Chart(graphElement.value, {
        type: "doughnut",
        data: data,
        options: doughnutOptions,
        plugins: [legendMargin, labelValue],
      });
    };

    return {
      graphElement,
    };
  },
};
</script>

<style scoped>
.doughnut-chart {
  height: 280px;
  width: 100%;
}
</style>
