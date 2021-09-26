import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Blog } from "src/blog/entities/blog.entity";
import { User } from "src/user/entities/user.entity";



@Entity("comment")
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paragraph: string;

    @ManyToOne(() => Blog, blog => blog.comments, {
        onDelete: 'CASCADE',
        cascade: true,
        nullable: false
    })
    blog: Blog;

    @ManyToOne(() => User, user => user.comments, {
        onDelete: 'CASCADE',
        cascade: true,
        nullable: false
    })
    user: User;
}