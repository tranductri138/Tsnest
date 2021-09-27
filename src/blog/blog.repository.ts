import { EntityRepository, getManager, Repository } from "typeorm";
import { Blog } from "./entities/blog.entity"

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {
    rawData(query: string): Promise<Blog[]> {
        return this.manager.query(`${query}`)
    }
    getBlogs() {
        let query = "SELECT * FROM blog"
        return this.rawData(query)
    }
    createBlog() {
        
    }
}