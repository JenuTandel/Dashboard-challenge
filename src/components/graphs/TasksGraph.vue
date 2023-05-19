<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light primary-color">Tasks</h4>
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
import { computed } from "@vue/reactivity";
import Chart from "chart.js/auto";
import { onMounted, ref, inject, watch } from "vue";
export default {
  setup() {
    let chartInstance: any;
    const graphElement = ref();

    //dynamic legend color
    const legendColor = inject<any>("ticksColor");
    const newLegendColor = ref();
    const legendColorValue = computed(() => {
      return legendColor.value;
    });
    watch(
      legendColorValue,
      () => {
        newLegendColor.value = legendColorValue.value;
      },
      { immediate: true }
    );

    // dynamic border-color
    const borderColor = inject<any>("borderColor");
    const newBorderColor = ref();
    const borderValue = computed(() => {
      return borderColor.value;
    });
    watch(
      borderValue,
      () => {
        newBorderColor.value = borderValue.value;
        if (chartInstance) {
          chartInstance.destroy();
        }
        console.log(newBorderColor.value);
        createChart();
      },
      { immediate: true }
    );

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
    const labelValue = {
      id: "lable_value",
      afterDatasetsDraw: (chart: any) => {
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

    onMounted(() => {
      createChart();
      window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
          window.location.reload();
        }
      });
    });

    function createChart() {
      const data = {
        labels: ["Not started (10)", "Complete (6)", "In Progress (2)"],
        datasets: [
          {
            data: [10, 6, 2],
            backgroundColor: ["#9da4ad", "#6bcc6d", "#56d8cd"],
            hoverOffset: 4,
            borderWidth: 2,
            borderColor: newBorderColor.value,
          },
        ],
      };

      const doughnutOptions = {
        cutout: "84%",
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: legendColorValue.value,
              font: {
                size: 14,
              },
            },
          },
        },
      };

      chartInstance = new Chart(graphElement.value, {
        type: "doughnut",
        data: data,
        options: doughnutOptions,
        plugins: [legendMargin, labelValue],
      });
    }

    return {
      graphElement,
    };
  },
};
</script>
