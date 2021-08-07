import {MigrationInterface, QueryRunner} from "typeorm";

export class noname1628360088808 implements MigrationInterface {
    name = 'noname1628360088808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name")`);
    }

}
