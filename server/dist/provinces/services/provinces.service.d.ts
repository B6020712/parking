import { Provinces } from '../entities/provinces.entity';
import { Repository } from 'typeorm';
export declare class ProvincesService {
    private provincesRepository;
    constructor(provincesRepository: Repository<Provinces>);
    findAll(): Promise<Provinces[]>;
}
