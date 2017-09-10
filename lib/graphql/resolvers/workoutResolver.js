const { addWorkout, getWorkoutsFromUser } = require('../../services/workout')
const { getSessionFromWorkoutId } = require('../../services/session')

module.exports = {
  Query: {
    workoutsFromUser: async (_, { userId }) => getWorkoutsFromUser(userId)
  },
  Mutation: {
    addWorkout: (_, { input }) => addWorkout(input)
  },
  Workout: {
    sessions: ({ id }) => getSessionFromWorkoutId(id)
  }
}
