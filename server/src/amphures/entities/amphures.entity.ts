import { SubDistricts } from "src/sub_districts/entities/sub_districts.entity";
import { Provinces } from "src/provinces/entities/provinces.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Amphures {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name_th: string;

    @Column()
    name_en: string;

    @OneToMany(() => SubDistricts, (districts) => districts.amphure)
    districts: SubDistricts[]
    
    @ManyToOne(() => Provinces, (province) => province.amphure)
    @JoinColumn({ name: 'province_id' })
    provinces: Provinces;
}