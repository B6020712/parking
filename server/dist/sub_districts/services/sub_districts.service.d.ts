import { Repository } from 'typeorm';
import { SubDistricts } from '../entities/sub_districts.entity';
export declare class SubDistrictsService {
    private subDistrictsRepository;
    constructor(subDistrictsRepository: Repository<SubDistricts>);
    findAll(): Promise<SubDistricts[]>;
}
