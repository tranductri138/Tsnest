import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity("admin")
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    permissions: string;

    @OneToMany(() => Blog, blog => blog.admin)
    blogs: Blog[]
}