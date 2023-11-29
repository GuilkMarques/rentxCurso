import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCar21701192145471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "daily_rate",
                        type: "numeric"
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "license_plate",
                        type: "varchar"
                    },
                    {
                        name: "fine_amount",
                        type: "varchar"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                    },

                    {   
                        name: "brand_id",
                        type: "uuid",
                    },
                    
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKBrands",
                        referencedTableName: "brands",
                        referencedColumnNames: ["id"], 
                        columnNames: ["brand_id"],
                       
                    },
                    {
                        name: "FKCategoryCar",
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"], 
                        columnNames: ["category_id"],
                        
                    },
                ]
            })
            )
    }

   


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
