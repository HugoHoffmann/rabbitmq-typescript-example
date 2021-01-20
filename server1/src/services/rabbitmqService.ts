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
}