import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parking } from '../entities/parking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingService {
    constructor(
        @InjectRepository(Parking)
        private parkingRepository: Repository<Parking>,
    ) {}

    findAll(): Promise<Parking[]> {
        // return this.parkingRepository.find();
        return this.parkingRepository
            .createQueryBuilder("parking")
            .select(['parking.id', 'parking.name', 'parking.address', 'parking.parking_space', 'parking.support_car_type', 'parking.pricing', 'parking.currenttime'])
            .leftJoinAndSelect('parking.sub_district', 'sub_district', 'parking.sub_district = sub_district.id')
            .addSelect(['sub_district.id', 'sub_district.name_th'])
            .getMany();
    }

    findOne(id: number): Promise<Parking | null> {
        // return this.parkingRepository.findOneBy({id});
        return this.parkingRepository
            .createQueryBuilder("parking")
            .select(['parking.id', 'parking.name', 'parking.address', 'parking.parking_space', 'parking.support_car_type', 'parking.pricing', 'parking.currenttime'])
            .leftJoinAndSelect('parking.sub_district', 'sub_district', 'parking.sub_district = sub_district.id')
            .addSelect(['sub_district.id', 'sub_district.name_th'])
            .where('parking.id = :id', {
                id: id
            })
            .getOne();
    }

    async create(parking: Partial<Parking>): Promise<Parking> {
        const user = this.parkingRepository.create(parking);
        return await this.parkingRepository.save(user);
    }
    
    async updateOne(id: number, parking: Partial<Parking>): Promise<Parking> {
        await this.parkingRepository.update(id, parking);
        return await this.parkingRepository.findOneBy({ id });
    }

    async removeOne(id: number): Promise<void> {
        await this.parkingRepository.delete(id);
    }
}