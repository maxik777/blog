<template>
  <div class="contact-form">
    <v-row
            align="center"
            justify="center"
    >
      <v-col
              cols="12"
              sm="8"
              md="4"
      >
        <v-card class="elevation-12">
          <v-card-title class="justify-center">Contact Us</v-card-title>
          <v-layout row wrap
                    class="pb-10"
          >
            <v-flex xs10 md6 offset-xs1 offset-md3>
              <v-text-field
                      box
                      label="Your E-mail"
                      type='email'
                      v-model="email"
                      append-icon="mdi-email-outline"
                      :rules="[rules.email.regex]"
              ></v-text-field>
            </v-flex>
            <v-flex xs10 md6 offset-xs1 offset-md3>
              <v-text-field
                      box
                      name="number"
                      append-icon="mdi-phone-outline"
                      label="Your phone number"
                      textarea
              ></v-text-field>
            </v-flex>
            <v-flex xs10 md6 offset-xs1 offset-md3>
            <v-text-field
                    box
                    name="message"
                    append-icon="mdi-border-color"
                    label="Your message"
                    textarea
            ></v-text-field>
          </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    rules: {
      email: {
        required: v => !!v || 'Required.',
        regex: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      }
    }
  })

}
</script>

<style scoped>
  .contact-form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    .contact-form{
      padding: 0 50px;
    }
  }
</style>