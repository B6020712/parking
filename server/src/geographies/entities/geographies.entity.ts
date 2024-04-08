import { Provinces } from "src/provinces/entities/provinces.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Geographies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Provinces, (province) => province.geography)
    province: Provinces;
}