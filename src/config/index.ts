import "dotenv/config"

// 定义配置的类型，确保类型安全
interface AppConfig {
  logtail: {
    sourceToken: string
    ingestingHost: string
  }
  // 你项目中的其他配置
}

// 从环境变量中加载配置
const loadConfig = (): AppConfig => {
  const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN
  const ingestingHost = process.env.LOGTAIL_INGESTING_HOST

  // 检查关键配置是否存在，如果不存在则抛出错误
  if (!sourceToken || !ingestingHost) {
    throw new Error("Missing Logtail configuration. Please check your .env file.")
  }

  return {
    logtail: {
      sourceToken,
      ingestingHost
    }
    // 加载其他配置
  }
}

// 导出配置对象
const config = loadConfig()
export default config
