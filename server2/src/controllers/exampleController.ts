import { Request, Response } from "express";
import { RabbitmqService } from "../services/rabbitmqService";
import { ExampleService } from "../services/exampleService";

export class ExampleController {
  public exampleService: ExampleService;

  constructor() {
    this.exampleService = new ExampleService();
  }

  public async dispatchPub(req: Request, res: Response) {
    const server = new RabbitmqService("amqp://admin:admin@rabbitmq:5672");
    await server.start();
    await server.consume("server2", (message) =>
      console.log(message.content.toString())
    );

    res.status(200).json({ ok: true });
  }
}
