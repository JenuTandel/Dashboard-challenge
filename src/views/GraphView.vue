<template>
  <health-data></health-data>
  <tasks-graph></tasks-graph>
  <progress-graph></progress-graph>
  <time-graph></time-graph>
  <cost-graph></cost-graph>
  <workload-graph></workload-graph>
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
