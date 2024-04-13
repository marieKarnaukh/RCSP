import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [RoomsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
