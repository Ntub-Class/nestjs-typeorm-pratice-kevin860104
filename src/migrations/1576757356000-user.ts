import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576757356000 implements MigrationInterface {
    name = 'user1576757356000'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
    }

}
