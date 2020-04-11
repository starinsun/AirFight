import { Module } from '@nestjs/common';
import { PlanesController } from './planes.controller';

@Module({
  controllers: [PlanesController]
})
export class PlanesModule {}
