import { DataTypes } from 'sequelize';
import sequelize from '../connect.js';

const Files = sequelize.define(
	'Files',
	{
		guid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
    },
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    path: {
      type: DataTypes.STRING,
    },
		mimetype: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		size: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		createdAt: {
			type: 'TIMESTAMP',
			allowNull: false,
		},
		updatedAt: {
			type: 'TIMESTAMP',
			allowNull: false,
		},
	},
	{
		sequelize: sequelize,
		tableName: 'Files',
		updatedAt: true,
	},
);

export default Files;
