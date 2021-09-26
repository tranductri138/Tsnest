const path = require('path');

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, '**', '*.entity.js')],
  migrations: [__dirname + '/dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
