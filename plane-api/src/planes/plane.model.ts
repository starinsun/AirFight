import { prop, getModelForClass } from '@typegoose/typegoose';

export class Planes {
  @prop()
  id: number;
  @prop()
  position: [number];
  @prop()
  rotation: [number];
  @prop()
  force: [number];
}

export const PlaneModel = getModelForClass(Planes);
