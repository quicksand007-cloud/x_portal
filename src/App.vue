<template>
  <div id="app">
    <el-container>
      <el-aside>
        <vertical-menu></vertical-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import VerticalMenu from '@/components/VerticalMenu'

  export default {
    name: 'App',
    components:{
      VerticalMenu:VerticalMenu
    }
    
  }
</script>

