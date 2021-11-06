module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'pg',
  database: 'auth-tdd',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}