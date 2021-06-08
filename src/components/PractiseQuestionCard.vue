<template>
  <div class="mdui-row">
    <div class="mdui-col-xs-12 mdui-m-y-1">
      <div class="mdui-card mdui-hoverable mdui-ripple">
        <div
          class="mdui-card-content mdui-text-center"
          v-bind:style="fontStyle"
        >
          <div class="mdui-m-y-2" style="font-size: 6em; line-height: 1em">
            あ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PractiseQuestionCard",
  props: {
    fontStyle: String,
    question: String,
    // globalVariable,
  },
  inject: ["globalVariable"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
