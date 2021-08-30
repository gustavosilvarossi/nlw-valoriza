import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUseAddPassowrd1630177344605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users', new TableColumn({
                name: 'passoword',
                type: 'varchar',
                isNullable: false
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "passowrd")
    }

}
