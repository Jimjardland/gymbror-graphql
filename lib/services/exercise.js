const db = require('../adapters/db')
const camelcaseKeys = require('camelcase-keys')
const snakecaseKeys = require('snakecase-keys')

async function getExercisesFromUser (userId) {
    return db.manyOrNone(`
        SELECT * FROM
        exercises
        WHERE user_id = $1
      `, [userId])
        .then(rows => rows.map(row => camelcaseKeys(row)))
}

async function addExercise (exercise) {
  return db.insert('exercises', snakecaseKeys(exercise))
}

module.exports = {
  addExercise,
  getExercisesFromUser
}