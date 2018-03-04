<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul >
    	<input type="text" v-model="newitem" v-on:keyup.enter="addnew"/>
    	<li v-for="item in items" v-bind:class="{finished:item.isfinished}" v-on:click="transform(item)"> 
    		{{item.label}}
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //es6语法，相当于 data: function(){}
  data () {
    return {
      title: 'this is a todo list',
      items:[
      {
      	label:"coding",
      	isfinished:false
      },
      {
      	label:"walking",
      	isfinished:true
      	
      }
      ],
      newitem:''
    }
  },
  methods:{
  	transform:function(item){
  		item.isfinished=!item.isfinished;
  	},
  	addnew:function(){
  		//this指向 vue实例 
  		//console.log(this);
  		//此处更新items会直接让前端再次渲染，说明前端的v-for是双向绑定的方式，而不是一次渲染就结束的方式
  		this.items.push({
  			label:this.newitem,
  			isfinished:"false"
  		});
  		this.newitem='';
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.finished {
	text-decoration: line-through;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  #display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
