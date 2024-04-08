"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmphuresModule = void 0;
const common_1 = require("@nestjs/common");
const amphures_service_1 = require("../services/amphures.service");
const amphures_controller_1 = require("../controllers/amphures.controller");
const typeorm_1 = require("@nestjs/typeorm");
const amphures_entity_1 = require("../entities/amphures.entity");
let AmphuresModule = class AmphuresModule {
};
exports.AmphuresModule = AmphuresModule;
exports.AmphuresModule = AmphuresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([amphures_entity_1.Amphures])],
        providers: [amphures_service_1.AmphuresService],
        controllers: [amphures_controller_1.AmphuresController]
    })
], AmphuresModule);
//# sourceMappingURL=amphures.module.js.map