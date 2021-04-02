<template>
  <div id="secret1" class="container">
    <h1 class="heading">隠しページ3</h1>
    <div class="container">
      <h3 class="border-bottom">古典的</h3>
      <p class="pt-5 pb-5 text-center">
        私と同じ世代の人ならわかる
      </p>
      <p style="text-align: center; font-style: normal;"><a href="/">Homeへ</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
mounted() {
    document.title = '隠しページ1 | スクロール大会';
    document.querySelector('meta[name="description"]').setAttribute('content', '見つけられるかな？？');
    $('body').addClass('secrets');
    this.discover();
  },
  methods: {
    discover() {
      this.axios.put(`${location.protocol}//${window.location.host}/api/secrets/3`)
          .then(() => {
            // console.log(response);
          })
          .catch(errors => {
            alert(JSON.stringify(errors.response.data));
            // console.log(errors.response);
          });
    }
  }
}
</script>
