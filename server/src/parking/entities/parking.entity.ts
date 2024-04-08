import { SubDistricts } from "src/sub_districts/entities/sub_districts.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Parking {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @ManyToOne(() => SubDistricts , (sub_district) => sub_district.parkings)
    @JoinColumn({ name: 'sub_district_id' })
    sub_district: SubDistricts;

    @Column()
    parking_space: number;

    @Column()
    support_car_type: string;

    @Column()
    pricing: string;
    
    @UpdateDateColumn()
    currenttime: Date;
}