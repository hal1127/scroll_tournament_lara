<template>
  <transition name="fade"><!-- transitionは不要なら外してOK -->
    <div v-if="sample_modal">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">{{Math.floor(result).toLocaleString()+'px'}}</h1>
              <button type="button" class="close" @click="close_modal">×</button>
            </div>
            <form>
              <div class="modal-body">
                <h5>結果を記録しよう！</h5>
                <label for="name">名前</label>
                <p :class="'float-right text-' + (letsSubmit ? 'muted' : 'danger')">{{charLen}}/10</p>
                <input type="text" name="name" id="name" class="w-100" v-model="name" >

              </div>
              <div class="modal-footer">
                <button v-if="letsSubmit" type="submit" id="submit" class="btn btn-primary" @click="onSubmit">記録</button>
                <button v-else class="btn btn-secondary" @click="noReload">記録</button>
                <button type="submit" class="btn btn-danger" @click="close_modal">キャンセル</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="modal-backdrop show"></div>
    </div>
  </transition>
</template>

<script>
// import $ from 'jquery'

  function scroll_control(event) {
    event.preventDefault();
  }
export default {
  mounted() {
    this.no_scroll();
  },
  name: 'ResultModal',
  data(){
    return {
      sample_modal: true,
      name: '',
      charLen: 0,
      letsSubmit: false,
    }
  },
  props: {
    result: Number,
  },
  methods: {
    close_modal(e) {
      e.preventDefault();

      this.sample_modal = false;
      this.return_scroll();
    },
    no_scroll() {
      // PCでのスクロール禁止
      document.addEventListener("mousewheel", scroll_control, { passive: false });
      // スマホでのタッチ操作でのスクロール禁止
      document.addEventListener("touchmove", scroll_control, { passive: false });
    },
    return_scroll() {
      // PCでのスクロール禁止解除
      document.removeEventListener("mousewheel", scroll_control, { passive: false });
      // スマホでのタッチ操作でのスクロール禁止解除
      document.removeEventListener('touchmove', scroll_control, { passive: false });
    },
    onSubmit(e) {
      e.preventDefault();

      const value = this.name.replace(/\s+/g, '');
      if (value === '') {
        return;
      }

      console.log(`name: ${value}`);
      console.log(`scroll: ${Math.floor(this.result)}`);

      const data = {name: value, score: Math.floor(this.result)};
      this.axios.post(`${location.protocol}//${window.location.host}/api/results`, data)
          .then(() => {

            location.href=`http://${window.location.host}/ranking`;
            // console.log(response);
          })
          .catch(errors => {
            alert(JSON.stringify(errors.response.data));
            // console.log(errors.response);
          })

      this.close_modal(e);
    },
    noReload(e) {
      e.preventDefault();
    }
  },
  watch: {
    name: {
      handler() {
        this.charLen = this.name.replace(/\s+/g, '').length;
        if (this.charLen > 0 && this.charLen <= 10) {
          this.letsSubmit = true;
        } else {
          this.letsSubmit = false;
        }
      }
    },
  },
}
</script>

<style>
/* 表示/非表示はvueで制御するので最初から表示状態にする */
.modal {
  display: block;
}

/* vueのtransitionを使わないなら不要 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>