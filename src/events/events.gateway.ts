import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket
} from "@nestjs/websockets";

import * as WebSocket from "ws";

@WebSocketGateway(3002)
export class EventsGateway {
  @SubscribeMessage("hello")
  hello(@MessageBody() data: any): any {
    console.log(data);
    return {
      event: "hello",
      data: `data: ${data}`,
      msg: "localhost"
    };
  }

  @SubscribeMessage("hello2")
  hello2(@MessageBody() data: any, @ConnectedSocket() client: WebSocket): any {
    console.log(`收到消息：${data}`);

    client.send(JSON.stringify({ event: "temp", data: "临时消息" }));

    return { event: "hello2", data: data };
  }
}
