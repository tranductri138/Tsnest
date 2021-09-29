import { AdminRepository } from './admin.repository';
import { Injectable } from '@nestjs/common';
import { AdminDto } from './dtos/admin.dto';
import { CreateAdminDto } from './dtos/create.admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(private adminRepo: AdminRepository) {}

  async createAmin(createAdminDto: CreateAdminDto) {
    await this.adminRepo.createAdmin(
      createAdminDto.name,
      createAdminDto.password,
    );
  }
  deleteAdmin() {
    this.adminRepo.deleteAdmin();
  }
  updateAdmin() {
    this.adminRepo.updateAdmin();
  }
  async getAdminById(id: number) {
    return await this.adminRepo.getAdminById(id);
    // return this.adminRepo.findOne({ adminId: id });
  }
  getAdmin() {
    return this.adminRepo.getAlladmins();
  }
}
