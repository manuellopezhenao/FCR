import { IRecordSet } from 'mssql';
import { DataBaseService } from 'src/database/database.service';
export declare class CreditosService {
    private database;
    constructor(database: DataBaseService);
    getAhorros(cedula: number): Promise<IRecordSet<any>>;
}
