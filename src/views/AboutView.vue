<!-- <template>
  <div class="about">
    <div class="context">
      <h1>adsasd</h1>
      <div class="align">
        <div class="ima">
          <img src="" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <input id="" class="ch" type="checkbox" />
          <p></p>
          <p></p>
          <div class="text">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <label >See Less...</label>
          </div>
          <label >See More...</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
}

.context{
  border: 2px solid black;
  
}
</style> -->
<template>
  <div class="abo">
    <div class="heading">
      <h1>About</h1>
      <img
        class="image"
        src="https://i.postimg.cc/KYswP06H/newsela-high-resolution-logo-black-on-transparent-background.png"
        alt=""
      />
    </div>
    <div class="about">
      <div class="whole">
        <div class="context">
          <div class="hold">
            <div class="holder" data-aos="fade-right">
              <div class="im">
                <img
                  class="img"
                  src="https://i.postimg.cc/N0N6895j/newsela-high-resolution-logo-white-on-black-background.png"
                  alt=""
                />
              </div>
              <div class="para">
                <p>
                  Newsela is a leading online platform that provides up-to-date
                  news and articles about Tesla, the popular electric vehicle
                  and clean energy company founded by Elon Musk. As a website
                  that is dedicated to keeping its users informed about the
                  latest developments in the world of Tesla, Newsela is a
                  valuable resource for anyone interested in this innovative
                  company and its products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="context">
          <div class="hold">
            <div class="holder" data-aos="fade-left">
              <div class="para">
                <p>
                  At Newsela, we understand the importance of staying informed
                  about Tesla, which is why we offer a wide range of news
                  articles and feature stories that cover all aspects of the
                  company. From the latest Tesla product releases and industry
                  news to interviews with Elon Musk and in-depth analyses of the
                  company's financial performance, our platform provides
                  comprehensive coverage of everything that's happening in the
                  world of Tesla.
                </p>
              </div>
              <div class="im">
                <img
                  class="img"
                  src="https://i.postimg.cc/FRtgPfjb/Tesla-starlink-satellite-connection.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="context">
          <div class="hold">
            <div class="holder" data-aos="fade-right">
              <div class="im">
                <img
                  class="img"
                  src="https://i.postimg.cc/brnQ1qGC/ca8661097bb0194ea01aa2e063a8a9ad.jpg"
                  alt=""
                />
              </div>
              <div class="para">
                <p>
                  One of the key benefits of using Newsela is that we have a
                  team of experienced journalists and writers who are dedicated
                  to bringing you the most accurate and informative news stories
                  possible. Our team members are experts in their fields, and
                  they work tirelessly to ensure that our coverage of Tesla is
                  always reliable and up-to-date. <br />
                  <br />
                  In addition to our comprehensive news coverage, Newsela also
                  offers a range of features and tools that make it easy for
                  users to stay informed about Tesla. Our platform is designed
                  to be user-friendly and easy to navigate, so you can quickly
                  find the news stories and articles that are most relevant to
                  your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="context">
          <div class="hold">
            <div class="holder" data-aos="fade-left">
              <div class="para">
                <p>
                  Whether you're an investor in Tesla, a fan of Elon Musk, or
                  just someone who's interested in learning more about this
                  innovative company and its products, Newsela is the perfect
                  resource for staying informed about all the latest
                  developments. So why not join the millions of other people
                  around the world who rely on Newsela for their daily dose of
                  Tesla news and information?
                </p>
              </div>
              <div class="im">
                <img
                  class="img"
                  src="https://i.postimg.cc/Xq2pZhLH/tesla-motors-ceo-elon-musk-calls-moodys-irrelevant.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {};
</script>

<style>
.about {
  margin-top: 3rem;
  /* margin-left: 6rem; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 16rem;
  height: 3rem;
  margin-left: 1rem;
  margin-bottom: 5px;
  /* margin-top: 10px; */
}

.heading {
  /* margin-top: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
}

.context {
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.whole {
  width: 90%;
  height: 100%;
  text-align: center;
}

.im {
  width: 20rem;
  height: 16rem;
  /* border: 3px solid red; */
}
.img {
  width: 20rem;
  height: 16rem;
}

.holder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.para {
  max-width: 100%;
  flex-wrap: wrap;
  margin-left: 3rem;
  margin-right: 3rem;
}

.hold {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.whole {
  margin-bottom: 5rem;
}

@media screen and (max-width : 650px) {
  .abo {
    width: 100%;
    
  }

  .context{
    background-color: green;
    border: 3px solid black;
    display: inline-block;
    justify-content: center;
    align-items: center;
  }

  .about {
    margin-top: 3rem;
    /* margin-left: 6rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hold {
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
  .heading{
    border: 2px solid black
  }
}
</style>