<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="article in articles" :key="article">
          <div class="card">
            <h5 class="card-title">{{ article.name }}</h5>
            <div class="ima">
              <img
                :src="article.urlToImage"
                class="card-img-top"
                alt="..."
                style="height: 20rem; max-width: 30rem"
              />
            </div>
            <div class="card-body">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p>{{ article.content }}</p>
              <ul>
                <li>{{ article.url }}</li>
                <li>{{ article.publishedAt }}</li>
                <li>{{ article.author }}</li>
              </ul>
            </div>
            <p>{{ article.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  // data(){
  //   return{
  //     source: this.$store.state.articles
  //   };
  // },
  // created(){
  //   this.fetchArticles();
  // },
  // methods: {
  //   async fetchArticles() {
  //     const res = await axios.get(
  //       `https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=22ae971824c24ecba18341e0f90d497b`
  //     );
  //     this.source = res.data.results;
  //     console.log(res);
  //   },
  // },
  setup() {
    const store = useStore();
    store.dispatch("fetchArticles");
    const articles = computed(() => store.state.articles);
    return {
      articles,
    };
  },
};
</script>

<style>
.card {
  width: 20rem;
  border: 2px solid black;
  /* height: 10rem; */
}
.line {
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
.col {
  justify-content: center;
  margin: 0;
  padding: 0;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.bt {
  width: 7rem;
  float: left;
  background-color: rgba(31, 31, 241, 0.733);
  border: 1px solid rgb(31, 31, 241);
  border-radius: 5px;
}
.bt1 {
  width: 7rem;
  float: right;
  background-color: rgba(31, 241, 49, 0.733);
  border: 1px solid rgb(31, 241, 49);
  border-radius: 5px;
}
.bt1:hover {
  background-color: green;
  border: 1px solid rgba(31, 241, 49, 0.733);
  color: white;
}
.bt:hover {
  background-color: rgba(27, 27, 141, 0.781);
  border: 1px solid rgba(31, 31, 241, 0.733);
  color: white;
}
</style>