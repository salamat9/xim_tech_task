import { ConnectionError, Sequelize } from "sequelize";
import appConfig from '../config/index.js'

const { username, password, host, port, database } =
  appConfig.database;

const sequelize = new Sequelize({
  host,
  database,
  username,
  password,
  port,
  dialect: 'mysql',
  retry: {
    match: [ConnectionError, /Deadlock/i],
    max: 2,
  },
  logging: false,
})

export default sequelize;
