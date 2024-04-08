import { Amphures } from "src/amphures/entities/amphures.entity";
import { Geographies } from "src/geographies/entities/geographies.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provinces {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    name_th: string;

    @Column()
    name_en: string;
    
    @OneToMany(() => Amphures, (amphure) => amphure.provinces)
    amphure: Amphures[];

    @ManyToOne(() => Geographies, (geography) => geography.province)
    @JoinColumn({ name: 'geography_id' })
    geography: Geographies[];
}