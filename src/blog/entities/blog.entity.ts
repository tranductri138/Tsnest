import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { Admin } from '../../admin/entities/admin.entity';
import { Category } from '../../category/entities/categories.entity';
import { Comment } from '../../comment/entities/comment.entity';
@Entity("blog")
export class Blog {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Admin, admin => admin.blogs, {
        onDelete: 'CASCADE',
        cascade: true,
        nullable: false
    })
    admin: Admin;


    @OneToMany(() => Category, categories => categories.blog)
    categories: Category[]

    @OneToMany(() => Comment, comments => comments.blog)
    comments: Comment[]

}