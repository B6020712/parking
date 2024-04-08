import { SubDistricts } from '../entities/sub_districts.entity';
import { SubDistrictsService } from '../services/sub_districts.service';
export declare class SubDistrictsController {
    private readonly subDistrictsService;
    constructor(subDistrictsService: SubDistrictsService);
    findAll(): Promise<SubDistricts[]>;
}
