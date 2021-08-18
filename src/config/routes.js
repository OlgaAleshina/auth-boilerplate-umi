export default [

    {
        path: '/',
        routes: [
          { path: '/login', component: '../pages/Auth/login/index' },
          { path: '/signup', component: '../pages/Auth/signup/index' },
        ]
      },
    /*{
        path: '/auth',
        component: '../pages/auth/_layout',
        routes: [
          { path: '/auth', component: '../pages/auth/index' },
          { path: '/auth/signup', component: '../pages/auth/signup' },
        ]
      },*/,
      {
        path: '/user',
        wrappers: ['../wrappers/auth'], 
        routes: [
          { path: '/user', component: '../pages/user/index', 
                routes: [
                    {path: '/user/profile', component: '../pages/user/profile',}
                ]
        }
        ]
      }
];