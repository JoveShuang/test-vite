import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式
const envResolver = {
  "build": () => {
    console.log("生产环境")
    return { ...viteBaseConfig, ...viteProdConfig }
  },
  "serve": () => {
    console.log("开发环境")
    return { ...viteBaseConfig, ...viteDevConfig }
  }
}

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), "")
  return envResolver[command]()
})