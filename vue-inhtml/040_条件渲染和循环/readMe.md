v-if 竟然可以即时的按照值来渲染 

Vue 会尽可能高效地渲染元素，通常会**复用**已有元素而不是从头开始渲染
如果想禁止复用 ，请给可能会被复用的标签带上key属性
```<template v-if="loginType === 'username'">
     <label>Username</label>
     <input placeholder="Enter your username" key="username-input">
   </template>
   <template v-else>
     <label>Email</label>
     <input placeholder="Enter your email address" key="email-input">
   </template>
   ```
v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。