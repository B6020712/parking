import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDistricts } from '../entities/sub_districts.entity';

@Injectable()
export class SubDistrictsService {
    constructor(
        @InjectRepository(SubDistricts)
        private districtsRepository: Repository<SubDistricts>,
    ) {}

    findAll(): Promise<SubDistricts[]> {
        return this.districtsRepository.find();
    }
}