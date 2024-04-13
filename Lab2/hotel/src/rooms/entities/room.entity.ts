import { IntegerType } from "typeorm";

export class Room {
    id: number;
    category: string;
    price: IntegerType;
    is_free: boolean;
}