<<template>
    <div id="verticalMenu">
        <el-menu
            default-active="2"
            mode="vertical"
            @open="handleOpen"
            @close="handleClose"
            router>
            <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                <template slot="title">
                <span v-text="item.name"></span>
                </template>
                <el-menu-item v-for="sub in item.sub" :key="sub.componentName":index="sub.componentName" v-text="sub.name">
                </el-menu-item>               
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import menu from '@/config/menu-config'

export default {
    data:function(){
        return {
            menu:menu
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