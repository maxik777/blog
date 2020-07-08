<template>
    <v-app id="inspire">

      <v-navigation-drawer class="d-md-none"
              v-model="drawer"
              app
              right
      >
        <v-list dense>
          <v-list-item v-for="component in components" :key="component.id" :to="component.path" link>
            <v-list-item-action>
              <v-icon>{{component.icon}}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{component.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-card
              color="grey lighten-4"
              flat
              height="0"
              tile
      >
        <v-toolbar color="primary" dense fixed>

          <v-icon dark right medium>mdi-vimeo</v-icon>

          <v-spacer></v-spacer>

          <router-link class="hidden-sm-and-down" v-for="component in components" :key="component.id" :to="component.path">
              <v-btn color="white" text large>{{component.title}}
                <v-icon dark right medium>{{component.icon}}</v-icon>
              </v-btn>
            <div></div>
          </router-link>

          <v-app-bar-nav-icon class="d-md-none" color="white" @click="drawer=!drawer"></v-app-bar-nav-icon>
        </v-toolbar>
      </v-card>
      <div class="content">
        <router-view></router-view>
      </div>


      <v-footer
              color="primary"
              app
              absolute
      >
        <v-spacer></v-spacer>

        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App',

    data: () => ({
      drawer: false,
      components: [
        {
          'id':1,
          'title':'Login',
          'icon':'mdi-login-variant',
          'path': '/login'
        },
        {
          'id':2,
          'title':'Register',
          'icon':'mdi-card-account-details-outline',
          'path': '/register'
        },
        {
          'id':3,
          'title':'Home',
          'icon':'mdi-home',
          'path': '/'
        },
        {
          'id':4,
          'title':'Contact',
          'icon':'mdi-email',
          'path': '/about'
        }
      ],
    })
};
</script>
<style scoped>
  .content{
    margin: 50px 0;
  }
  .router-link-exact-active div{
    height: 1px;
    background-color: white;
  }
  .router-link-exact-active .theme--light.v-btn::before{
    opacity: 0.05;
  }
</style>