import { createStore } from 'vuex'
import axios from "axios";
const tesla = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-21&sortBy=publishedAt&apiKey=22ae971824c24ecba18341e0f90d497b";

export default createStore({
  state: {
    articles: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setArticles(state, values){
      state.articles = values
    },
    setMessage(state, message){
      state.message = message
    }
  },
  actions: {
    async fetchArticles(context){
      const res = await axios.get(`${tesla}`);
      let { articles } = await res.data;
      if (articles){
        context.commit('setArticles', articles);
      }else{
        context.commit('setMessage', err)
      }
    }
  },

  // search() {
  //   if (this.searching.toLowerCase().trim().length > 0) {
  //     return this.articles.filter((name) =>
  //       name.title
  //         .toLowerCase()
  //         .includes(this.searching.toLowerCase().trim())
  //     );
  //   }
  //   return this.article;
  // },
  modules: {
  }
})
