import { query } from 'express';
import { EntityRepository, Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  rawData(query: string): Promise<Admin> {
    return this.manager.query(`${query}`);
  }

  createAdmin(name: string, password: string) {
    const query = `insert into admin(name,password) values ("${name}","${password}")`;
    this.rawData(query);
  }

  deleteAdmin() {
    const id = 7;
    const query = `delete from admin where id = ${id} `;
    this.rawData(query);
  }
  updateAdmin() {
    const id = 2;
    const name = 'tris sieu dep zai ';
    const query = `update admin set name = "${name}" where id = ${id} `;
    this.rawData(query);
  }
  getAlladmins() {
    const query = `select * from admin`;
    return this.rawData(query);
  }
  async getAdminById(id: number): Promise<Admin> {
    const query = `select * from admin where adminId = ${id} `;
    const ad = await this.manager.query(query);
    return ad;
  }
}
