export default [{
        name: '基础',
        id: 'basic',
        children: [{
            name: 'Layout 布局',
            componentName: 'BasicLayout',
            children:[{
              name: 'Layout 横向111111',
              componentName: 'LayoutMenu1'
            },{
              name: 'Layout 横向222222',
              componentName: 'LayoutMenu2'
            }]
        }, {
            name: 'Container 布局容器',
            componentName: 'BasicContainer'
        }]
    },
    {
        name: 'Form',
        id: 'form',
        children: [{
            name: 'Radio 单选框',
            componentName: 'FormRadio'
        }, {
            name: 'Checkbox 多选框',
            componentName: 'FormCheckbox'
        }]
    }
];