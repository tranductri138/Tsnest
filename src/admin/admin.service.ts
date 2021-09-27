import { AdminRepository } from './admin.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor(private adminRepo: AdminRepository) { }

    createAmin() {
        this.adminRepo.createAdmin()
    }
}