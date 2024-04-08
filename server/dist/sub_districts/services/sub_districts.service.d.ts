import { Repository } from 'typeorm';
import { SubDistricts } from '../entities/sub_districts.entity';
export declare class SubDistrictsService {
    private districtsRepository;
    constructor(districtsRepository: Repository<SubDistricts>);
    findAll(): Promise<SubDistricts[]>;
}
