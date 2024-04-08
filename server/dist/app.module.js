"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const parking_module_1 = require("./parking/modules/parking.module");
const geographies_module_1 = require("./geographies/modules/geographies.module");
const provinces_module_1 = require("./provinces/modules/provinces.module");
const sub_districts_module_1 = require("./sub_districts/modules/sub_districts.module");
const amphures_module_1 = require("./amphures/modules/amphures.module");
const confDB = typeorm_1.TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'P@ssw0rd!postgres',
    database: 'nest-next-project01',
    entities: [__dirname + '/**/entities/*.entity.{ts,js}',],
});
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [confDB, parking_module_1.ParkingModule, geographies_module_1.GeographiesModule, provinces_module_1.ProvincesModule, sub_districts_module_1.SubDistrictsModule, amphures_module_1.AmphuresModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map