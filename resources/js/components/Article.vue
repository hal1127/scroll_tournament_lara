<template>
      <article>
          <h1 class="heading">{{ headding }}</h1>
          <div class="container">
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
          </div>
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
