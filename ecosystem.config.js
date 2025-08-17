module.exports = {
  apps: [{
    name: "WeChatBot", // 你的应用名称
    script: "./dist/bundle.js", // 你的项目入口文件，这里指向esbuild打包后的文件
    // 下面是可选配置
    instances: 1, // 启动的实例数量，'max' 表示所有可用CPU核心
    autorestart: true, // 崩溃后自动重启
    watch: false, // 监控文件变动自动重启，线上环境建议关闭
    max_memory_restart: '1G', // 内存超过1G自动重启
    env: {
      NODE_ENV: "production"
    }
  }]
};