import { Amphures } from "src/amphures/entities/amphures.entity";
import { Geographies } from "src/geographies/entities/geographies.entity";
export declare class Provinces {
    id: string;
    code: string;
    name_th: string;
    name_en: string;
    amphure: Amphures[];
    geography: Geographies[];
}
