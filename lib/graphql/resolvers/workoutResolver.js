const {
        addWorkout,
        getWorkoutsFromUser
       } = require('../../services/workout')


module.exports = {
  Query: {
    workoutsFromUser: async (_, { userId }) => { 
      const workouts = await getWorkoutsFromUser(userId)
      console.log(workouts)
      return workouts
    }
  },
  Mutation: {
    addWorkout: (_, { input }) => {
      console.log(input)
      return addWorkout(input)
    }
  }
}
