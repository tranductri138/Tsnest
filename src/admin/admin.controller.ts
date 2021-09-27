import { Controller, Post, Get } from '@nestjs/common';
import { AdminService } from "./admin.service";

@Controller("admin")
export class AdminController {
    constructor(private adminService: AdminService) { }

    @Post()
    async createAdmin() {
        await this.adminService.createAmin()
        return "Create Success !!!"
    }
}