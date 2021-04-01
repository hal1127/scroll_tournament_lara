<template>
<header>
  <nav class="navbar navbar-expand navbar-dark fixed-top pb-0" style="background-color: #1995ad">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li :class="'nav-item '+homeClass">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li :class="'nav-item '+rankClass">
            <router-link to="/ranking" class="nav-link">Ranking</router-link>
          </li>
          <li :class="'nav-item '+helpClass">
            <router-link to="/help" class="nav-link">Help</router-link>
          </li>
          <li :class="'nav-item '+aboutClass">
            <router-link to="/about" class="nav-link">About Me</router-link>
          </li>
          <li class="nav-item">
            <a href="/secrets-f2n5gufpe7" class="nav-link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
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
    this.helpClass = '';

    switch (location.pathname) {
      case '/':
        this.homeClass = 'border-bottom border-white';
        break;
      case '/ranking':
        this.rankClass = 'border-bottom border-white';
        break;
      case '/about':
        this.aboutClass = 'border-bottom border-white';
        break;
      case '/help':
        this.helpClass = 'border-bottom border-white';
        break;
    }
  },
  name: 'Header',
  deta() {
    return {
      topClass: 'bdr',
      rankClass: '',
      aboutClass: '',
      helpClass: '',

    }
  },
}
</script>

<style lang="scss">
header .border-bottom {
  border-bottom: 3px solid white !important;
}
.nav-item {
  font-weight: bold;
  &:hover {
    border-bottom: 3px solid rgba($color: #fff, $alpha: .7);
  }
}
</style>