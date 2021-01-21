import { Request, Response } from "express"
import { ExampleService } from '../services/exampleService'

export class ExampleController{
  public exampleService: ExampleService

  constructor() {
    this.exampleService = new ExampleService()
  }

  public async dispatchPub(req: Request, res: Response){
    await this.exampleService.sendMessageToQueue()
    res.status(200).json({ok: true})
  }
}