<template>
        <div class="login-container">
            <v-row  class="mb-10"
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
                            <v-form @submit.prevent="login">
                                <v-text-field
                                        label="Email"
                                        name="email"
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
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn type="submit" color="primary">Login</v-btn>
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
        name: "Login",

        data:() => ({
            email: '',
            password: ''
        }),

        methods:{
            login () {
                this.$store
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }

    }
</script>

<style scoped>
    .login-container{
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    @media screen and (max-width: 900px) {
        .login-container{
            padding: 0 50px;
        }
    }
</style>