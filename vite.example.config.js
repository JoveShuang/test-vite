import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖于构建
  },
  envPrefix: 'ENV_', // 配置vite注入客户端环境变量校验的env前缀
  css: { // 对css的行为进行配置
    modules: { // 是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式（驼峰还是中横线）
      scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化（有hash就是开启了模块化的一个标志，它可以保证类名不重复）
      // generateScopedName: "[name]_[local]_[hash:5]", // 针对生成的带hash类名进行自定义格式化处理
      // generateScopedName: (name, filename, css) => {
      //   // name -> 代表的是你此刻css文件中的类名
      //   // filename -> 是你当前css文件的绝对路径
      //   // css -> 给的就是你当前的样式
      //   // 配置成函数以后，返回值就决定了他最终显示的类型
      //   return `${name}_${Math.random().toString(36).substring(3, 8)}`;
      // },
      // hashPrefix: 'hello', // 生成hash会根据你的类名 + 一些其它的字符串（文件名 + 内部生成的一个字符串）去进行生成
      globalModulePaths: ["./componentB.module.css"], // 代表你不想参与到css模块化的路径
    },
    preprocessorOptions: { // key + config key代表预处理器的名
      less: { // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
        // 在webpack里就给less-loader去配置就好了
        math: "always",
        globalVars: { // 全局变量
          mainColor: '#000'
        },
      }
    },
    devSourcemap: true, // 开启css的sourceMap(文件索引)
    postcss: { // 配置postcss相关
      plugins: [postcssPresetEnv({
        importFrom: path.resolve(__dirname, "./variable.css")
      })]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 设置别名，以后可以在其他组件中用@代替src目录
      "@assets": path.resolve(__dirname, './src/assets')
    }
  },
})