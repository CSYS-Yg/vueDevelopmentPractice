/*
 * @Author: Yx_Zou 
 * @Description: '' 
 * @Date: 2019-08-19 13:35:45 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-19 14:53:52
 */
<template>
  <li class="item">
    <input type="checkbox" v-model="checked" />
    <slot name="item" v-bind="{checked}"></slot>
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      checked: false
    };
  }
};
</script>
<style scoped>
.item {
  color: red;
}
</style>