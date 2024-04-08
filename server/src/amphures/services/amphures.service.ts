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
        return this.amphuresRepository.find();
    }
}