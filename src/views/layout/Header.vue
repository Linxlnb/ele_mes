<template>
  <div class="flex">
    <span class="logo">
      <el-icon style="margin-right: 0.5rem"><UploadFilled /></el-icon>
      mes系统
    </span>
    <el-icon class="icon-btn"><Operation /></el-icon>
    <el-icon class="icon-btn"><RefreshRight /></el-icon>
    <div class="right">
      <el-icon class="icon-btn" @click="full"><FullScreen /></el-icon>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar :size="25" :src="circleUrl" style="margin-right: 8px" />
          昵称
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="refPassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
const circleUrl =
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const handleCommand = (c) => {
  console.log(c)
}
</script>
<style scopde>
.flex {
  display: flex;
  align-items: center;
  height: 64px;
  color: white;
  background-color: #27ae60;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.logo {
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 100;
}
.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover {
  background-color: #2ecc71;
}
.dropdown {
  height: 64px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 0.5px;
}
.dropdown:hover {
  border: none;
}
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 100px 0 50px;
}
</style>
