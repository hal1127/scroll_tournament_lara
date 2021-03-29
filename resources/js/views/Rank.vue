<template>
  <div id="rank">
    <Header HiLight="ranking" />
    <div class="container p-3">
      <h1 class="heading">ランキング</h1>
      <table border="1" width="100%">
        <thead class="table-head">
          <tr>
            <th class="p-2" width="10%">順位</th>
            <th class="p-2">名前</th>
            <th class="p-2">スコア</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in ranking" :key="r.id" >
            <td class="p-2">{{ `${index+1}位` }}</td>
            <td class="p-2">{{ r.name }}</td>
            <td class="p-2">{{ r.score }}</td>
          </tr>
        </tbody>
      </table>
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
  mounted() {
    document.title = 'スクロール大会のランキング';
    document.querySelector('meta[name="description"]').setAttribute('content', 'みんなでスクロールした距離で競い合った結果');
    this.get_ranking();
  },
  data() {
    return {
      ranking: []
    }
  },
  methods: {
    get_ranking() {
      this.axios.get(`${location.protocol}//${window.location.host}/api/results`)
          .then(response => {
            // console.log(response)
            this.ranking = response.data;
          })
          .catch(error => {
            alert('失敗');
            // console.log(error);
          })
    }
  }
}
</script>
