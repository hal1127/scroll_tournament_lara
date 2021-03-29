<template>
  <nav class="navbar navbar-expand navbar-light pb-0 pt-3 mb-sm-4" style="background-color: #1995ad">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li :class="'nav-item align-bottom '+topClass">
          <router-link to="/" class="text-white px-2 pb-3" style="text-decoration: none;">ホーム</router-link>
        </li>
        <li :class="'nav-item align-bottom '+rankClass">
          <router-link to="/rank" class="text-white px-2 pb-3" style="text-decoration: none;">ランキング</router-link>
        </li>
        <li :class="'nav-item align-bottom '+aboutClass">
          <router-link to="/about" class="text-white px-2 pb-3" style="text-decoration: none;">サイトについて</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    this.topClass = '';
    this.rankClass = '';
    this.aboutClass = '';

    switch (this.HLight) {
      case 'top':
        this.topClass = 'bdr';
        break;
      case 'rank':
        this.rankClass = 'bdr';
        break;
      case 'about':
        this.aboutClass = 'bdr';
        break;
    }
  },
  name: 'Header',
  props: {
    HLight: String,
  },
  deta() {
    return {
      topClass: 'bdr',
      rankClass: '',
      aboutClass: '',

    }
  },
}
</script>

<style lang="scss">
.bdr {
  border-bottom: white solid 5px;
}

a:hover {
  opacity: 0.8;
}

</style>