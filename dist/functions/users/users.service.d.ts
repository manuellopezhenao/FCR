import { IRecordSet } from 'mssql';
import { DataBaseService } from './../../database/database.service';
import { ValidateRegisterDto } from 'src/validators/Register.validator';
export declare class UsersService {
    private database;
    constructor(database: DataBaseService);
    findOneUser(username: string): Promise<IRecordSet<any>>;
    registerUser(user: ValidateRegisterDto): Promise<IRecordSet<any>>;
    getIfo(cedula: number): Promise<any>;
    getEmail(cedula: string): Promise<IRecordSet<any>>;
    saveCode(cedula: string, code: string): Promise<IRecordSet<any>>;
    resetPassword(cedula: string, password: string, code: string): Promise<IRecordSet<any>>;
}
