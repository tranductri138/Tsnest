import { Exclude } from 'class-transformer';
import { Blog } from 'src/blog/entities/blog.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  adminId: number;

  public getAdminId(): number {
    return this.adminId;
  }

  public setAdminId(adminId: number): void {
    this.adminId = adminId;
  }

  @Column()
  name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  @Column()
  password: string;

  @OneToMany(() => Blog, (blog) => blog.admin)
  blogs: Blog[];

  toJSON() {
    return { ...this, password: undefined };
  }
}
