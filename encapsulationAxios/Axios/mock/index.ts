import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: 'weizhu',
          age:24
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      data: {
        message: '恭喜你登录成功!',
      },
    },
  }
] as MockMethod[]