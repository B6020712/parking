import { Module } from '@nestjs/common';
import { GeographiesService } from '../services/geographies.service';
import { GeographiesController } from '../controllers/geographies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geographies } from '../entities/geographies.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Geographies])],
    providers: [GeographiesService],
    controllers: [GeographiesController]
})
export class GeographiesModule {}
