import { Injectable, HttpStatus } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { create } from 'domain';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class RoomsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(room: Room) {
        this.datasourceService.getRooms().push(room);
        return room;
    }

    findOne(id: number) {
        return this.datasourceService
            .getRooms()
            .find((room) => room.id === id);
    }

    findAll(): Room[] {
        return this.datasourceService.getRooms();
    }

    update(id: number, updatedRoom: Room) {
        const index = this.datasourceService
            .getRooms()
            .findIndex((room) => room.id === id);
        this.datasourceService.getRooms()[index] = updatedRoom;
        return this.datasourceService.getRooms()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getRooms()
        .findIndex((room) => room.id === id);
        this.datasourceService.getRooms().splice(index, 1);
        return HttpStatus.OK;
    }
}
