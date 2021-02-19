<template>
  <div class="house-wrap">
    <Monaco></Monaco>
  </div>
</template>
<script lang="ts">
import type {PropType} from 'vue';
import {Monaco} from "/@/components/CodeEdit/index"
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'House',
  components: {Monaco},
  props: {
    size: {
      type: Number as PropType<number>,
      default: 600,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
