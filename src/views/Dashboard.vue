<template>
  <v-container>
    <h1>Dashboard</h1>

    <!-- Graph -->
    <v-row>
      <v-col v-for="sale in sales" :key="`${sale.title}`" lg="4" md="4" sm="12">
        <SalesGraph :sale="sale" />
      </v-col>
    </v-row>

    <!-- Stats -->
    <v-row>
      <v-col
        v-for="statistic in statistics"
        :key="`${statistic.title}`"
        lg="3"
        md="6"
        sm="12"
      >
        <StatisticCard :statistic="statistic" />
      </v-col>
    </v-row>

    <!-- Table -->
    <v-row>
      <v-col sm="12" md="8">
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col sm="12" md="4">
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>

    <!-- Alert -->
    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable";
import EventTimeline from "../components/EventTimeline";
import SalesGraph from "../components/SalesGraph";
import StatisticCard from "../components/StatisticCard";

import employeesData from "../data/employees.json";
import timelineData from "../data/timeline.json";
import salesData from "../data/sales.json";
import statisticsData from "../data/statistics.json";

export default {
  name: "DashboardPage",
  components: {
    EmployeesTable,
    EventTimeline,
    SalesGraph,
    StatisticCard,
  },
  data() {
    return {
      employees: employeesData,
      sales: salesData,
      selectedEmployee: {
        name: "",
        title: "",
      },
      snackbar: false,
      statistics: statisticsData,
      timeline: timelineData,
    };
  },
  methods: {
    setEmployee(event) {
      this.snackbar = true;
      this.selectedEmployee.name = event.name;
      this.selectedEmployee.title = event.title;
    },
  },
};
</script>
