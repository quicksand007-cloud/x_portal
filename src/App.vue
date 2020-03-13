<template>
  <div id="app">
    <el-container>
      <el-aside>
        <vertical-menu ref="verticalMenu"></vertical-menu>
      </el-aside>
      <el-container>
        <el-header>
          <horizontal-menu ref="horizontalMenu"></horizontal-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import VerticalMenu from '@/components/VerticalMenu';
  import HorizontalMenu from '@/components/HorizontalMenu';

  export default {
    name: 'App',
    components:{
      VerticalMenu:VerticalMenu,
      HorizontalMenu:HorizontalMenu
    }
    
  }
</script>

