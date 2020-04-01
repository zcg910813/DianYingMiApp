import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{       //定义状态（初始化状态）   状态数据共享
        count:10
    },
    getters:{
        dosome(state){      //定义派生状态
            return state.count += 5;
        }
    },
    mutations:{
        m1(state){
            state.count++;
        }
    }
})