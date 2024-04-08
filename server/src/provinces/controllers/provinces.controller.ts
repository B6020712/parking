import { Provinces } from 'src/provinces/entities/provinces.entity';
import { ProvincesService } from './../services/provinces.service';
import { Controller, Get } from '@nestjs/common';

@Controller('provinces')
export class ProvincesController {
    constructor(private readonly provincesService: ProvincesService) {}
    
    @Get()
    findAll(): Promise<Provinces[]> {
        return this.provincesService.findAll();
    }
}
