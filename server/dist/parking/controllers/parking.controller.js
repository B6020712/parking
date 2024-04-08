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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingController = void 0;
const common_1 = require("@nestjs/common");
const parking_service_1 = require("../services/parking.service");
const parking_entity_1 = require("../entities/parking.entity");
let ParkingController = class ParkingController {
    constructor(parkingService) {
        this.parkingService = parkingService;
    }
    findAll() {
        return this.parkingService.findAll();
    }
    findOne(id) {
        return this.parkingService.findOne(id);
    }
    async create(parking) {
        return await this.parkingService.create(parking);
    }
    async updateOne(id, parking) {
        return await this.parkingService.updateOne(id, parking);
    }
    async deleteOne(id) {
        return await this.parkingService.removeOne(id);
    }
};
exports.ParkingController = ParkingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, parking_entity_1.Parking]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "deleteOne", null);
exports.ParkingController = ParkingController = __decorate([
    (0, common_1.Controller)('parking'),
    __metadata("design:paramtypes", [parking_service_1.ParkingService])
], ParkingController);
//# sourceMappingURL=parking.controller.js.map