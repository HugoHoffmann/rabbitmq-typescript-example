import { Connection, connect, Channel, Message } from 'amqplib'

export class RabbitmqService {
  private conn: Connection
  private channel: Channel
  private uri: string

  constructor(uri: string){
    this.uri = uri
  }

  public async start(): Promise<void>{
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
  }

  public async publichInQueue(queue: string, message: string){
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  public async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message))
  }

  public async consume(queue: string, callback: (message: Message) => void){
    return this.channel.consume(queue, (message) => {
      callback(message)
      
      // remove message to queue
      this.channel.ack(message)
    })
  }
}