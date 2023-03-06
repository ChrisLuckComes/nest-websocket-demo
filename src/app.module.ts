import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { EventsGateway } from "./events/events.gateway";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController],
  providers: [AppService, EventsGateway]
})
export class AppModule {}
