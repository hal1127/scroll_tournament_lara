<template>
<header>
  <nav class="navbar navbar-expand navbar-dark fixed-top pb-0" style="background-color: #1995ad">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li :class="'nav-item '+homeClass">
            <router-link to="/" class="nav-link">ホーム</router-link>
          </li>
          <li :class="'nav-item '+rankClass">
            <router-link to="/ranking" class="nav-link">ランキング</router-link>
          </li>
          <li :class="'nav-item '+aboutClass">
            <router-link to="/about" class="nav-link">サイトについて</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  created() {
    this.homeClass = '';
    this.rankClass = '';
    this.aboutClass = '';

    switch (this.HiLight) {
      case 'home':
        this.homeClass = 'border-bottom border-white';
        break;
      case 'ranking':
        this.rankClass = 'border-bottom border-white';
        break;
      case 'about':
        this.aboutClass = 'border-bottom border-white';
        break;
    }
  },
  name: 'Header',
  props: {
    HiLight: String,
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
.border-bottom {
  border-bottom: 3px solid white !important;
}
.nav-item {
  font-weight: bold;
}
</style>