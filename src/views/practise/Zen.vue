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
      <div class="mdui-progress mdui-invisible">
        <div
          class="mdui-progress-determinate mdui-color-theme-accent"
          style="width: 30%; opacity: 1"
        ></div>
      </div>
      <div class="mdui-col-xs-12">
        <div class="mdui-float-left mdui-m-y-1 mdui-invisible">
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
          <button
            class="mdui-btn mdui-btn-icon mdui-ripple"
            mdui-dialog="{target: '#settingDialog'}"
            mdui-tooltip="{content: '设定'}"
          >
            <i class="mdui-icon material-icons">settings</i>
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
          fontStyle="font-family: 'Noto Serif SC'; font-weight: 200"
        ></PractiseQuestionCard>
        <hr />
        <div class="mdui-row">
          <template
            v-for="(option, index) in ['a', 'e', 'o', 'u']"
            :key="index"
          >
            <PractiseOptionCard
              v-bind:option="option"
              fontStyle="font-family: 'Noto Serif SC'; font-weight: 200"
            >
            </PractiseOptionCard>
          </template>
        </div>
      </div>
    </div>
  </div>

  <div class="mdui-dialog" id="settingDialog">
    <div class="mdui-dialog-title">设置</div>
    <div class="mdui-dialog-content" style="overflow: visible">
      <div class="mdui-container mdui-typo">
        <div class="row">
          <div class="mdui-col-xs-12 mdui-m-y-1">
            <div class="mdui-typo-subheading-opacity">背景音</div>
          </div>
          <div class="mdui-col-xs-12 mdui-m-b-2">
            <select
              v-model="globalVariable.setting.zenBg"
              id="bg"
              class="mdui-select"
              mdui-select
            >
              <option value="../audio/鹿威.m4a" selected>鹿威</option>
              <option value="../audio/水车.m4a">水车</option>
              <option value="none">无</option>
            </select>
          </div>
          <div class="mdui-col-xs-12 mdui-m-y-1">
            <div class="mdui-typo-subheading-opacity">背景音音量</div>
          </div>
          <div class="mdui-col-xs-12 mdui-m-b-1">
            <label class="mdui-slider">
              <input
                v-model="globalVariable.setting.bgVolume"
                type="range"
                step="0.01"
                min="0"
                max="1.0"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple" mdui-dialog-close>取消</button>
      <button
        class="mdui-btn mdui-ripple"
        @click="setPlayer"
        mdui-dialog-confirm
      >
        确认
      </button>
    </div>
  </div>

  <div class="mdui-dialog" id="helpDialog">
    <div class="mdui-dialog-title">什么是禅模式？</div>
    <div class="mdui-dialog-content">
      <div class="mdui-container mdui-typo">
        <div class="row">
          <div class="mdui-col-xs-12 mdui-m-y-1">
            <p class="mdui-typo-body-2-opacity" style="text-indent: 2em">
              禅模式灵感来源于日本禅宗。在禅模式中，我们<strong>不希望您有太大的压力，希望您抛弃对于成败得失的执念，专心于屏幕上的五十音</strong>。
            </p>
            <p class="mdui-typo-body-2-opacity" style="text-indent: 2em">
              在禅模式中，学习流程与普通练习相同，但<strong>答题过程没有时间限制，同时该模式下的作答结果不会在后台进行记录</strong>。此外，我们也为您提供数种空灵的背景音乐，您可以自行选用是否开启。
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
    return {
      // bg: "../audio/鹿威.m4a",
      // bgVolume: 0.6,
    };
  },
  mounted() {
    mdui.mutation();
    this.$emit("updateAppbarTitle", "禅模式");
    this.setPlayer();
  },
  inject: ["globalVariable"],
  components: {
    GojuuonSelectorDialog,
    PractiseOptionCard,
    PractiseQuestionCard,
  },
  methods: {
    setPlayer: function () {
      if (this.bg != "none") {
        this.$refs.audio.src = this.globalVariable.setting.zenBg;
        this.$refs.audio.volume = this.globalVariable.setting.bgVolume;
        this.$refs.audio.load();
        this.$refs.audio.play();
        localStorage.setItem(
          "setting",
          JSON.stringify(this.globalVariable.setting)
        );
      } else {
        this.$refs.audio.pause();
      }
    },
  },
};
</script>
