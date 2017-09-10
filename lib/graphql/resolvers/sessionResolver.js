const { addSession } = require('../../services/session')

module.exports = {
  Mutation: {
    addSession: (_, { input }) => addSession(input)
  }
}
