exports.up = function (pgm) {
  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  pgm.createTable('exercises', {
    id: {type: 'uuid', default: pgm.func('uuid_generate_v4()'), primaryKey: true, notNull: true},
    user_id: {type: 'uuid', notNull: true},    
    name: { type: 'text', notNull: true },
    type: { type: 'text', notNull: true },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('NOW()') }
  })
}

exports.down = function (pgm) {
  pgm.dropTable('exercises')
}
