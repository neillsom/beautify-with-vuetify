<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form ref="signUpForm" v-model="formValidity">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-autocomplete label="Browser" :items="browsers"></v-autocomplete>
          <v-file-input label="Attach Profile Picture"></v-file-input>

          <div class="date-container" style="display: flex">
            <div class="date-modal">
              <v-dialog v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon medium class="date-icon"> mdi-calendar </v-icon>
                  </v-btn>
                </template>

                <v-card class="text-center">
                  <v-date-picker v-model="birthday"></v-date-picker>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <v-text-field
              label="Birthday"
              v-model="birthday"
              readonly
            ></v-text-field>
          </div>

          <v-checkbox
            :label="`Agree to Terms and Conditions`"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          ></v-checkbox>

          <v-btn class="mr-4" color="success" @click="validateForm">
            Validate Form
          </v-btn>
          <v-btn
            class="mr-4"
            type="submit"
            color="primary"
            :disabled="!formValidity"
          >
            Submit
          </v-btn>
          <v-btn class="mr-4" color="warning" @click="resetValidation"
            >Reset Validation</v-btn
          >
          <v-btn color="error" @click="resetForm">Reset</v-btn>
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
      agreeToTerms: false,
      agreeToTermsRules: [(value) => !!value || "Please agree to the terms."],
      email: "",
      emailRules: [
        (value) => !!value || "E-mail is required",
        (value) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "E-mail must be valid",
      ],
      formValidity: false,
      dialog: false,
    };
  },
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    },
  },
};
</script>

<style>
.date-modal {
  margin: 15px 1px 0 -5px !important;
}
.date-icon {
  padding: 0 !important;
  margin: 0 !important;
}
</style>