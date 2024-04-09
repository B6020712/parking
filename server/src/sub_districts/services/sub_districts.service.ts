import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDistricts } from '../entities/sub_districts.entity';

@Injectable()
export class SubDistrictsService {
    constructor(
        @InjectRepository(SubDistricts)
        private subDistrictsRepository: Repository<SubDistricts>,
    ) {}

    findAll(): Promise<SubDistricts[]> {
        // return this.subDistrictsRepository.find();
        return this.subDistrictsRepository
            .createQueryBuilder("sub_districts")
            .select(['sub_districts.id', 'sub_districts.name_th'])
            .leftJoinAndSelect('sub_districts.amphure', 'amphure', 'sub_districts.amphure = amphure.id')
            .addSelect(['amphure.id', 'amphure.name_th'])
            .getMany();
    }
}