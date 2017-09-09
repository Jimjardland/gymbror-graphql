exports.up = (pgm) => {
  pgm.createTable('workouts', {
    id: { type: 'uuid', default: pgm.func('uuid_generate_v4()'), primaryKey: true, notNull: true },
    user_id: {type: 'uuid', notNull: true},
    title: { type: 'text' },
    comment: { type: 'text' },
    sessions: { type: 'jsonb' },
    date: { type: 'timestamp' },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('NOW()') }
  })
}

exports.down = (pgm) => {
  pgm.dropTable('workouts')
}



// workout: 

// {
//   date: new Date(),
//   title: '',
//   comment: '',
//   sessions: [
//     {
//       exerciseId,
//       sets: [{
//         value: '',
//         reps: 15
//       }
//       comment: '',
//     ],
//     }
//   ]
// }