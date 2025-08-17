import { Logtail } from "@logtail/node"
import config from "./config/index.js"

// 定义一个异步的初始化函数
export const initializeLogtail = async () => {
  try {
    // 使用配置来初始化 Logtail
    const logtail = new Logtail(config.logtail.sourceToken, {
      endpoint: `https://${config.logtail.ingestingHost}`
    })

    console.log("配置已成功加载。")
    logtail.info("Logtail initialized successfully from environment variables.")
    return logtail
  } catch (error: any) {
    console.error("Logtail加载失败:", error.message)
    process.exit(1) // 退出应用
  }
}
