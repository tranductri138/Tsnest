export class AdminDto {
  adminId: number;

  name: string;

  constructor(adminId: number, name: string) {
    this.adminId = adminId;
    this.name = name;
  }
}
