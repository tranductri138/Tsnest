import { Module } from "@nestjs/common"
import { BlogController } from "./blog.controller";
import { BlogRepository } from './blog.repository';
import { BlogService } from "./blog.service";
import { Blog } from './entities/blog.entity';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [BlogRepository]
        )
    ],
    providers: [BlogService],
    controllers: [BlogController],
})

export class BlogModule {

}