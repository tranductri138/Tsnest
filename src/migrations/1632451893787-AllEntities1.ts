import { MigrationInterface, QueryRunner } from "typeorm";

export class AllEntities11632451893787 implements MigrationInterface {
    name = 'AllEntities11632451893787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blog\`.\`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`blogId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`paragraph\` varchar(255) NOT NULL, \`blogId\` int NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`blog\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`adminId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`permissions\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`category\` ADD CONSTRAINT \`FK_1cdb7f1a4add884bd7314ba2477\` FOREIGN KEY (\`blogId\`) REFERENCES \`blog\`.\`blog\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` ADD CONSTRAINT \`FK_5dec255234c5b7418f3d1e88ce4\` FOREIGN KEY (\`blogId\`) REFERENCES \`blog\`.\`blog\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` ADD CONSTRAINT \`FK_c0354a9a009d3bb45a08655ce3b\` FOREIGN KEY (\`userId\`) REFERENCES \`blog\`.\`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`blog\` ADD CONSTRAINT \`FK_26380bd66be24521e00f413099d\` FOREIGN KEY (\`adminId\`) REFERENCES \`blog\`.\`admin\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blog\`.\`blog\` DROP FOREIGN KEY \`FK_26380bd66be24521e00f413099d\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` DROP FOREIGN KEY \`FK_c0354a9a009d3bb45a08655ce3b\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` DROP FOREIGN KEY \`FK_5dec255234c5b7418f3d1e88ce4\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`category\` DROP FOREIGN KEY \`FK_1cdb7f1a4add884bd7314ba2477\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`admin\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`blog\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`comment\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`category\``);
    }

}
