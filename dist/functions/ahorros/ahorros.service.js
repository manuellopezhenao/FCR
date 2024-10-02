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
exports.AhorrosService = void 0;
const common_1 = require("@nestjs/common");
const sql = require("mssql");
const database_service_1 = require("../../database/database.service");
let AhorrosService = class AhorrosService {
    constructor(database) {
        this.database = database;
    }
    async getAhorros(cedula) {
        const ahorros = await this.database.db.execute('GetAhorros', [
            { name: 'cedula', type: sql.Int, value: cedula },
        ]);
        return ahorros;
    }
};
exports.AhorrosService = AhorrosService;
exports.AhorrosService = AhorrosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DataBaseService])
], AhorrosService);
//# sourceMappingURL=ahorros.service.js.map