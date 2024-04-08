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
exports.Provinces = void 0;
const amphures_entity_1 = require("../../amphures/entities/amphures.entity");
const geographies_entity_1 = require("../../geographies/entities/geographies.entity");
const typeorm_1 = require("typeorm");
let Provinces = class Provinces {
};
exports.Provinces = Provinces;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Provinces.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provinces.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provinces.prototype, "name_th", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provinces.prototype, "name_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => amphures_entity_1.Amphures, (amphure) => amphure.provinces),
    __metadata("design:type", Array)
], Provinces.prototype, "amphure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => geographies_entity_1.Geographies, (geography) => geography.province),
    (0, typeorm_1.JoinColumn)({ name: 'geography_id' }),
    __metadata("design:type", Array)
], Provinces.prototype, "geography", void 0);
exports.Provinces = Provinces = __decorate([
    (0, typeorm_1.Entity)()
], Provinces);
//# sourceMappingURL=provinces.entity.js.map