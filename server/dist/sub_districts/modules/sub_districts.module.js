"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDistrictsModule = void 0;
const common_1 = require("@nestjs/common");
const sub_districts_service_1 = require("../services/sub_districts.service");
const sub_districts_controller_1 = require("../controllers/sub_districts.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sub_districts_entity_1 = require("../entities/sub_districts.entity");
let SubDistrictsModule = class SubDistrictsModule {
};
exports.SubDistrictsModule = SubDistrictsModule;
exports.SubDistrictsModule = SubDistrictsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sub_districts_entity_1.SubDistricts])],
        providers: [sub_districts_service_1.SubDistrictsService],
        controllers: [sub_districts_controller_1.SubDistrictsController]
    })
], SubDistrictsModule);
//# sourceMappingURL=sub_districts.module.js.map