import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanesModule } from './planes/planes.module';

@Module({
  imports: [PlanesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
