import { Injectable } from '@nestjs/common';
import { Blog } from './entities/blog.entity';
import { BlogRepository } from './blog.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogService {
  constructor(private repository: BlogRepository) {}
  getAllBlogs() {
    return this.repository.getBlogs();
  }
  getBlogsByIdAd() {
    return this.repository.getAllBlogsToIdAd();
  }
}
