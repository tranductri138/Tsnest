import { Module } from "@nestjs/common"
import { BlogController } from "./blog.controller";
import { BlogRepository } from './blog.repository';
import { BlogService } from "./blog.service";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Blog } from './entities/blog.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [BlogRepository,Blog]
        )
    ],
    providers: [BlogService],
    controllers: [BlogController],
})

export class BlogModule {

}