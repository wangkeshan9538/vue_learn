import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



let store_meta={
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}

 var vue_store=new Vuex.Store(store_meta);

export {vue_store};

// class vuex_instance{
//   constructor(){
//     this._param=store
//   }
//   set vuestr(value){
//     this._vuestr=value;
//   }
//   get vuestr(){
//     return this._vuestr;
//   }
//   get param(){
//       return this._param;
//   }
//   set param(value){
//     this._param=value;
//   }


