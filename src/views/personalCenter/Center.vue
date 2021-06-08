<template>
  <div class="mdui-container-fluid">
    <div class="mdui-row">
      <div class="mdui-col-xs-12">
        <ul class="mdui-list">
          <li class="mdui-subheader">账号与同步</li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons"
              >account_circle</i
            >
            <div class="mdui-list-item-content">登录</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons"
              >app_registration
            </i>
            <div class="mdui-list-item-content">注册</div>
          </li>
          <li class="mdui-subheader">学习记录</li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons"
              >assessment</i
            >
            <div class="mdui-list-item-content">学习情况</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
            <div class="mdui-list-item-content">清空学习记录</div>
          </li>
          <li class="mdui-subheader">环境设定</li>
          <li
            class="mdui-list-item mdui-ripple"
            v-on:click="this.$router.push('/personalCenter/setting')"
          >
            <i class="mdui-list-item-icon mdui-icon material-icons">settings</i>
            <div class="mdui-list-item-content">设置</div>
          </li>
          <li class="mdui-subheader">其他</li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">info</i>
            <div class="mdui-list-item-content">关于</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import mdui from "mdui";

export default {
  inject: ["globalVariable"],
};
</script>
