exports.up = function (pgm) {
  //this line is due to earlier retardation
  pgm.dropColumns('workouts', ['sessions'])

  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  pgm.createTable('sessions', {
    id: {type: 'uuid', default: pgm.func('uuid_generate_v4()'), primaryKey: true, notNull: true},
    user_id: {type: 'uuid', notNull: true},    
    exercise_id: {type: 'uuid', notNull: true, references: 'exercises' },
    workout_id: {type: 'uuid', notNull: true, references: 'workouts' },
    comment: { type: 'text' },
    sets: { type: 'jsonb' },
    date: { type: 'timestamp' },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('NOW()') }
  })
}

exports.down = function (pgm) {
  pgm.dropTable('sessions')
}
