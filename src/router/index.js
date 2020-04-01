import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import MoviePage from '../components/MoviePage'
import NetshowPage from '../components/NetshowPage'
import InformationPage from '../components/Information'
import LetTers from '../components/Letters'
import HollyWood from '../components/HollyWood'
import GossIp from '../components/GossIp'
import SpecialReport from '../components/SpecialReport'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },{
      path: '/movie',
      name: 'moviepage',
      component: MoviePage
    },{
      path: '/netplay',
      name: 'netshowpage',
      component: NetshowPage
    },{
      path: '/information',
      name: 'informationpage',
      component: InformationPage,
      children: [{
          path: "/information/letters",
          name:'letters',
          component: LetTers
        }, {
          path: "/information/Hollywood",
          component: HollyWood
        }, {
          path: "/information/GossIp",
          component: GossIp
        },{
          path: '/information',
          redirect: '/information/letters'
        }]
    },{
      path: '/SpecialReport',
      name: 'SpecialReport',
      component: SpecialReport
    }
  ]
})
