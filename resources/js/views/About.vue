<template>
  <div id="about">
    <Header />
    <div class="container-main container">
      <h1 class="heading">運営者について <a class="secret3" href="/secrets-zwffnd9eua">リンク</a></h1>
      <div class="container">
        <h3 class="border-bottom m-2">あとがき</h3>
        <p>
          こんにちは。このサイトの製作者のはるです。<br>
          <br>
          ご立派にAboutサイトなんか用意しちゃってますが、大したことは書けませんので、ご了承ください。<br>
          <br>
          このサイトは2021年4月くらいに完成して公開されていると思いますが、構想自体は2020年の年末くらいからあったりました。つまり、完成までに3ヶ月くらいかかってますね(^^;<br>
          これを早いと思うか遅いと思うかは、web制作の経験があるかどうかとか、人によって変わってくる思いますが多分遅いほうです笑<br>
          <br>
          それもそのはず、このサイトの完成には見た目を作るフロントエンドと、サーバーとのやり取りをするバックエンドの2種類の技術が必要なのです！<br>
          急に新出単語が2つも出てきて難しい話になって来ましたね。はい！難しいのです！<br>
          <br>
          というのは冗談で、完成が遅れたのには理由があるのです。<br>
          <br>
          ヘルプページの表でバックエンド言語はLaravelと書かれていますが、本当はRuby on Railsを勉強していました。でも、デプロイ（インターネット上に公開する段階）でつまづいて諦めました。それから間もなく、Laravelでデプロイする際にNginxを諦めてWebサーバーはApacheになりました。<br>
          <br>
          そもそも、フロントエンド言語のVue.jsもReactを諦めた末にたどりついた結果だったりするので、ここにたどり着くまでにいろいろと挫折してたりします笑<br>
          プログラミングをかじっていない人には、なんのことやらさっぱりだとは思いますが、要するにこのサイトはたくさんのことから逃げた結果、誕生したということです。<br>
          <br>
          この経験を踏まえて私が皆様に伝えたいことは、<br>
          <br>
          <strong class="h1">できることしかできない！！</strong><br>
        </p>
      </div>
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

