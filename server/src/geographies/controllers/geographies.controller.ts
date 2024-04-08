import { Controller, Get, Param } from '@nestjs/common';
import { GeographiesService } from 'src/geographies/services/geographies.service';
import { Geographies } from '../entities/geographies.entity';

@Controller('geographies')
export class GeographiesController {
    constructor(private readonly geograpyiesService: GeographiesService) {}

    @Get()
    findAll(): Promise<Geographies[]> {
        return this.geograpyiesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Geographies> {
        return this.geograpyiesService.findOne(id)
    }
}