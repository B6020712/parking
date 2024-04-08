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
exports.ParkingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parking_entity_1 = require("../entities/parking.entity");
const typeorm_2 = require("typeorm");
let ParkingService = class ParkingService {
    constructor(parkingRepository) {
        this.parkingRepository = parkingRepository;
    }
    findAll() {
        return this.parkingRepository
            .createQueryBuilder("parking")
            .select(['parking.id', 'parking.name', 'parking.address', 'parking.parking_space', 'parking.support_car_type', 'parking.pricing', 'parking.currenttime'])
            .leftJoinAndSelect('parking.sub_district', 'sub_district', 'parking.sub_district = sub_district.id')
            .addSelect(['sub_district.id', 'sub_district.name_th'])
            .getMany();
    }
    findOne(id) {
        return this.parkingRepository
            .createQueryBuilder("parking")
            .select(['parking.id', 'parking.name', 'parking.address', 'parking.parking_space', 'parking.support_car_type', 'parking.pricing', 'parking.currenttime'])
            .leftJoinAndSelect('parking.sub_district', 'sub_district', 'parking.sub_district = sub_district.id')
            .addSelect(['sub_district.id', 'sub_district.name_th'])
            .where('parking.id = :id', {
            id: id
        })
            .getOne();
    }
    async create(parking) {
        const user = this.parkingRepository.create(parking);
        return await this.parkingRepository.save(user);
    }
    async updateOne(id, parking) {
        await this.parkingRepository.update(id, parking);
        return await this.parkingRepository.findOneBy({ id });
    }
    async removeOne(id) {
        await this.parkingRepository.delete(id);
    }
};
exports.ParkingService = ParkingService;
exports.ParkingService = ParkingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parking_entity_1.Parking)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParkingService);
//# sourceMappingURL=parking.service.js.map