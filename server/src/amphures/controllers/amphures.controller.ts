import { Controller, Get } from '@nestjs/common';
import { AmphuresService } from '../services/amphures.service';
import { Amphures } from '../entities/amphures.entity';

@Controller('amphures')
export class AmphuresController {
    constructor(private readonly amphuresService: AmphuresService) {}

    @Get()
    findAll(): Promise<Amphures[]> {
        return this.amphuresService.findAll()
    }
}