import { RabbitmqService } from "./rabbitmqService";

export class ExampleService {
  private rabbitmqService: RabbitmqService;

  public async sendMessageToQueue(): Promise<boolean> {
    const message = "Message from server1 to server2";
    this.rabbitmqService = new RabbitmqService(
      "amqp://admin:admin@rabbitmq:5672"
    );
    await this.rabbitmqService.start();
    
    await this.rabbitmqService.publichInQueue("server2", message);
    await this.rabbitmqService.publishInExchange(
      "amq.direct",
      "route2",
      message
    );
    return true;
  }
}
