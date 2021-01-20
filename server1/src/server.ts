import { App } from './app'

const PORT = 5000
const app = new App().app
app.listen(PORT, () => {
  console.log(`server listen port ${PORT}`)
})