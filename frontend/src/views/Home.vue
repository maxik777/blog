<template>
  <div class="post-container">

    <h1>What's new?</h1>

    <v-carousel class="mb-15"
                cycle
    >
      <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <h2>Let's check top 10 cool things.</h2>

    <v-card v-for="number in numbers" :key="number.id"
            class="mx-auto mb-15"
    >
      <v-img
              class="white--text align-end"
              height="300px"
              :src="number.img"
      >
        <v-card-title>{{number.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{number.subTitle}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
                color="orange"
                text
        >
          Share
        </v-btn>

        <v-btn
                color="orange"
                text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
    >
      <v-icon>mdi-apple-keyboard-control</v-icon>
    </v-btn>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  data: () => ({
    fab: false,
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    numbers: [
      {
        'id':1,
        'title':'Top 10 Australian beaches',
        'subTitle':'Top 10 Australian beaches',
        'img':'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
      },
      {
        'id':2,
        'title':'Top 10 Australian stores',
        'subTitle':'Top 10 Australian stores',
        'img':'https://cdn.vuetifyjs.com/images/cards/store.jpg'
      },
      {
        'id':3,
        'title':'Top 10 Australian houses',
        'subTitle':'Top 10 Australian houses',
        'img':'https://cdn.vuetifyjs.com/images/cards/house.jpg'
      },
      {
        'id':4,
        'title':'Top 10 Australian roads',
        'subTitle':'Top 10 Australian roads',
        'img':'https://cdn.vuetifyjs.com/images/cards/road.jpg'
      },
      {
        'id':5,
        'title':'Top 10 Australian planes',
        'subTitle':'Top 10 Australian planes',
        'img':'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
      },
    ]
  }),

  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>
  h1, h2{
    text-align: center;
    margin-bottom: 20px;
  }

  .post-container{
    margin-top: 50px;
    padding: 0 50px;
  }

  .v-btn--fixed.v-btn--bottom{
    bottom: 40px;
  }

  @media screen and (min-width: 900px) {
    .post-container{
      padding: 0 300px;
    }
  }
</style>