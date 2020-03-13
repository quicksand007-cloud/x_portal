<<template>
    <div id="horizontalMenu">
        <el-menu
            default-active="LayoutMenu1"
            mode="horizontal"
            @open="handleOpen"
            @close="handleClose"
            router>
            <el-submenu v-if="hmenu != undefined && hmenu.length>0" v-for="item in hmenu" 
              :index="item.componentName" :key="item.componentName">
                <template slot="title">
                <span v-text="item.name"></span>
                </template>             
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>


export default {
    data:function(){
      return {
        hmenu:[]
      }
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>