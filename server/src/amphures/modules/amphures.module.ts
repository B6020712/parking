import { Module } from '@nestjs/common';
import { AmphuresService } from '../services/amphures.service';
import { AmphuresController } from '../controllers/amphures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amphures } from '../entities/amphures.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Amphures])],
    providers: [AmphuresService],
    controllers: [AmphuresController]
})
export class AmphuresModule {}
