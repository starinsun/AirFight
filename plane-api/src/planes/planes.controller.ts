import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlaneModel } from './plane.model';
import CreatePlaneDto from './plane.dto';

@Controller('planes')
export class PlanesController {
  @Get()
  async getPlanes() {
    return await PlaneModel.find().sort({ id: 1 });
  }
  @Post()
  async addPlane(@Body() createPlaneDto: CreatePlaneDto) {
    await PlaneModel.create(createPlaneDto);
    return { success: true };
  }
}
