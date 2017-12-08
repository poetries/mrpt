
export const routeRules = [
    {
      path:'/login',
      component:require('@/containers/Login').default,
      exact:true
    },
    {
      path:'/search',
      component:require('@/containers/Search').default,
      exact:true
    },
    {
      path:'',
      component:require('@/components/DashBoard').default,
      exact:false
    }
]

export const navList = [
    {
        path:'/dashboard',
        text:'首页',
        icon:'home',
        title:'首页',
        component:require('@/containers/Home').default,
        exact:false
    },
    {
        path:'/customer',
        text:'客户',
        icon:'user',
        title:'客户',
        component:require('@/containers/Customer').default,
        exact:false
    }
]
