import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Amphures } from '../entities/amphures.entity';
import { Repository } from 'typeorm';

@Injectable()

export class AmphuresService {
    constructor(
        @InjectRepository(Amphures)
        private amphuresRepository: Repository<Amphures>,
    ) {}

    findAll(): Promise<Amphures[]> {
        // return this.amphuresRepository.find();
        return this.amphuresRepository
            .createQueryBuilder("amphures")
            .select(['amphures.id', 'amphures.name_th'])
            .leftJoinAndSelect('amphures.provinces', 'provinces', 'amphures.provinces = provinces.id')
            .addSelect(['provinces.id', 'provinces.name_th'])
            .getMany();
        ;
    }
}