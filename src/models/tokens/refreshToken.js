import { DataTypes } from 'sequelize';
import { Logins } from '../index.js';
import connect from '../connect.js';
import sequelize from '../connect.js';

const RefreshTokens = sequelize.define(
	'RefreshTokens',
	{
		token: {
			type: DataTypes.TEXT,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.STRING,
			references: {
				model: 'Logins',
				key: 'id',
			},
		},
		createdAt: {
			type: 'TIMESTAMP',
			allowNull: false,
		},
	},
	{
		sequelize: connect,
		tableName: 'RefreshTokens',
		updatedAt: false,
	},
);

Logins.hasOne(RefreshTokens);
RefreshTokens.belongsTo(Logins);

export default RefreshTokens;
