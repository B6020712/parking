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
exports.Parking = void 0;
const sub_districts_entity_1 = require("../../sub_districts/entities/sub_districts.entity");
const typeorm_1 = require("typeorm");
let Parking = class Parking {
};
exports.Parking = Parking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Parking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parking.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parking.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sub_districts_entity_1.SubDistricts, (sub_district) => sub_district.parkings),
    (0, typeorm_1.JoinColumn)({ name: 'sub_district_id' }),
    __metadata("design:type", sub_districts_entity_1.SubDistricts)
], Parking.prototype, "sub_district", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Parking.prototype, "parking_space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parking.prototype, "support_car_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parking.prototype, "pricing", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Parking.prototype, "currenttime", void 0);
exports.Parking = Parking = __decorate([
    (0, typeorm_1.Entity)()
], Parking);
//# sourceMappingURL=parking.entity.js.map