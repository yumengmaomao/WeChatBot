import { initializeLogtail } from "./app.js"
const logtail = await initializeLogtail()
logtail.info("Logtail initialized successfully in main.ts")
