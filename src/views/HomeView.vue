<template>
  <div class="homes">
    <div class="home">
      <!-- <NavBar /> -->
      <div class="search1">
        <form @submit.prevent>
        <input
          type="search"
          name="search-outline"
          id=""
          placeholder="Search Tesla news"
          class="search"
          v-model="searchQuery" 
        /></form>
        <!-- <span><ion-icon name="search-outline"></ion-icon></span> -->
      </div>
      <div class="container" v-if="articles.length = 30">
        <div class="row roo">
          <div class="col mt-5" v-for="article in filtered" :key="article.id">
            <div class="card" id="myUL">
              <div class="name">
                <h1 class="tit">
                  {{ article.title }}
                </h1>
              </div>
              <div class="align">
                <div class="ima">
                  <img
                    :src="article.urlToImage"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <input :id="article.url" class="ch" type="checkbox" />
                  <p>{{ article.description }}</p>
                  <p>{{ article.content }}</p>
                  <div class="text">
                    <p>{{ article.url }}</p>
                    <p>{{ article.publishedAt }}</p>
                    <p>{{ article.author }}</p>
                    <p>{{ article.title }}</p>
                    <label :for="article.url">See Less...</label>
                  </div>
                  <label :for="article.url">See More...</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "home",
  components: {
    NavBar,
  },
  data() {
  return {
    searchQuery: '',
    articles: []
  }
},

  setup() {
    const store = useStore();
    store.dispatch("fetchArticles");
    const articles = computed(() => store.state.articles);
    return {
      articles,
    };
  },

  computed: {
    filtered: function(){
      return this.articles.filter((articles) => {
        return articles.content.toLowerCase().match(this.searchQuery.toLowerCase())
      });
    }
  }
};
</script>

<style>
.home {
  display: inline-block;
  justify-content: center;
  align-items: center;
}
.homes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}
.card {
  /* width: 80rem;  */
  border: 2px solid black;
  height: 100%;
  background-color: antiquewhite;
}

.card:hover {
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
  overflow: hidden;
}

/* .col{
  width: 80%;
} */

.align {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}

.line {
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
.roo {
  display: inline-block;
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
.card-body {
  text-align: left;
  flex-wrap: wrap;
}

.card-body p {
  width: 100%;
}

.ima img {
  width: 30rem;
  height: 20rem;
}

.ima {
  width: 30rem;
  height: 20rem;
  margin: 2rem;
}

.tit {
  font-size: 25px;
}

.name {
  /* width: 30rem; */
  height: 7rem;
  text-align: center;
  display: flex;
  text-decoration: underline;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
}

.ch {
  display: none;
}
.ch:checked ~ .text {
  display: block;
}
.ch:checked ~ label {
  display: none;
}

.text {
  display: none;
}

label {
  display: inline-block;
  cursor: pointer;
  color: blue;
  margin-top: 10px;
  /* background: grey; */
  width: 100%;
  /* height: 3rem; */
}

#myInput {
  /* background-image: url('/css/searchicon.png'); */
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tit a {
  color: rgba(0, 0, 0, 0.622);
  text-decoration: none;
}

.search1 {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 38px;
}

.search {
  width: 75vh;
  height: 44px;
  border-radius: 50px;
  border: transparent;
  /* text-align: center; */
  padding-left: 30px;
  padding-right: 30px;
  font-size: 15px;
  color: rgb(94, 94, 94);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

span {
  margin-left: 1rem;
}

.search-outline {
  /* margin-right: 2rem; */
}

@media screen and (max-width: 650px) {
  
}
</style>