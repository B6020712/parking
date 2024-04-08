import { AmphuresService } from '../services/amphures.service';
import { Amphures } from '../entities/amphures.entity';
export declare class AmphuresController {
    private readonly amphuresService;
    constructor(amphuresService: AmphuresService);
    findAll(): Promise<Amphures[]>;
}
