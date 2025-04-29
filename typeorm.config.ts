import { DataSource } from "typeorm";

export default new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'typeorm',
	entities: [`${__dirname}/libs/entity/**/*.entity{.ts,.js}`],
	migrations: [`${__dirname}/migrations/*{.ts,.js}`],
	migrationsTableName: 'migrations'
})