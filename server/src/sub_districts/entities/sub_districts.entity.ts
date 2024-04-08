import { Amphures } from "src/amphures/entities/amphures.entity";
import { Parking } from "src/parking/entities/parking.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubDistricts {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    zip_code: number
    
    @Column()
    name_th: string

    @Column()
    name_en: string

    @OneToMany(() => Parking, (parkings) => parkings.sub_district)
    parkings: Parking[];
    
    @ManyToOne(() => Amphures, (amphure) => amphure.districts)
    @JoinColumn({ name: 'amphure_id' })
    amphure: Amphures;
}