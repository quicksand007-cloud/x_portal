<<template>
    <div id="verticalMenu">
        <el-menu
            default-active="BasicLayout"
            mode="vertical"
            @open="handleOpen"
            @close="handleClose"
            router>
            <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                <template slot="title">
                <span v-text="item.name"></span>
                </template>
                <el-menu-item v-for="sub in item.children" :key="sub.componentName"
                    :index="sub.componentName" v-text="sub.name" @click="openHorizontal(sub)">
                </el-menu-item>               
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import menu from '@/config/menu-config';
import HorizontalMenu from '@/components/HorizontalMenu'

export default {
    components:{
      HorizontalMenu:HorizontalMenu
    },
    data:function(){
        return {
            menu:menu,
            horizontalMenu:[]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        openHorizontal(sub){
           var horizontalMenu = window.vm.$children[0].$refs["horizontalMenu"];
           horizontalMenu.hmenu = sub.children;
        }
    }
}
</script>
<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>