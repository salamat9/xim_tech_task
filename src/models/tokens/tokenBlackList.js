import { DataTypes } from 'sequelize';
import connect from '../connect.js';
import sequelize from '../connect.js';

const TokenBlackList = sequelize.define(
	'TokenBlackList',
	{
		guid: {
			type: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		token: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		createdAt: {
			type: 'TIMESTAMP',
			allowNull: false,
		},
	},
	{
		sequelize: connect,
		tableName: 'TokenBlackList',
		updatedAt: false,
	},
);

export default TokenBlackList;
