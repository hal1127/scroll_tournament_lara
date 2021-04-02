<template>
  <transition name="fade"><!-- transitionは不要なら外してOK -->
    <div v-if="disp_modal">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">始めますか？</h4>
              <button type="button" class="close" @click="close_modal">×</button>
            </div>
            <div class="modal-body">
              <p>ボタンを押すとスタート</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="scroll_start">スタート</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop show"></div>
    </div>
  </transition>
</template>

<script>
  function scroll_control(event) {
    event.preventDefault();
  }

export default {
  mounted() {
    this.no_scroll();
  },
  name: 'Modal',
  data(){
    return {
      disp_modal: true,
    }
  },
  props: {

  },
  methods: {
    scroll_start() {
      this.disp_modal = false;
      this.return_scroll();
      window.scrollTo(0, 0);
      this.$emit('scroll_start');
    },
    close_modal() {
      this.disp_modal = false;
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
    }
  }
}
</script>