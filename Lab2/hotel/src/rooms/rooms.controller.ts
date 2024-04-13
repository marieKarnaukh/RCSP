import { RoomsService } from './rooms.service';
import { Room } from './entities/room.entity';
import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {}

    @Get()
    findAll() {
        return this.roomsService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.roomsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRoom: Room) {
        return this.roomsService.update(+id, updateRoom);
    }

    @Post()
    create(@Body() createRoom: Room) {
        return this.roomsService.create(createRoom);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.roomsService.remove(+id);
    }
}
