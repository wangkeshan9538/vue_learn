<template>
	<div>
		<h3>{{mes}}</h3>
		<button v-on:click="onclick">click</button>
		<button v-on:click="tellfather">tell something</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mes: 'this is conponment-A'
			}
		},
		props: ['messagefromfaher'],
		methods: {
			onclick: function() {
				console.log(this);
				console.log(this.messagefromfaher);
			},
			tellfather:function(){
				this.$emit('childtellme',this.mes);
			}
		}
	}
</script>

<style>

</style>