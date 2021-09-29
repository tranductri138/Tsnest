import {MigrationInterface, QueryRunner} from "typeorm";

export class Entitynewm111632890979788 implements MigrationInterface {
    name = 'Entitynewm111632890979788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blog\`.\`category\` (\`categoryId\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`blogBlogId\` int NOT NULL, PRIMARY KEY (\`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`user\` (\`userId\` int NOT NULL AUTO_INCREMENT, \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`comment\` (\`commentId\` int NOT NULL AUTO_INCREMENT, \`paragraph\` varchar(255) NOT NULL, \`blogBlogId\` int NOT NULL, \`userUserId\` int NOT NULL, PRIMARY KEY (\`commentId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`blog\` (\`blogId\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`adminAdminId\` int NOT NULL, PRIMARY KEY (\`blogId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\`.\`admin\` (\`adminId\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`adminId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`category\` ADD CONSTRAINT \`FK_d30bc7845efe19877b3a831401e\` FOREIGN KEY (\`blogBlogId\`) REFERENCES \`blog\`.\`blog\`(\`blogId\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` ADD CONSTRAINT \`FK_2e9ad0ffe8ee340b48b1ba5041a\` FOREIGN KEY (\`blogBlogId\`) REFERENCES \`blog\`.\`blog\`(\`blogId\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` ADD CONSTRAINT \`FK_1a0a9c69d17cfb196d090858bc8\` FOREIGN KEY (\`userUserId\`) REFERENCES \`blog\`.\`user\`(\`userId\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`blog\` ADD CONSTRAINT \`FK_0f89f89e6e6d6b476a8fdb1e426\` FOREIGN KEY (\`adminAdminId\`) REFERENCES \`blog\`.\`admin\`(\`adminId\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blog\`.\`blog\` DROP FOREIGN KEY \`FK_0f89f89e6e6d6b476a8fdb1e426\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` DROP FOREIGN KEY \`FK_1a0a9c69d17cfb196d090858bc8\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`comment\` DROP FOREIGN KEY \`FK_2e9ad0ffe8ee340b48b1ba5041a\``);
        await queryRunner.query(`ALTER TABLE \`blog\`.\`category\` DROP FOREIGN KEY \`FK_d30bc7845efe19877b3a831401e\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`admin\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`blog\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`comment\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`blog\`.\`category\``);
    }

}
