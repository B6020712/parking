import { SubDistricts } from "src/sub_districts/entities/sub_districts.entity";
import { Provinces } from "src/provinces/entities/provinces.entity";
export declare class Amphures {
    id: number;
    code: string;
    name_th: string;
    name_en: string;
    districts: SubDistricts[];
    provinces: Provinces;
}
