import { initializeLogtail } from "./app.js"
// 定义一个异步的启动函数
const startApp = async () => {
  try {
    // 在异步函数内部使用 await
    const logtail = await initializeLogtail()
    logtail.info("Logtail initialized successfully in main.ts")

    // 在这里添加你的主要应用逻辑
    // ...
  } catch (error) {
    // 捕获并处理可能的初始化错误
    console.error("Application failed to start:", error)
    process.exit(1) // 失败时退出进程
  }
}

// 调用异步启动函数
startApp()
