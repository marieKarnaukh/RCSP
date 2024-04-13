import { Module } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [Room, DatasourceModule],
})
export class RoomsModule {}
