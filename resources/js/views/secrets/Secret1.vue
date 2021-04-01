<template>
  <div id="secret1" class="container">
    <h1 class="heading">隠しページ1</h1>
    <div class="container">
      <h3 class="border-bottom">完走した感想は？</h3>
      <p class="pt-5 pb-5 text-center">
        本当はホラーにするつもりだった
      </p>
      <p style="text-align: center; font-style: normal;"><a href="/">Homeへ</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Secret1',
mounted() {
    document.title = '隠しページ1 | スクロール大会';
    document.querySelector('meta[name="description"]').setAttribute('content', '見つけられるかな？？');
    $('body').addClass('secrets');
  }
}
</script>

<style>
.secrets {
  padding: 1rem;
  background-color: black;
  color: white;
}
.secrets p{
  font-size: 1.3em;
  color: #333;
  font-style: italic;
}
</style>
