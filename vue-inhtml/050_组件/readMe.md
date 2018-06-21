组件 的data 必须是一个函数

我们可以调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件

关键在于子组件怎么向外部传值 ， 感觉像是组件定义好 emi('event'') 然后再调用的时候在标签上注册好这个自定义方法，就能接受值

动态组件的作用在于组件的切换 ，和路由感觉并不是一个概念


一个复杂场景 ，如果一个组件 是一个input的形态 ，但是其内部却不是单纯的input， 如
```
 <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
```

这种情况 ，想在使用的时候 把原声的input事件绑定到input上 ，就不能 ，所以需要特殊手段来进行
https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
简单说就是在内部把所有的时间都绑定到input上，再处罚一下input事件，这个input时间其实是自定义 而不是native

实际上我发现 ，直接在组件内绑定input到原声的input标签 ，然后利用自定义方法，也可以做到直接帮定input方法到复杂input组件的效果
但是相对使用$listeners来说 需要定义很多的中间方法， 比较麻烦