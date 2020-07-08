<template>
        <div class="login-container">
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
                            <v-form>
                                <v-text-field
                                        label="Login"
                                        name="login"
                                        prepend-icon="mdi-account"
                                        type="text"
                                ></v-text-field>

                                <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary">Login</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
</template>

<script>
    export default {
        name: "Login"
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