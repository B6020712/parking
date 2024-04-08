import { Controller, Get } from '@nestjs/common';
import { SubDistricts } from '../entities/sub_districts.entity';
import { SubDistrictsService } from '../services/sub_districts.service';

@Controller('subdistricts')
export class SubDistrictsController {
    constructor(private readonly subDistrictsService: SubDistrictsService) {}
    
    @Get()
    findAll(): Promise<SubDistricts[]> {
        return this.subDistrictsService.findAll();
    }
}
