import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Provinces } from '../entities/provinces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvincesService {
    constructor(
        @InjectRepository(Provinces)
        private provincesRepository: Repository<Provinces>,
    ) {}

    findAll(): Promise<Provinces[]> {
        return this.provincesRepository.find();
    }
}