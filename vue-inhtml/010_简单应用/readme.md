1. 组建是注册在Vue对象上的，而不是注册在new出来的app上的
所以注册的方法是 ，要卸载new app之前，
```apple js
    Vue.component('todo-item', {
        template: '<li>这是个待办项</li>'
    });
```
