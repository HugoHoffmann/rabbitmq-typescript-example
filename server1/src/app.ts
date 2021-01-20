import * as express from 'express'
import * as bodyParser from 'body-parser'
import { ExampleRoute } from './routes/exampleRoute'

export class App {
  public app: express.Application
  public exampleRoute: ExampleRoute

  constructor(){
    this.app = express()
    this.config()
    this.exampleRoute = new ExampleRoute()
    this.exampleRoute.routes(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false}))
  }
}