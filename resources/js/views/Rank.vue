<template>
  <div id="rank">
    <Header HLight="rank" />
    <div class="container p-3">
      <h1 class="heading">ランキング</h1>
      <table border="1" width="100%">
        <thead class="rank-head">
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
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header
  },
  mounted() {
    this.get_ranking();
  },
  data() {
    return {
      ranking: []
    }
  },
  methods: {
    get_ranking() {
      this.axios.get('http://localhost:8000/api/results')
          .then(response => {
            console.log(response)
            this.ranking = response.data;
          })
          .catch(error => {
            alert('失敗');
            console.log(error);
          })
    }
  }
}
</script>

<style lang="scss">
.rank-head {
  background-color: skyblue;
}
</style>
