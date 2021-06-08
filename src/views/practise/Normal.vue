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
        class="mdui-col-xs-12 mdui-col-lg-6 mdui-col-offset-lg-3 mdui-col-md-8 mdui-col-offset-md-2 mdui-col-sm-10 mdui-col-offset-sm-1 test-area"
      >
        <PractiseQuestionCard
          question="あ"
          fontStyle=" font-weight: 200"
        ></PractiseQuestionCard>
        <hr />
        <div class="mdui-row">
          <template
            v-for="(option, index) in ['a', 'e', 'o', 'u']"
            :key="index"
          >
            <PractiseOptionCard
              v-bind:option="option"
              fontStyle="font-weight: 200"
            >
            </PractiseOptionCard>
          </template>
        </div>
      </div>
    </div>
  </div>

  <div class="mdui-dialog" id="helpDialog">
    <div class="mdui-dialog-title">什么是普通模式？</div>
    <div class="mdui-dialog-content">
      <div class="mdui-container mdui-typo">
        <div class="row">
          <div class="mdui-col-xs-12 mdui-m-y-1">
            <p class="mdui-typo-body-2-opacity" style="text-indent: 2em">
              普通模式是普通的练习模式。每一道题目都会有限定时间，您需要在限定时间内完成答题。回答结果将会被记录。
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

<style>
.test-area {
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding-top: calc((100vh - 500px - 64px - 192px - 40px) * 0.8);
}
@media (max-width: 1023.9px) {
  .test-area {
    display: flex;
    flex-direction: column;
    min-height: 500px;
    padding-top: calc((100vh - 500px - 56px - 40px) * 0.8);
  }
}
</style>

<script>
import mdui from "mdui";
import GojuuonSelectorDialog from "@/components/GojuuonSelectorDialog.vue";
import PractiseOptionCard from "@/components/PractiseOptionCard.vue";
import PractiseQuestionCard from "@/components/PractiseQuestionCard.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    mdui.mutation();
    this.$emit("updateAppbarTitle", "普通模式");
    // this.setPlayer();
  },
  inject: ["globalVariable"],
  components: {
    GojuuonSelectorDialog,
    PractiseOptionCard,
    PractiseQuestionCard,
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
