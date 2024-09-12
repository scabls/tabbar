<template>
  <div class="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">搜索</div>
    <div class="tab-bar-item">联系人</div>
    <div class="tab-bar-item">设置</div>
  </div>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  background-color: lightblue;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);
}
.tab-bar-item {
  flex: 25%;
  text-align: center;
  align-content: center;
  color: #fff;
}
</style>
