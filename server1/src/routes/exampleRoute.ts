import { Application } from 'express'

import { ExampleController } from '../controllers/exampleController'

export class ExampleRoute{

  public exampleController: ExampleController

  constructor(){
    this.exampleController = new ExampleController()
  }

  public routes(app: Application): void {
    app.route('dispatch-pub').get(this.exampleController.dispatchPub.bind(this.exampleController))
  }
}