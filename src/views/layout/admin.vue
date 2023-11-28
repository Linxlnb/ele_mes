<script setup>
import Headers from '@/views/layout/Header.vue'
import Asides from '@/views/layout/Asides.vue'
import TagList from '@/views/layout/TagList.vue'
</script>
<template>
  <div>
    <el-container>
      <el-header>
        <Headers />
      </el-header>
      <el-container>
        <!-- 侧边 -->
        <el-aside width="200px">
          <Asides />
        </el-aside>
        <el-main>
          <!-- 标签导航 -->
          <TagList />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>
