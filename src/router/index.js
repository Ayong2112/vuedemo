import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var routes = [
    {
        path: '/',
        component: resolve => require(['../components/HelloWorld.vue'], resolve),
        children: [
            {
                path: '/home',
                component: resolve => require(['../views/Home'], resolve)
            }
        ]
    },
    {
      path:'/myhome',
      component:resolve=>require(['../views/myHome.vue'],resolve),
      children:[
            {
                path: '/index',
                component: resolve => require(['../views/index.vue'], resolve)
            },
            {
                path: '/newindex',
                component: resolve => require(['../views/newindex.vue'], resolve)
            }
      ]
    }
]
// router.beforeEach((to, from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
//     next()
// })
export default new Router({
    mode: 'history',
    routes: routes
})


