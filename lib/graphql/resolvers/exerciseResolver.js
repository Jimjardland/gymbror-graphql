const { addExercise: saveExercise, getExercisesFromUser } = require('../../services/exercise')

const {
  getSessionFromExerciseId
} = require('../../services/session')


module.exports = {
  Query: {
    exercisesFromUser: (_, { userId }) => getExercisesFromUser(userId)
  },
  Mutation: {
    addExercise: (_, { input }) => saveExercise(input)
  },
  Exercise: {
    sessions: async ({id}) => getSessionFromExerciseId(id)
  }
}
