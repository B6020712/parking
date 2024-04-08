import { Parking } from '../entities/parking.entity';
import { Repository } from 'typeorm';
export declare class ParkingService {
    private parkingRepository;
    constructor(parkingRepository: Repository<Parking>);
    findAll(): Promise<Parking[]>;
    findOne(id: number): Promise<Parking | null>;
    create(parking: Partial<Parking>): Promise<Parking>;
    updateOne(id: number, parking: Partial<Parking>): Promise<Parking>;
    removeOne(id: number): Promise<void>;
}
