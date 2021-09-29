import { EntityRepository, Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {
  rawData(query: string): Promise<Blog[]> {
    return this.manager.query(`${query}`);
  }
  getBlogs() {
    const query = 'SELECT * FROM blog';
    return this.rawData(query);
  }
  createBlog() {
    const adId = 1;
    const content = 'ad';
    const title = 'nhu ngay hom qua ';
    const query = `insert into blog (title,content,adminId) values ("${title}" , "${content}"),${adId} )`;
    this.rawData(query);
  }
  getAllBlogsToIdAd() {
    const query = `SELECT * FROM blog left join admin on blog.adminId = admin.id`;
    return this.rawData(query);
  }
}
