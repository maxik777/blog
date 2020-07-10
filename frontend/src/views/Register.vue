<template>
    <div class="register-container">
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
                    <v-card-text>
                        <v-form @submit.prevent="register">
                            <v-text-field
                                    label="Name"
                                    name="Name"
                                    prepend-icon="mdi-account"
                                    type="text"
                                    v-model="name"
                            ></v-text-field>

                            <v-text-field
                                    label="Email"
                                    name="Email"
                                    prepend-icon="mdi-account"
                                    type="email"
                                    v-model="email"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                            ></v-text-field>

                            <v-text-field
                                    id="confirm-password"
                                    label="Confirm Password"
                                    name="confirm-password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="confirmedPassword"
                            ></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn type="submit" color="primary">Register</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Register",

        data: ()=>({
            name: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }),
        methods:{
            register () {
                this.$store
                    .dispatch('register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>
    .register-container{
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    @media screen and (max-width: 900px) {
        .register-container{
            padding: 0 50px;
        }
    }
</style>