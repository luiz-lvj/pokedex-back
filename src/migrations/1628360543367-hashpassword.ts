import {MigrationInterface, QueryRunner} from "typeorm";

export class hashpassword1628360543367 implements MigrationInterface {
    name = 'hashpassword1628360543367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "hashPassword" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "hashPassword"`);
    }

}
