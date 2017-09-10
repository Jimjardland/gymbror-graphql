const db = require('../adapters/db')
const camelcaseKeys = require('camelcase-keys')
const snakecaseKeys = require('snakecase-keys')

async function addSession ({
  userId,
  workoutId,
  exerciseId,
  comment,
  sets,
  date
}) {
  const params = [
    userId, workoutId, exerciseId, comment, sets, date
  ]
  return db.one(`
    INSERT INTO
      sessions(
        user_id,
        workout_id,
        exercise_id,
        comment,
        sets,
        date)
      VALUES
      ($1, $2, $3, $4, to_jsonb($5), $6)
  `, params)
}

async function getSessionFromWorkoutId(workoutId) {
  return db.manyOrNone(`
          SELECT * FROM
          sessions
          WHERE workout_id = $1
          `, [workoutId])
          .then(rows => formatSessions(rows))
}

async function getSessionFromExerciseId(exerciseId) {
   return db.manyOrNone(`
          SELECT * FROM
          sessions
          WHERE exercise_id = $1
          `, [exerciseId])
          .then(rows => formatSessions(rows))
}

function formatSessions (rows) {
  return rows
    .map(row => { 
        row.sets = row.sets.map(set => {
          return JSON.parse(set)
        })
        return camelcaseKeys(row)
      })
}


module.exports = {
  addSession,
  getSessionFromWorkoutId,
  getSessionFromExerciseId
}