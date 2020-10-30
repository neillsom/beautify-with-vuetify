<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-autocomplete label="Browser" :items="browsers"></v-autocomplete>
          <v-file-input label="Attach Profile Picture"></v-file-input>
          <v-text-field
            label="Birthday"
            v-model="birthday"
            readonly
          ></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox label="Agree to Terms and Conditions"></v-checkbox>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      browsers: [
        "Google Chrome",
        "Mozilla Firefox",
        "Safari",
        "Microsoft Edge",
        "Internet Explorer",
        "Opera",
        "Other",
      ],
      birthday: "",
    };
  },
};
</script>