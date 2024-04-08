import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Geographies } from 'src/geographies/entities/geographies.entity'

@Injectable()
export class GeographiesService {
    constructor(
        @InjectRepository(Geographies)
        private geographiesRepository: Repository<Geographies>,
    ) {}

    findAll(): Promise<Geographies[]> {
        return this.geographiesRepository.find();
    }

    findOne(id: number): Promise<Geographies> {
        return this.geographiesRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void> {
        await this.geographiesRepository.delete(id);
    }
}