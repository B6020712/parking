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
exports.Geographies = void 0;
const provinces_entity_1 = require("../../provinces/entities/provinces.entity");
const typeorm_1 = require("typeorm");
let Geographies = class Geographies {
};
exports.Geographies = Geographies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Geographies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Geographies.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => provinces_entity_1.Provinces, (province) => province.geography),
    __metadata("design:type", provinces_entity_1.Provinces)
], Geographies.prototype, "province", void 0);
exports.Geographies = Geographies = __decorate([
    (0, typeorm_1.Entity)()
], Geographies);
//# sourceMappingURL=geographies.entity.js.map