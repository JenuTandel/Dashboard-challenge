<template>
  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4 class="fw-light primary-color">Time</h4>
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

    // //dynamic gridline color
    // const gridLineColor = inject<any>("gridLineColor");
    // const newgridLineColor = ref();
    // const gridLineColorValue = computed(() => {
    //   return gridLineColor.value;
    // });
    // watch(
    //   gridLineColorValue,
    //   () => {
    //     newgridLineColor.value = gridLineColorValue.value;
    //   },
    //   { immediate: true }
    // );

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
      labels: ["Planned Comple...", "Actual Completion", "Ahead", "", "", ""],
      datasets: [
        {
          label: "Ahead",
          data: [],
          backgroundColor: ["#4198e0"],
          barThickness: 18,
          borderWidth: 1,
        },
        {
          label: "Behind",
          data: [],
          backgroundColor: ["#f7a651"],
          barThickness: 18,
          borderWidth: 1,
        },
        {
          label: "On Time",
          data: [0.8, 14, 14, "", "", ""],
          backgroundColor: ["#70d973"],
          barThickness: 18,
          borderWidth: 1,
        },
      ],
    };

    const plugin = {
      id: "label",
      afterDatasetsDraw: (chart: any) => {
        const { ctx, data, width } = chart;
        ctx.save();
        data.datasets[2].data.forEach((element: any, index: any) => {
          const { y } = chart.getDatasetMeta(2).data[index].tooltipPosition();
          (ctx.fillStyle = data.datasets[2].backgroundColor[index]),
            (ctx.font = "normal 16px sans-serif");
          ctx.align = "right";
          ctx.textBaseline = "middle";
          const halfwidth = width / 2;
          if (element == "") {
            ctx.fillText(element, halfwidth + 25, y);
          } else if (element < 1) {
            element = 0;
            ctx.fillText(element + "%", halfwidth + 25, y);
          } else {
            ctx.fillText(element + "%", halfwidth + 25, y);
          }
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
            x: {
              max: 100,
              min: -100,
              stacked: true,
              ticks: {
                stepSize: 25,
                color: ticksColorValue.value,
                callback: function (value: any) {
                  if (value < 0) {
                    value = -value;
                    return value;
                  } else {
                    return value;
                  }
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
        plugins: [plugin],
      });
    }
    return {
      graphElement,
    };
  },
};
</script>
