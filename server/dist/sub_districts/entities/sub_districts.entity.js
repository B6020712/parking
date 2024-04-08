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
exports.SubDistricts = void 0;
const amphures_entity_1 = require("../../amphures/entities/amphures.entity");
const parking_entity_1 = require("../../parking/entities/parking.entity");
const typeorm_1 = require("typeorm");
let SubDistricts = class SubDistricts {
};
exports.SubDistricts = SubDistricts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SubDistricts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SubDistricts.prototype, "zip_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubDistricts.prototype, "name_th", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubDistricts.prototype, "name_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parking_entity_1.Parking, (parkings) => parkings.sub_district),
    __metadata("design:type", Array)
], SubDistricts.prototype, "parkings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => amphures_entity_1.Amphures, (amphure) => amphure.districts),
    (0, typeorm_1.JoinColumn)({ name: 'amphure_id' }),
    __metadata("design:type", amphures_entity_1.Amphures)
], SubDistricts.prototype, "amphure", void 0);
exports.SubDistricts = SubDistricts = __decorate([
    (0, typeorm_1.Entity)()
], SubDistricts);
//# sourceMappingURL=sub_districts.entity.js.map