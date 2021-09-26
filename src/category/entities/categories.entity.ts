import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("category")
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;


    @ManyToOne(() => Blog, blog => blog.categories, {
        onDelete: 'CASCADE',
        cascade: true,
        nullable: false
    })
    blog: Blog


}