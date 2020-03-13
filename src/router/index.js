import Vue from 'vue';
import Router from 'vue-router';
import menus from '@/config/menu-config';

Vue.use(Router);

var routes = [];

function buildChildren(child) {
    var children = child.children;
    var temp = [];
    if (children !== null && children !== '' && children !== undefined) {
        children.forEach((item) => {
            temp.push({
                path: `/${item.componentName}`,
                name: item.componentName,
                component: () =>
                    import (`@/components/${item.componentName}`)
            });
        });
    }
    return temp;
}

menus.forEach((item) => {
    item.children.forEach((child) => {
        routes.push({
            path: `/${child.componentName}`,
            name: child.componentName,
            component: () =>
                import (`@/components/${child.componentName}`),
            children: buildChildren(child)
        });
    });
});

export default new Router({ routes });