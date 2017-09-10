const db = require('../adapters/db')
const camelcaseKeys = require('camelcase-keys')
const snakecaseKeys = require('snakecase-keys')

async function getWorkoutsFromUser (userId) {
    return db.manyOrNone(`
        SELECT * FROM
        workouts
        WHERE user_id = $1
      `, [userId])
      .then(rows => rows.map(row => camelcaseKeys(row)))
}

async function addWorkout ({
  userId,
  title,
  comment,
  sessions,
  date
}) {
  const params = [
    userId, title, comment, date
  ]
  return db.one(`
    INSERT INTO
      workouts(
        user_id,
        title,
        comment,
        date)
      VALUES
      ($1, $2, $3, $4)
  `, params)
}

module.exports = {
  addWorkout,
  getWorkoutsFromUser
}
