import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParkingService } from 'src/parking/services/parking.service';
import { Parking } from '../entities/parking.entity';

// next feature is : (1) parking for disability people, (2) lady zone

@Controller('parking')
export class ParkingController {
    constructor(private readonly parkingService: ParkingService) {}
    
    @Get()
    findAll(): Promise<Parking[]> {
        return this.parkingService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Parking | null> {
        return this.parkingService.findOne(id);
    }

    @Post()
    async create(@Body() parking: Partial<Parking>): Promise<Parking> {
        return await this.parkingService.create(parking);
    }
    
    @Put(':id')
    async updateOne(@Param('id') id: number, @Body() parking: Parking): Promise<Parking | null> {
        return await this.parkingService.updateOne(id, parking);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number): Promise<void> {
        return await this.parkingService.removeOne(id);
    }
}