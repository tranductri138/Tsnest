import { query } from "express";
import { EntityRepository, Repository } from "typeorm";
import { Admin } from "./entities/admin.entity";

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
    rawData(query: string): Promise<Admin[]> {
        return this.manager.query(`${query}`)
    }

    createAdmin() {
        let name: string = "tris1"
        let password = "12"
        let permissions = "user"
        const query = `insert into admin(name,password,permissions) values ("${name}","${password}","${permissions}")`
        this.rawData(query)
    }

    deleteAdmin() {
        const id: number = 7;
        const query = `delete from admin where id = ${id} `
        this.rawData(query)
    }
}