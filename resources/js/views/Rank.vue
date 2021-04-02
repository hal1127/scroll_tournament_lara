<template>
  <div id="rank">
    <Header />
    <div class="container-main container">
      <h1 class="heading">ランキング</h1>
      <div class="container">
        <table class="results" border="1" width="100%">
          <thead class="table-head">
            <tr>
              <th class="p-2">順位</th>
              <th class="p-2">名前</th>
              <th class="p-2">スコア</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in ranking" :key="r.id" >
              <td class="p-2">{{ `${index+1}位` }}</td>
              <td class="p-2">{{ r.name }}</td>
              <td class="p-2">{{ r.score.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 class="heading">隠しページ</h1>
      <div class="container">
        <table class="secret" border="1" width="100%">
          <thead class="table-head">
            <tr>
              <th class="p-2">サイト</th>
              <th class="p-2">発見した人数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in secrets" :key="s.id" >
              <td class="p-2">{{ s.id }}</td>
              <td class="p-2">{{ s.count }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
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
  beforeMount() {
    },
  mounted() {
    document.title = 'スクロール大会のランキング';
    document.querySelector('meta[name="description"]').setAttribute('content', 'みんなでスクロールした距離で競い合った結果');
    this.create_ranking();
    this.create_secrets();
    this.get_ranking();
    this.get_secrets();
  },
  data() {
    return {
      ranking: [],
      secrets: []
    }
  },
  methods: {
    get_ranking() {
      this.axios.get(`${location.protocol}//${window.location.host}/api/results`)
          .then(response => {
            // console.log(response);
            this.ranking = response.data;
            // console.log(this.ranking);
          })
          .catch(error => {
            // console.log(error);
            alert(JSON.stringify(error.response.data));
          });
    },
    get_secrets() {
      this.axios.get(`${location.protocol}//${window.location.host}/api/secrets`)
          .then(response => {
            // console.log(response);
            this.secrets = response.data;
            // console.log(this.secrets);
          })
          .catch(error => {
            // console.log(error);
            alert(JSON.stringify(error.response.data));
          });
    },
    create_ranking() {
      let ranking = [];
      for (let i=0; i<10; i++) {
        ranking.push({id: i, name: '', score: 0});
      }
      // console.log(ranking);
      this.ranking = ranking;
    },
    create_secrets() {
      let secrets = [];
      for (let i=0; i<3; i++) {
        secrets.push({id: i+1, count: 0});
      }
      // console.log(ranking);
      this.secrets = secrets;
    }
  }
}
</script>
