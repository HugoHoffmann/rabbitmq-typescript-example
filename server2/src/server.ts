import { App } from './app'

const PORT = 3000
const app = new App().app
console.log(app)
app.listen(PORT, () => {
  console.log(`server listen port ${PORT}`)
})