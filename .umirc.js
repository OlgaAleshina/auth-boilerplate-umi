
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  /*routes: [
    {
      path: '/auth',
      component: '../pages/auth/_layout',
      routes: [
        { path: '/auth', component: '../pages/auth/index' },
        { path: '/auth/signup', component: '../pages/auth/signup' },
      ]
    },
    {
      path: '/',
      component: '../layouts/BasicLayout/index',
      routes: [
        { path: '/', redirect: '/user' },
        { path: '/user', component: '../pages/user/index', //wrappers: ['../wrappers/auth'], 
        routes: [
          {path: '/user/profile', component: '../pages/user/profile/index.js',}
        ]
      }
      ]
    }
  ],*/
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'auth-boilerplate',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
