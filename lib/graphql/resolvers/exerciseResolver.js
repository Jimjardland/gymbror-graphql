const {
        addExercise: saveExercise,
        getExercisesFromUser
       } = require('../../services/exercise')


module.exports = {
  Query: {
    exercisesFromUser: (_, { userId }) => getExercisesFromUser(userId)
  },
  Mutation: {
    addExercise: (_, { input }) => {
      console.log(input)
      return saveExercise(input)
    }
  },
  Exercise: {
    sessions: () => [{ name: 'tja'}],
  }
}
