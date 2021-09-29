import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateAdminDto } from './dtos/create.admin.dto';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { AdminDto } from './dtos/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  createAdmin(@Body() CreateAdminDto: CreateAdminDto) {
    return { name: CreateAdminDto.name };
  }
  @Get('/:id')
  async getAdmingetAdminById(@Param('id', ParseIntPipe) id: number) {
    const ad = await this.adminService.getAdminById(id);
    return { id: ad[0].adminId, name: ad[0].name };
  }

  @Get()
  async getAllAdmin() {
    const ad = await this.adminService.getAdmin();
    return ad;
  }
  @Delete()
  async deleteAdmin() {
    await this.adminService.deleteAdmin();
    return 'Delete succes';
  }
}
