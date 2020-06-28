import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
} from '../../shared/routes/node_modules/typeorm';

export default class AddAvatarFieldToUsers1587489738597
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'avatar');
  }
}
