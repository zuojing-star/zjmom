export default {
  title: 'BIM',
  cookieExpires: 1,
  useI18n: true,
  baseUrl: {
    dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    pro: 'https://produce.com'
  },
  homeName: 'home'
}

/*
  title ：配置显示在浏览器标签的title
  cookieExpires ：token在Cookie中存储的天数，默认1天
  useI18n ：是否使用国际化，默认为false.  如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: { title: 'xxx' } 用来在菜单中显示文字
  baseUrl ：mock api请求基础路径
  homeName : 默认打开的首页的路由name值，默认为home
*/
