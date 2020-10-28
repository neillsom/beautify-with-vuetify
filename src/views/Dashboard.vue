<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="employees"
      class="elevation-1"
      @click:row="selectRow"
      multi-sort
    ></v-data-table>

    <v-snackbar v-model="snackbar">
      You have selected {{ currentName }}, {{currentTitle}}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import employeeData from "../data/employees.json";

export default {
  data() {
    return {
      currentName: "",
      currentTitle: "",
      snackbar: false,
      headers: [
        { text: "Employee Id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Position", value: "title" },
        { text: "Salary", value: "salary" },
      ],
      employees: employeeData,
    };
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      this.currentName = event.name;
      this.currentTitle = event.title;
    },
  },
};
</script>

<style>
</style>

  