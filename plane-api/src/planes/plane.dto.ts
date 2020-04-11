import { IsNotEmpty } from 'class-validator';

class CreatePlaneDto {
  @IsNotEmpty({ message: '请输入id' })
  readonly id: number;
  @IsNotEmpty({ message: '请输出飞机位置' })
  readonly position: [number];
  @IsNotEmpty({ message: '请输出飞机角度' })
  readonly rotation: [number];
  @IsNotEmpty({ message: '请输入火力' })
  readonly force: [number];
}

export default CreatePlaneDto;
