<template>
  <audio
    id="audio"
    ref="audio"
    v-bind:volume="bgVolume"
    loop
    hidden="true"
  ></audio>
  <div class="mdui-container-fluid">
    <div class="mdui-row">
      <div class="mdui-progress">
        <div
          class="mdui-progress-determinate mdui-color-theme-accent"
          style="width: 30%; opacity: 1"
        ></div>
      </div>
      <div class="mdui-col-xs-12">
        <div class="mdui-float-left mdui-m-y-1">
          <i class="mdui-icon material-icons mdui-typo-body-1-opacity"
            >checklist</i
          >
          <span class="mdui-typo-body-1-opacity mdui-m-x-1">3 / 10</span>
          <i class="mdui-icon material-icons mdui-typo-body-1-opacity">timer</i>
          <span class="mdui-typo-body-1-opacity mdui-m-x-1">8s</span>
        </div>
        <div class="mdui-float-right">
          <button
            class="mdui-btn mdui-btn-icon mdui-ripple"
            mdui-dialog="{target: '#helpDialog'}"
            mdui-tooltip="{content: '帮助'}"
          >
            <i class="mdui-icon material-icons">help</i>
          </button>
          <button
            class="mdui-btn mdui-btn-icon mdui-ripple"
            mdui-dialog="{target: '#gojuuonSelectorDialog'}"
            mdui-tooltip="{content: '选择练习内容'}"
          >
            <i class="mdui-icon material-icons">fact_check</i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="mdui-container mdui-typo">
    <div class="mdui-row">
      <div
        class="mdui-col-xs-12 mdui-col-lg-6 mdui-col-offset-lg-3 mdui-col-md-8 mdui-col-offset-md-2 mdui-col-sm-10 mdui-col-offset-sm-1"
      >
        <div></div>
        <div class="mdui-col-xs-12 mdui-text-center mdui-m-y-2">
          <button
            class="mdui-btn mdui-btn-icon mdui-btn-raised mdui-color-theme-accent mdui-ripple"
            onclick="prepare()"
            mdui-tooltip="{content: '再来一组'}"
          >
            <i class="mdui-icon material-icons">refresh</i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="mdui-dialog" id="helpDialog">
    <div class="mdui-dialog-title">什么是快速模式？</div>
    <div class="mdui-dialog-content">
      <div class="mdui-container mdui-typo">
        <div class="row">
          <div class="mdui-col-xs-12 mdui-m-y-1">
            <p class="mdui-typo-body-2-opacity" style="text-indent: 2em">
              快速模式是一种迅速、简便的学习模式，适合在碎片化时间进行快速练习。
            </p>
            <p class="mdui-typo-body-2-opacity" style="text-indent: 2em">
              使用方法：选择需要练习的内容后，屏幕上会刷新一批字符。请读入一个字符，思考对应的内容，然后点击这个字符查看答案。如果您回答正确，请保留<strong
                class="mdui-text-color-green"
              >
                绿色 </strong
              >，如果您回答错误，请再次点击字符使得颜色变为<strong
                class="mdui-text-color-red"
              >
                红色 </strong
              >。该模式下后台程序将会记录您的作答结果，请保持自觉哦。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple" mdui-dialog-confirm>确定</button>
    </div>
  </div>
  <GojuuonSelectorDialog />
</template>

<style></style>

<script>
import mdui from "mdui";
import GojuuonSelectorDialog from "@/components/GojuuonSelectorDialog.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    mdui.mutation();
    this.$emit("updateAppbarTitle", "快速模式");
    // this.setPlayer();
  },
  inject: ["globalVariable"],
  components: {
    GojuuonSelectorDialog,
  },
  methods: {
    // setPlayer: function () {
    //   if (this.bg != "none") {
    //     this.$refs.audio.src = this.globalVariable.setting.zenBg;
    //     this.$refs.audio.volume = this.globalVariable.setting.bgVolume;
    //     this.$refs.audio.load();
    //     this.$refs.audio.play();
    //     localStorage.setItem(
    //       "setting",
    //       JSON.stringify(this.globalVariable.setting)
    //     );
    //   } else {
    //     this.$refs.audio.pause();
    //   }
    // },
  },
};
</script>
