<template>
  <div id="about">
    <Header HiLight="about" />
    <div class="container p-3">
      <h1 class="heading">スクロール大会について</h1>
      <h3 class="border-bottom m-2">環境</h3>
      <table border="1" width="100%">
        <thead class="table-head">
          <tr>
            <th class="p-2"></th>
            <th class="p-2">言語</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2">Webサーバー</td>
            <td class="p-2">Apache</td>
          </tr>
          <tr>
            <td class="p-2">フロントエンド言語</td>
            <td class="p-2">Vue.js(JavaScript)</td>
          </tr>
          <tr>
            <td class="p-2">バックエンド言語</td>
            <td class="p-2">Laravel(PHP)</td>
          </tr>
          <tr>
            <td class="p-2">データベース</td>
            <td class="p-2">PostgreSQL</td>
          </tr>
        </tbody>
      </table>

      <h3 class="border-bottom m-2">あとがき</h3>
      <p>
        こんにちは。このサイトの製作者のはるです。<br>
        <br>
        ご立派にAboutサイトなんか用意しちゃってますが、大したことは書けませんので、ご了承ください。<br>
        <br>
        このサイトは2021年3月末くらいに完成して公開されていると思いますが、構想自体は2020年の年末くらいからあったりました。つまり、完成までに3ヶ月くらいかかってますね(^^;<br>
        これを早いと思うか遅いと思うかは、web制作の経験があるかどうかとか、人によって変わってくる思いますが多分遅いほうです笑<br>
        <br>
        それもそのはず、このサイトの完成には見た目を作るフロントエンドと、サーバーとのやり取りをするバックエンドの2種類の技術が必要なのです！<br>
        急に新出単語が2つも出てきて難しい話になって来ましたね。はい！難しいのです！そしてこのサイトを作った私はすごいのです！笑<br>
        <br>
        というのは冗談で、完成が遅れたのには理由があるのです。<br>
        <br>
        上の表でバックエンド言語はLaravelと書かれていますが、本当はRuby on Railsを勉強していました。でも、デプロイ（インターネット上に公開する段階）でつまづいて諦めました。それから間もなく、Laravelでデプロイする際にNginxを諦めてWebサーバーはApacheになりました。<br>
        <br>
        そもそも、フロントエンド言語のVue.jsもReactを諦めた末にたどりついた結果だったりするので、ここにたどり着くまでにいろいろと挫折してたりします笑<br>
        プログラミングをかじっていない人には、なんのことやらさっぱりだとは思いますが、要するにこのサイトはたくさんのことから逃げた結果、誕生したということです。<br>
        <br>
        この経験を踏まえて私が皆様に伝えたいことは、<br>
        <br>
        <strong class="h1">できることしかできない！！</strong><br>
      </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
mounted() {
    document.title = 'スクロール大会について';
    document.querySelector('meta[name="description"]').setAttribute('content', '特にしゃべることもない');
  },
}
</script>
