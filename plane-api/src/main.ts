import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  mongoose.connect('mongodb://eswang:3333@106.15.37.245:27017/myplane', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(2000);
  Logger.log(`App run in http://localhost:2000`);
}
bootstrap();
