<template>
  <div class="mdui-col-xs-6 mdui-m-y-1">
    <div class="mdui-card mdui-hoverable mdui-ripple">
      <div class="mdui-card-content mdui-text-center" v-bind:style="fontStyle">
        <div class="mdui-m-y-2" style="font-size: 4em; line-height: 1em">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PractiseOptionCard",
  props: {
    fontStyle: String,
    option: String,
    // globalVariable,
  },
  inject: ["globalVariable"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
