import { Amphures } from '../entities/amphures.entity';
import { Repository } from 'typeorm';
export declare class AmphuresService {
    private amphuresRepository;
    constructor(amphuresRepository: Repository<Amphures>);
    findAll(): Promise<Amphures[]>;
}
