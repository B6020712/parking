import { Module } from '@nestjs/common';
import { SubDistrictsService } from '../services/sub_districts.service';
import { SubDistrictsController } from '../controllers/sub_districts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDistricts } from '../entities/sub_districts.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SubDistricts])],
    providers: [SubDistrictsService],
    controllers: [SubDistrictsController]
})

export class SubDistrictsModule {}