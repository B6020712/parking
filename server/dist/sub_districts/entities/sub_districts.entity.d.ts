import { Amphures } from "src/amphures/entities/amphures.entity";
import { Parking } from "src/parking/entities/parking.entity";
export declare class SubDistricts {
    id: string;
    zip_code: number;
    name_th: string;
    name_en: string;
    parkings: Parking[];
    amphure: Amphures;
}
