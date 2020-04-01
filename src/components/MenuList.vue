<template>
   <div class="menu-box">
       <ul>
           <li v-for="(item,index) in menu"  @click="tab(index)"  @touchend="tab(index)" :class="{'active':num==index}"  :key="index">
               <i  :style="{ backgroundImage: 'url(' + item.url + ')' }"></i>
               <router-link :to="item.path">{{item.content}}</router-link>
           </li>
       </ul>
   </div>
</template>

<script>
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import f3 from '../assets/img/f3.png'
import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
export default {
    name:'MenuList',
    data(){
        return {
            num:window.sessionStorage.number||0,
            menu:[{
                path:'/',
                content:'首页',
                url: f1
            },{
                path:'/information',
                content:'资讯',
                url: f2
            },{
                path:'/movie',
                content:'电影',
                url: f3
            },{
                path:'/netplay',
                content:'网剧',
                url: f4
            },{
                path:'/SpecialReport',
                content:'专题',
                url: f5
            }]
        }
    },
    methods:{
        tab(index){
            this.num = index;
            window.sessionStorage.number = index;
        }
    }
}
</script>

<style>
.menu-box{
    width: 10rem;
    position: fixed;
    bottom: 0;       
    border-top: .013333rem  solid #e2e2e2;
}
.menu-box>ul{
    list-style: none;
    overflow: hidden;
    background: #fff;
}
.menu-box>ul>li{
    float: left;
    width: 20%;
    text-align: center;
    background-color: #fbfcfc;
    color: #666666;
    padding-top: .2rem;
}
.menu-box>ul>li>i{
    display: block;
    width: .533333rem;
    height: .533333rem;
    background: no-repeat -.533333rem 0;
    background-size: 1.066667rem .533333rem;
    margin: 0 auto;
    cursor: pointer;
}
.menu-box>ul>li>a{
    display: block;
    text-decoration: none;
    color:inherit;
    height: .586667rem;
    line-height: .586667rem;
}
.menu-box>ul>li.active{
    color: #2a98da;
}
.menu-box>ul>li.active i{
    background-position: 0 0;
}
</style>
