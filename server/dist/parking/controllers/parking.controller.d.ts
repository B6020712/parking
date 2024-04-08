import { ParkingService } from 'src/parking/services/parking.service';
import { Parking } from '../entities/parking.entity';
export declare class ParkingController {
    private readonly parkingService;
    constructor(parkingService: ParkingService);
    findAll(): Promise<Parking[]>;
    findOne(id: number): Promise<Parking | null>;
    create(parking: Partial<Parking>): Promise<Parking>;
    updateOne(id: number, parking: Parking): Promise<Parking | null>;
    deleteOne(id: number): Promise<void>;
}
