<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{  globalVariable.gojuuon["hiragana"]["a"][0] }}</h1>
  </div>
</template>

<script>
export default {
  inject:['globalVariable'],
}
</script>
