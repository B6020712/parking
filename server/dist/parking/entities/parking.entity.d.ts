import { SubDistricts } from "src/sub_districts/entities/sub_districts.entity";
export declare class Parking {
    id: number;
    name: string;
    address: string;
    sub_district: SubDistricts;
    parking_space: number;
    support_car_type: string;
    pricing: string;
    currenttime: Date;
}
