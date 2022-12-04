// vite的插件必须返回给vite一个配置对象
const fs = require('fs')
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = "") {
  const result = {
    dirs: [],
    files: []
  }

  dirFilesArr.forEach(name => {
    const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))
    console.log("current file stat", name, currentFileStat.isDirectory())
    if (currentFileStat.isDirectory()) {
      result.dirs.push(name)
    } else {
      result.files.push(name)
    }
  })

  return result
}

function getTotalSrcDir(keyName) {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'))
  const diffResult = diffDirAndFile(result, "../src")
  console.log(diffResult)
  const resolveAliasesObj = {
    [keyName]: path.resolve(__dirname, '../src')
  } // 这里放一个个的别名配置 @assset: xxx
  diffResult.dirs.forEach(dirName => {
    const key = `${keyName}${dirName}`
    const absPath = path.resolve(__dirname, '../src' + '/' + dirName)
    resolveAliasesObj[key] = absPath
  })
  return resolveAliasesObj

}



module.exports = ({ keyName = '@' } = {}) => {

  return {
    config: (config, env) => {
      console.log('config', config)
      console.log('env', env)
      // config: 目前的一个配置对象(vite.config.js)
      // env: mode: string -> production development, command: string -> yarn dev yarn build
      // config函数可以返回一个对象，它就是部分的viteconfig
      // return {
      //   envPerfix: 'asd'
      // }
      const resolveAliasesObj = getTotalSrcDir(keyName)
      console.log(resolveAliasesObj)
      return {
        // 在此返回一个resolve出去
        // 读目录
        resolve: {
          alias: resolveAliasesObj
        }
      }
    }
  }
}


