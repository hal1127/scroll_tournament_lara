<template>
      <article>
          <h1 class="heading">{{ headding }}</h1>
          <div class="youtube h-auto">
            <div class="thumbnail text-center "><h3>404 Not Found</h3></div>
            <h6 class="title mb-2">{{ yt_title }}</h6>
            <p class="description">
              {{ yt_desc }}
            </p>
          </div>
          <p>
            <span v-html="article_cont"></span>
          </p>
        </article>
</template>

<script>
// import $ from 'jquery';

export default {
  name: "Article",
  props: {
    headding: String,
    date: String,
    yt_title: String,
    yt_desc: String,
    article_cont: String
  },
}

</script>

<style lang="scss">

.youtube {
  width: 500px;
  margin: 0 auto;
  background: #a1d6e2;
  overflow: hidden;
  border-radius: 10px;
  border: solid 1px #1995ad;
  cursor: pointer;
  .thumbnail {
    height: 240px;
    border-bottom: solid 1px #1995ad;
    background: #333;
    color: white;
  }
  p, h6 {
    margin: 0 10px;
  }
  .title {
    font-weight: bold;
  }
}

  @media screen and (max-width: 544px) {
    .youtube {
      width: auto;
      .thumbnail {
        height: 120px;
      }
    }
  }


.heading {
  margin-bottom: 20px;
  border-bottom: solid 2px skyblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 2rem;
}

article {
  margin-bottom: 80px;
  > p {
    font-size: 1.25rem;
  }
}

// @media screen and (max-width: 544px) {
//   .heading {
//     font-size: 1rem;
//   }
//   article {
//     margin-bottom: 40px;
//     > p {
//       font-size: 0.75rem;
//     }
//   }
// }
</style>