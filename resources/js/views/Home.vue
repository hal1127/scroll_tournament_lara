<template>
  <div id="home">
    <Header />
    <div :class="'position-fixed p-1 m-1 scroll bg-white rounded ' + marginTop">
      <h1>{{ Math.floor(scroll).toLocaleString()+'px' }}</h1>
    </div>
    <div :class="'position-fixed p-1 m-1 timer bg-white rounded ' + marginTop">
      <h1>{{ this.timerInt }}<small class="font-weight-normal">{{ this.timerFloot }}</small></h1>
    </div>
    <div class="container p-3">
    <Article
      v-for="article_param in article_params"
      :key="article_param.id"
      :headding="article_param.headding"
      :yt_title="article_param.yt_title"
      :yt_desc="article_param.yt_desc"
      :article_desc="article_param.article_desc"
      :article_cont="article_param.article_cont"
    />
    </div>
    <Modal @scroll_start="scroll_start" />
    <ResultModal v-if="isFinished" :result="result" />
    <Footer />
  </div>
</template>

<script>
import Article from '../components/Article.vue'
import Modal from '../components/Modal.vue'
import ResultModal from '../components/ResultModal.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

let headdings = [
  '公式ホームページ始めました‼',
  '動画投稿しました‼',
];
let yt_titles = [
  '【ついに…】公式サイト作ったよ！',
  '【無意味】アジの開き閉じてみた！',
];
let yt_descs = [
  'とうとう、はるさめん公式ホームページができました！ホームページのURLはこちらです→http://harusame...',
  'アジの開きっておいしいですよね。でも、なんで開いているのか考えたことはありませんか？',
];
let article_conts = [
  `動画投稿を始めて1年が経ちました…。<br>
  ついに、公式サイトができました‼動画投稿の報告や、近況を更新していくので、楽しみにしていてください！`,
  '動画を投稿しました！ぜひ見てみてください！',
];

const timeLimit = 5 * 1000;
let startTime = 0;

export default {
  beforeMount () {
    this.site_create();
    // 初期位置
    window.addEventListener('scroll', this.scroll_watch);
  },
  mounted() {
    window.scrollTo(0, 0);
    document.title = 'スクロール大会'
    document.querySelector('meta[name="description"]').setAttribute('content', 'みんなでスクロールした距離で競い合ったら面白いんじゃね？と風呂入ってたら思った')
  },
  name: 'App',
  components: {
    Article,
    Modal,
    ResultModal,
    Header,
    Footer
  },
  data() {
    return {
      scroll: 0,
      height: 0,
      article_params: [{id: 1,headding: headdings[0], yt_title: yt_titles[0], yt_desc: yt_descs[0], article_cont: article_conts[0]}],
      index: 0,
      timerLeft: 5 * 1000,
      timerText: '5.00',
      timerInt: '5',
      timerFloot: '.00',
      isFinished: false,
      marginTop: 'mt-5',
      result: 0,
    }
  },
  methods: {
    scroll_start() {
      startTime = Date.now();
      this.updateTimer();
    },
    site_create() {
      for (let i = 0; i < 1000; i++) {
        this.create_article();
      }
    },
    scroll_watch() {
      this.scroll = window.pageYOffset;
    },

    create_article () {
      this.index++;
      this.article_params.push(
        {id: this.article_params.length+1,
        headding: headdings[this.index%headdings.length],
        yt_title: yt_titles[this.index%yt_titles.length],
        yt_desc: yt_descs[this.index%yt_descs.length],
        article_cont: article_conts[this.index%article_conts.length]}
      )
    },

    // stopTimer () {
    //   window.removeEventListener('scroll', this.site_create);
    // },

    updateTimer () {
    this.timerLeft = startTime + timeLimit - Date.now();

    const timeoutId = setTimeout(() => {
      this.updateTimer();
    }, 10);

    // ゲームオーバー
    if (this.timerLeft < 0) {
      this.result = this.scroll;
      this.isFinished = true;
      clearTimeout(timeoutId);
      // this.stopTimer();
    }

    this.updateTimerText();
  },

    updateTimerText () {
      this.timerText = (this.timerLeft / 1000).toFixed(2);

      this.timerInt = this.reverse(this.timerText).substr(3);
      this.timerInt = this.reverse(this.timerInt);
      this.timerFloot = this.timerText.substr(-3);

      if (this.timerLeft < 0) {
      this.timerInt = '0';
      this.timerFloot = '.00';
      }
    },

    reverse (word) {
      return word.split('').reverse().join('');
    }
  },
}
</script>

<style lang="scss">
html::-webkit-scrollbar {
  display: none;
}

.scroll {
  top: 0;
  left: 0;
}

.timer {
  top: 0;
  right: 0;
}

.container {
  width: 500px;
  margin: 0 auto;
}

@media screen and (max-width: 480px) {
  .container {
    width: auto;
  }
}

// body {
//   background: #f0eff0;
// }
</style>
