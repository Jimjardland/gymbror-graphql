const db = require('../adapters/db')
const camelcaseKeys = require('camelcase-keys')
const snakecaseKeys = require('snakecase-keys')

async function getWorkoutsFromUser (userId) {
    return db.manyOrNone(`
        SELECT * FROM
        workouts
        WHERE user_id = $1
      `, [userId])
        .then(rows => {
          return rows.map(row => {
            const sessions = row.sessions.map(session => {
              const parsed = JSON.parse(session);
              return camelcaseKeys({
                ...parsed,
                sets : (parsed.sets || []).map(set => camelcaseKeys(set))
              })
            })
          
            return camelcaseKeys({
              ...row,
              sessions
            })
          })
        })
}

async function addWorkout ({
  userId,
  title,
  comment,
  sessions,
  date
}) {
  const params = [
    userId, title, comment, sessions, date
  ]
  return db.one(`
    INSERT INTO
      workouts(
        user_id,
        title,
        comment,
        sessions,
        date)
      VALUES
      ($1, $2, $3, to_jsonb($4), $5)
  `, params)
}

module.exports = {
  addWorkout,
  getWorkoutsFromUser
}