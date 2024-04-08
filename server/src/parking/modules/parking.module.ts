import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Parking } from '../entities/parking.entity';
import { ParkingService } from '../services/parking.service';
import { ParkingController } from '../controllers/parking.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Parking])],
    providers: [ParkingService],
    controllers: [ParkingController]
})

export class ParkingModule {}