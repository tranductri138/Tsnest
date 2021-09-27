import { Admin } from "./entities/admin.entity";
import { TypeOrmModule } from "@nestjs/typeorm"
import { AdminRepository } from './admin.repository';
import { Module } from "@nestjs/common";
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [AdminRepository, Admin]
        )
    ],
    providers: [AdminService],
    controllers: [AdminController],
})

export class AdminModule {
}