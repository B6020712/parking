import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ParkingModule } from './parking/modules/parking.module';
import { GeographiesModule } from './geographies/modules/geographies.module';
import { ProvincesModule } from './provinces/modules/provinces.module';
import { SubDistrictsModule } from './sub_districts/modules/sub_districts.module';
import { AmphuresModule } from './amphures/modules/amphures.module';

const confDB = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P@ssw0rd!postgres',
  database: 'nest-next-project01',
  entities: [ __dirname + '/**/entities/*.entity.{ts,js}', ],
  // synchronize: true
})

@Module({
  imports: [confDB, ParkingModule, GeographiesModule, ProvincesModule, SubDistrictsModule, AmphuresModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}