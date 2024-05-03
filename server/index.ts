import app from './app'
import dotenv from 'dotenv'

// Port will be proxied in the vite.config.ts
dotenv.config()

app.listen(process.env.DEFAULT_PORT, () => {
  console.log('')
  console.log(`API server listening on ${process.env.VITE_APP_API_URL}`)
  console.log(`The API response is available at ${process.env.VITE_APP_API_URL}/api/services`)
})
