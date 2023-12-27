import { DataTypes } from 'sequelize';
import sequelize from '../connect.js';

const Logins = sequelize.define(
  'Logins',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      allowNull: false,
    },
    updatedAt: {
      type: "TIMESTAMP",
    },
  },
  {
    sequelize: sequelize,
    tableName: "Logins",
    updatedAt: true,
  },
);

export default Logins;
