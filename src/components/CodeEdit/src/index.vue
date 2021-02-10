<template>
  <div id="monaco"></div>
</template>

<script lang="ts">
import loader from '@monaco-editor/loader';
import {onMounted, defineComponent} from 'vue'

export default defineComponent({
  name: "monaco",
  setup() {
    onMounted(() => {
      loader.init().then(monaco => {
        loader.init().then((monaco) => {
          monaco.editor.create(document.querySelector("#monaco"), {
            value: "// some comment",
            language: "javascript"
          });
        });
      });
    })
    return {
      onMounted
    }
  }
})
</script>

<style scoped>

</style>