import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provinces } from 'src/provinces/entities/provinces.entity';
import { ProvincesService } from 'src/provinces/services/provinces.service';
import { ProvincesController } from 'src/provinces/controllers/provinces.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Provinces])],
    providers: [ProvincesService],
    controllers: [ProvincesController]
})

export class ProvincesModule {}