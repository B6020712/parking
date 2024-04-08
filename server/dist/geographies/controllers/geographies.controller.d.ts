import { GeographiesService } from 'src/geographies/services/geographies.service';
import { Geographies } from '../entities/geographies.entity';
export declare class GeographiesController {
    private readonly geograpyiesService;
    constructor(geograpyiesService: GeographiesService);
    findAll(): Promise<Geographies[]>;
    findOne(id: number): Promise<Geographies>;
}
