<template>
  <div class="mdui-container mdui-typo">
    <div class="mdui-row">
      <div class="mdui-xs-12">
        <div class="mdui-typo-display-1 mdui-m-t-3">五十音图</div>
      </div>
      <div class="mdui-xs-12">
        <div class="mdui-typo-headline-opacity mdui-m-t-3">清音</div>
      </div>
      <!-- Seion -->
      <div class="mdui-xs-12">
        <div class="mdui-table-fluid">
          <table class="mdui-table mdui-table-hoverable">
            <thead>
              <tr>
                <th></th>
                <th class="mdui-text-center">あ段</th>
                <th class="mdui-text-center">い段</th>
                <th class="mdui-text-center">う段</th>
                <th class="mdui-text-center">え段</th>
                <th class="mdui-text-center">お段</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="line in globalVariable.gojuuon['seion']['lines']"
                :key="line"
              >
                <td>
                  <div class="mdui-text-center" v-if="line != '-'">
                    {{
                      globalVariable.gojuuon["seion"]["hiragana"][line][0]
                    }}行<br />{{ line }}
                  </div>
                </td>
                <template
                  v-for="(value, index) in globalVariable.gojuuon['seion'][
                    'hiragana'
                  ][line]"
                  :key="index"
                >
                  <td
                    class="mdui-text-center mdui-typo"
                    v-if="
                      globalVariable.gojuuon['seion']['hiragana'][line]
                        .length == 1
                    "
                    v-bind:name="'s' + '_' + line + '_' + index"
                    colspan="5"
                  >
                    <!-- ん -->
                    <TableGojuuonCell
                      on="seion"
                      v-bind:index="index"
                      v-bind:line="line"
                      v-bind:romanization="romanization"
                    ></TableGojuuonCell>
                  </td>
                  <td
                    v-else
                    class="mdui-text-center mdui-typo"
                    v-bind:name="'s' + '_' + line + '_' + index"
                  >
                    <TableGojuuonCell
                      on="seion"
                      v-bind:index="index"
                      v-bind:line="line"
                      v-bind:romanization="romanization"
                    ></TableGojuuonCell>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mdui-xs-12">
        <div class="mdui-typo-headline-opacity mdui-m-t-3">浊音</div>
      </div>
      <!-- Dakuon -->
      <div class="mdui-xs-12">
        <div class="mdui-table-fluid">
          <table class="mdui-table mdui-table-hoverable">
            <thead>
              <tr>
                <th></th>
                <th class="mdui-text-center">あ段</th>
                <th class="mdui-text-center">い段</th>
                <th class="mdui-text-center">う段</th>
                <th class="mdui-text-center">え段</th>
                <th class="mdui-text-center">お段</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="line in globalVariable.gojuuon['dakuon']['lines']"
                :key="line"
              >
                <td>
                  <div class="mdui-text-center" v-if="line != '-'">
                    {{
                      globalVariable.gojuuon["dakuon"]["hiragana"][line][0]
                    }}行<br />{{ line }}
                  </div>
                </td>
                <template
                  v-for="(value, index) in globalVariable.gojuuon['dakuon'][
                    'hiragana'
                  ][line]"
                  :key="index"
                >
                  <td
                    class="mdui-text-center mdui-typo"
                    v-bind:name="'d' + '_' + line + '_' + index"
                  >
                    <TableGojuuonCell
                      on="dakuon"
                      v-bind:index="index"
                      v-bind:line="line"
                      v-bind:romanization="romanization"
                    ></TableGojuuonCell>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mdui-xs-12">
        <div class="mdui-typo-headline-opacity mdui-m-t-3">拗音</div>
      </div>
      <!-- Youon -->
      <div class="mdui-xs-12">
        <div class="mdui-table-fluid">
          <table class="mdui-table mdui-table-hoverable">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="line in globalVariable.gojuuon['youon']['lines']"
                :key="line"
              >
                <td>
                  <div class="mdui-text-center" v-if="line != '-'">
                    {{
                      typeof globalVariable.gojuuon["seion"]["hiragana"][
                        line
                      ] == "undefined"
                        ? globalVariable.gojuuon["dakuon"]["hiragana"][line][0]
                        : globalVariable.gojuuon["seion"]["hiragana"][line][0]
                    }}行<br />{{ line }}
                  </div>
                </td>
                <template
                  v-for="(value, index) in globalVariable.gojuuon['youon'][
                    'hiragana'
                  ][line]"
                  :key="index"
                >
                  <td
                    class="mdui-text-center mdui-typo"
                    v-bind:name="'y' + '_' + line + '_' + index"
                  >
                    <TableGojuuonCell
                      on="youon"
                      v-bind:index="index"
                      v-bind:line="line"
                      v-bind:romanization="romanization"
                    ></TableGojuuonCell>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mdui from "mdui";
import TableGojuuonCell from "@/components/TableGojuuonCell.vue";

export default {
  name: "Table",
  components: {
    TableGojuuonCell,
  },
  data() {
    return {
      romanization: "hepburn-romanization",
    };
  },
  inject: ["globalVariable"],
  mounted() {
    this.$emit("updateAppbarTitle", "五十音图");
    mdui.mutation();
  },
};
</script>
