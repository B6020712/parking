import { Provinces } from 'src/provinces/entities/provinces.entity';
import { ProvincesService } from './../services/provinces.service';
export declare class ProvincesController {
    private readonly provincesService;
    constructor(provincesService: ProvincesService);
    findAll(): Promise<Provinces[]>;
}
