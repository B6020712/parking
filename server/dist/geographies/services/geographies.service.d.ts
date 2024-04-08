import { Repository } from 'typeorm';
import { Geographies } from 'src/geographies/entities/geographies.entity';
export declare class GeographiesService {
    private geographiesRepository;
    constructor(geographiesRepository: Repository<Geographies>);
    findAll(): Promise<Geographies[]>;
    findOne(id: number): Promise<Geographies>;
    remove(id: number): Promise<void>;
}
