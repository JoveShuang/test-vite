import mockJS from 'mockjs'

const userList = mockJS.mock({
  "data|100": [{
    name: "@cname", // 生成中文名
    ename: "@name", // 生成英文名
    "id|+1": 1, // 从1增加
    avatar: mockJS.Random.image(),
    time: "@time",
    date: "@date"
  }]
})

console.log(userList)

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: ({ body }) => {
      // body -> 请求体
      // page pageSize body
      return {
        code: 200,
        msg: 'success',
        data: userList
      }
    }
  }
]