<template>
  <div class="row h-100 gx-0 bg-primary">
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <health-data></health-data>
    </div>
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <tasks-graph></tasks-graph>
    </div>
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <progress-graph></progress-graph>
    </div>
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <time-graph></time-graph>
    </div>
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <cost-graph></cost-graph>
    </div>
    <div class="col-4 p-4 h-50 border-bottom border-end">
      <workload-graph></workload-graph>
    </div>
  </div>
</template>

<script lang="ts">
import HealthData from "@/components/graphs/HealthData.vue";
import CostGraph from "@/components/graphs/CostGraph.vue";
import ProgressGraph from "@/components/graphs/ProgressGraph.vue";
import TasksGraph from "@/components/graphs/TasksGraph.vue";
import WorkloadGraph from "@/components/graphs/WorkloadGraph.vue";
import TimeGraph from "@/components/graphs/TimeGraph.vue";

export default {
  components: {
    HealthData,
    CostGraph,
    ProgressGraph,
    TasksGraph,
    WorkloadGraph,
    TimeGraph,
  },
};
</script>

<style scoped></style>
